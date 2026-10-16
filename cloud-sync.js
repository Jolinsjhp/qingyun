'use strict';
// Whole-state compare-and-swap. Never silently merge conflicting code or notes.
class QingyunSyncEngine {
 constructor({read,apply,valid,storage,transport,notify,scope}){Object.assign(this,{read,apply,valid,storage,transport,notify,scope});this.owner=null;this.meta=null;this.busy=false;this.conflict=null;this.pending=false;this.status='仅本机保存';this.generation=0;}
 key(){return 'qingyun-cloud-meta:'+this.scope;}
 say(s){this.status=s;this.notify(s);}
 backup(reason){const value=JSON.stringify(this.read());this.storage.setItem('qingyun-recovery:'+Date.now()+':'+Math.random().toString(36).slice(2),JSON.stringify({reason,createdAt:new Date().toISOString(),snapshot:JSON.parse(value)}));return value;}
 remember(){this.storage.setItem(this.key(),JSON.stringify(this.meta));}
 attach(owner){this.generation++;this.owner=owner;this.conflict=null;this.meta=null;try{const m=JSON.parse(this.storage.getItem(this.key()));if(m&&m.owner===owner&&Number.isInteger(m.revision)&&typeof m.base==='string')this.meta=m;}catch{}this.pending=!!owner&&!this.meta;this.say(!owner?'未登录 · 仅本机保存':this.pending?'首次登录 · 请确认进度迁移':'正在检查云端进度');}
 changed(){if(!this.owner||!this.meta)return;this.say('本机已保存 · 等待同步');}
 async sync({canApply=true}={}){
  if(!this.owner||!this.meta||this.busy||this.conflict||this.pending)return;
  this.busy=true;const generation=this.generation,owner=this.owner,active=()=>generation===this.generation&&owner===this.owner;
  try{
   this.say('同步中…');const remote=await this.transport.read(owner);if(!active())return;
   if(remote&&!this.valid(remote.snapshot))throw Error('云端进度格式不兼容，未覆盖本机');
   const local=JSON.stringify(this.read()),dirty=local!==this.meta.base;
   if((remote?remote.revision:0)!==this.meta.revision){
    if(!dirty&&remote&&canApply){this.backup('自动接收云端前');this.apply(remote.snapshot);this.meta={owner,revision:remote.revision,base:JSON.stringify(this.read())};this.remember();this.say('已同步 · '+new Date().toLocaleTimeString());return;}
    this.backup('发现同步冲突');this.conflict={remote};this.say('两端进度不同 · 请在计划与备份中选择');return;
   }
   if(!dirty){this.say('已同步 · '+new Date().toLocaleTimeString());return;}
   const submitted=JSON.parse(local);const saved=await this.transport.write(submitted,this.meta.revision);if(!active())return;
   if(!saved){this.say('检测到其他设备更新，正在重新检查');return;}
   this.meta={owner,revision:saved.revision,base:local};this.remember();this.say(JSON.stringify(this.read())===local?'已同步 · '+new Date().toLocaleTimeString():'本机有新修改 · 等待下一次同步');
  }catch(e){if(active())this.say('同步未完成 · 本机进度保留：'+(e.message||'请联网后重试'));}finally{this.busy=false;}
 }
 async choose(mode){
  if(!this.owner||this.busy)return;this.busy=true;const generation=this.generation,owner=this.owner;
  try{
   const remote=await this.transport.read(owner);if(generation!==this.generation)return;
   if(remote&&!this.valid(remote.snapshot))throw Error('云端格式不兼容');
   this.backup('手动迁移或解决冲突前');
   if(remote)this.storage.setItem('qingyun-cloud-alternative:'+Date.now(),JSON.stringify(remote));
   if(mode==='remote'){
    if(!remote)throw Error('云端还没有进度，请选择上传本机');
    this.apply(remote.snapshot);this.meta={owner,revision:remote.revision,base:JSON.stringify(this.read())};
   }else{
    this.meta={owner,revision:remote?remote.revision:0,base:remote?JSON.stringify(remote.snapshot):''};
   }
   this.remember();this.pending=false;this.conflict=null;this.say('迁移选择已保存');
  }catch(e){this.say('迁移未完成 · '+e.message);}finally{this.busy=false;}
  await this.sync();
 }
}
window.QingyunSyncEngine=QingyunSyncEngine;
window.QingyunCloud=(()=>{
 let client=null,engine=null,session=null,timer=null,formDirty=false,email='',initStarted=false;
 const config=()=>window.QINGYUN_CLOUD_CONFIG||{};
 const canReceive=()=>!formDirty&&!document.querySelector('dialog[open]');
 function publicKey(key){if(key.startsWith('sb_publishable_'))return true;try{return JSON.parse(atob(key.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).role==='anon';}catch{return false;}}
 function configured(){const c=config();return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(c.url)&&typeof c.publishableKey==='string'&&!!c.publishableKey&&publicKey(c.publishableKey);}
 function show(message){const status=document.querySelector('#cloud-status');if(status)status.textContent=message;const badge=document.querySelector('#cloud-badge');if(badge)badge.textContent=message;const actions=document.querySelector('#cloud-resolve');if(actions)actions.hidden=!(engine&&(engine.pending||engine.conflict));}
 function markup(){return `<section class="card"><h2>登录与云端自动保存</h2><p id="cloud-status" role="status">${esc(engine?engine.status:configured()?'正在连接…':'云服务尚未配置 · 当前进度仍保存在本机')}</p><p>课程、代码、笔记、打卡和个人背景将保存在你的账户中。登录后约 1 秒上传，其他设备每 15 秒及回到页面时检查更新；断网先保存在本机。</p>${configured()?`<p>${session?'当前账户：'+esc(session.user.email):'使用同一个邮箱在手机和电脑登录。点击登录邮件里的链接即可；当前内置邮件服务仅支持 Supabase 组织成员邮箱，请先使用注册 Supabase 的邮箱。'}</p><form id="cloud-login"><label for="cloud-email">邮箱</label><input id="cloud-email" type="email" autocomplete="email" required value="${esc(email)}"><button>发送登录邮件</button></form><details><summary>邮件中有验证码？在这里输入</summary><form id="cloud-verify"><label for="cloud-token">邮箱验证码</label><input id="cloud-token" inputmode="numeric" autocomplete="one-time-code" required minlength="6" maxlength="12"><button>验证并登录</button></form></details><div class="actions"><button id="cloud-now">立即同步 / 重试</button><button id="cloud-logout">退出登录并保留本机进度</button></div>`:'<p>待配置数据库与邮箱登录后启用。无需重置或删除现有进度。</p>'}<div id="cloud-resolve" ${engine&&(engine.pending||engine.conflict)?'':'hidden'}><h3>先确认要使用哪份进度</h3><p>系统会先保留本机和云端副本，再执行你的选择。两台设备同时改写时不自动拼接代码。</p><button id="cloud-local">使用本机进度并上传</button><button id="cloud-remote">使用云端进度</button></div><button id="cloud-recovery">下载迁移前与冲突备份</button></section>`;}
 function onSave(){if(!engine)return;engine.changed();clearTimeout(timer);timer=setTimeout(()=>engine.sync({canApply:canReceive()}),1000);}
 function bind(){
  formDirty=false;
  if(document.querySelector('#cloud-login'))document.querySelector('#cloud-login').onsubmit=async e=>{e.preventDefault();if(!client)return;email=document.querySelector('#cloud-email').value.trim();show('正在发送登录邮件…');const {error}=await client.auth.signInWithOtp({email,options:{shouldCreateUser:true,emailRedirectTo:location.origin+location.pathname}});show(error?'登录邮件发送失败：'+error.message:'登录邮件已发送。请点击邮件里的登录链接，回到青云；不要把链接或验证码发到聊天中。');};
  if(document.querySelector('#cloud-verify'))document.querySelector('#cloud-verify').onsubmit=async e=>{e.preventDefault();if(!client)return;email=document.querySelector('#cloud-email').value.trim();const token=document.querySelector('#cloud-token').value.trim();show('正在验证…');const {error}=await client.auth.verifyOtp({email,token,type:'email'});if(error)show('验证失败，请检查验证码或重新发送');};
  const now=document.querySelector('#cloud-now');if(now)now.onclick=()=>{formDirty=false;engine?.sync();};
  const logout=document.querySelector('#cloud-logout');if(logout)logout.onclick=async()=>{clearTimeout(timer);engine?.backup('退出登录前');engine?.attach(null);const {error}=await client.auth.signOut({scope:'local'});if(error)show('退出未完成，请重试');};
  for(const [id,mode] of [['cloud-local','local'],['cloud-remote','remote']]){const b=document.querySelector('#'+id);if(b)b.onclick=()=>{if(confirm(mode==='local'?'先保存双方副本，再以本机进度作为云端版本？':'先保存双方副本，再以云端进度替换当前本机显示？')){formDirty=false;engine.choose(mode);}};}
  const recovery=document.querySelector('#cloud-recovery');if(recovery)recovery.onclick=()=>{const records={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k.startsWith('qingyun-recovery:')||k.startsWith('qingyun-cloud-alternative:')||k==='qingyun-pre-cloud-v1')records[k]=JSON.parse(localStorage.getItem(k));}const url=URL.createObjectURL(new Blob([JSON.stringify(records,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='qingyun-recovery.json';a.click();URL.revokeObjectURL(url);};
 }
 async function init(){
  if(initStarted)return;initStarted=true;
  // Immutable migration checkpoint before any cloud operation; old KEY is untouched.
  try{if(!localStorage.getItem('qingyun-pre-cloud-v1'))localStorage.setItem('qingyun-pre-cloud-v1',JSON.stringify(state));}catch{show('无法创建升级备份，请先导出完整进度');return;}
  if(!configured())return;
  try{
   const {createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm');
   const c=config();client=createClient(c.url,c.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true},global:{fetch:async(url,options={})=>{const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);const abort=()=>controller.abort();options.signal?.addEventListener('abort',abort,{once:true});try{return await fetch(url,{...options,signal:controller.signal});}finally{clearTimeout(timeout);options.signal?.removeEventListener('abort',abort);}}}});
   engine=new QingyunSyncEngine({scope:c.url,storage:localStorage,read:()=>state,valid:validState,apply:s=>{state=normaliseState(s);localStorage.setItem(KEY,JSON.stringify(state));formDirty=false;render();},notify:show,transport:{read:async owner=>{const {data,error}=await client.from('qingyun_progress').select('snapshot,revision,updated_at').eq('user_id',owner).maybeSingle();if(error)throw error;return data;},write:async(snapshot,revision)=>{const {data,error}=await client.rpc('qingyun_save',{p_snapshot:snapshot,p_expected:revision});if(error)throw error;return data?.[0]||null;}}});
   const update=s=>{session=s;engine.attach(s?.user.id||null);if(engine.pending)go('settings');else if(route==='settings')render();engine.sync({canApply:canReceive()});};
   client.auth.onAuthStateChange((event,s)=>{if(['SIGNED_IN','SIGNED_OUT','INITIAL_SESSION'].includes(event))setTimeout(()=>update(s),0);});
   const {data,error}=await client.auth.getSession();if(error)throw error;update(data.session);
   setInterval(()=>engine.sync({canApply:canReceive()}),15000);
   window.addEventListener('online',()=>engine.sync({canApply:canReceive()}));document.addEventListener('visibilitychange',()=>{if(!document.hidden)engine.sync({canApply:canReceive()});});
   document.addEventListener('input',e=>{if(e.target.closest('#view,dialog'))formDirty=true;});
   window.addEventListener('storage',e=>{if(e.key===KEY){engine.say('另一个标签页修改了进度，请先保存并刷新此页');engine.pending=true;}});
  }catch(e){show('云服务连接失败 · 本机进度保留，请刷新重试');}
 }
 return {markup,bind,onSave,init};
})();
