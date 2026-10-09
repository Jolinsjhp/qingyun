// Short sessions share the existing lesson and coding screens and stored results.
let moduleSession=null,moduleAdvanceTimer=null;
const MODULE_KEYS=['review','python','coding','project','reading','career'];
function preferUnlearned(items){const pending=items.filter(l=>!pFor(l.id).level);return pending.length?pending:items;}
function moduleQueue(key){
 const cards=items=>items.map(l=>({kind:'lesson',id:l.id}));
 const code=items=>items.map(p=>({kind:'code',id:p.id}));
 if(key==='review')return cards(due().slice(0,5));
 if(key==='python'){
  const warmups=PLAN.problems.filter(p=>p.level==='基础'&&!['本地样例通过','LeetCode 已通过'].includes(codeFor(p.id).status));
  return [...cards(preferUnlearned(C.lessons.filter(l=>l.unit===0)).slice(0,3)),...code(warmups.slice(0,1))];
 }
 if(key==='coding'){
  const warmups=PLAN.problems.filter(p=>p.level==='基础'&&!['本地样例通过','LeetCode 已通过'].includes(codeFor(p.id).status));
  const bank=state.track==='business'?PLAN.problems.filter(p=>p.level==='SQL'):warmups.length?warmups:PLAN.problems.filter(p=>p.level!=='基础'&&p.level!=='SQL'&&p.level!=='Agent');
  const repeat=bank.filter(p=>codeFor(p.id).due&&codeFor(p.id).due<=day());
  const pending=bank.filter(p=>!['本地样例通过','LeetCode 已通过'].includes(codeFor(p.id).status));
  const ordered=[...repeat,...pending];
  return code((ordered.length?ordered:bank).filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i).slice(0,2));
 }
 if(key==='project'){const steps=PLAN.problems.filter(p=>p.level==='Agent');const pending=steps.filter(p=>codeFor(p.id).status!=='本地样例通过');return code((pending.length?pending:steps).slice(0,2));}
 if(key==='reading')return cards([readingPick()]);
 if(key==='career')return cards(preferUnlearned(C.lessons.filter(l=>l.unit===4)).slice(0,2));
 return [];
}
function recipeModules(target){return `<div class="recipe-modules">${dailyRecipe().map(([icon,title,minutes,desc],i)=>{
 const key=MODULE_KEYS[i],queue=moduleQueue(key);
 const extra=key==='project'?'Agent 项目关卡：填空、运行、检查':key==='career'?'先练需求与面试，再打开作品 / 投递':key==='reading'?'自测后保存阅读笔记即可完成':key==='coding'?'公开测试全通过才继续；原站题手动确认':key==='review'?'答错停留，答对进入下一题':'概念自测 + 一道独立代码练习';
 return `<article class="recipe-module"><div class="row"><span class="icon">${icon}</span><span class="tag">${Math.round(minutes*target/180)} 分钟</span></div><h3>${title}</h3><p>${desc}</p><small>${extra}</small><div class="actions"><button class="primary" data-module="${key}" ${!queue.length?'disabled':''}>${key==='reading'?'开始阅读':key==='project'?'开始项目关卡':key==='career'?'开始自测':'开始练习'}${queue.length?' · '+queue.length+' 项':''} →</button>${key==='project'||key==='career'?`<button data-go="${key==='project'?'agent':'career'}">打开完整任务</button>`:''}</div>${!queue.length?'<small>暂无到期题，可以先学其他模块。</small>':''}</article>`;
 }).join('')}</div><small>模块里的知识自测、代码测试分别判分；完成练习不会自动增加学习分钟。</small>`;}
function cancelModule(){clearTimeout(moduleAdvanceTimer);moduleAdvanceTimer=null;moduleSession=null;}
function startModule(key){cancelModule();const queue=moduleQueue(key);if(!queue.length)return toast('这个模块暂时没有到期练习');moduleSession={key,queue,index:0,passed:[],auto:true};showModuleItem();}
function showModuleItem(){const session=moduleSession;if(!session)return;clearTimeout(moduleAdvanceTimer);const item=session.queue[session.index];if(!item)return finishModule();if(item.kind==='code')openProblem(item.id);else openLesson(item.id);decorateModule(item.kind);}
function decorateModule(kind){const s=moduleSession;if(!s)return;const host=$(kind==='code'?'#code-body':'#lesson-body');const existing=host.querySelector('.module-session');if(existing)existing.remove();const node=document.createElement('section');node.className='module-session';node.innerHTML=`<div class="row"><strong>${esc(dailyRecipe()[MODULE_KEYS.indexOf(s.key)][1])} · ${s.index+1}/${s.queue.length}</strong><label class="auto-label"><input id="module-auto" type="checkbox" ${s.auto?'checked':''}> 答对自动下一题</label></div><div class="bar"><i style="width:${s.index/s.queue.length*100}%"></i></div><div id="module-status" role="status">${s.key==='reading'?'阅读、自测与笔记完成后继续。':'答对后短暂停留再继续；答错留在本题。'}</div><div class="actions"><button id="module-next" disabled>下一题 →</button><button id="module-pause">暂停自动跳题</button></div>`;host.prepend(node);$('#module-auto').onchange=e=>{s.auto=e.target.checked;if(!s.auto)clearTimeout(moduleAdvanceTimer);else if(s.passed.includes(s.index))queueModuleAdvance();};$('#module-next').onclick=advanceModule;$('#module-pause').onclick=()=>{s.auto=false;$('#module-auto').checked=false;clearTimeout(moduleAdvanceTimer);$('#module-status').textContent='已暂停自动跳题，可以查看解释和保存笔记，再点下一题。'};}
function moduleResult(id,correct,{readingComplete=false}={}){
 const s=moduleSession,item=s?.queue[s.index];if(!s||item?.id!==id)return;
 clearTimeout(moduleAdvanceTimer);
 if(!correct){s.passed=s.passed.filter(i=>i!==s.index);$('#module-status').textContent='这题还没通过，先查看解释或测试结果，再试一次。';$('#module-next').disabled=true;return;}
 if(s.key==='reading'&&!readingComplete){$('#module-status').textContent='自测已答对；保存至少 20 字阅读笔记并点“完成阅读卡”后继续。';return;}
 if(!s.passed.includes(s.index))s.passed.push(s.index);
 $('#module-next').disabled=false;$('#module-status').textContent=s.auto?'通过了，马上进入下一题…':'通过了，准备好后点击下一题。';queueModuleAdvance();
}
function queueModuleAdvance(){if(moduleSession?.auto){const session=moduleSession,index=session.index;clearTimeout(moduleAdvanceTimer);moduleAdvanceTimer=setTimeout(()=>{if(moduleSession===session&&session.index===index)advanceModule();},1200);}}
function advanceModule(){const s=moduleSession;if(!s||!s.passed.includes(s.index))return;clearTimeout(moduleAdvanceTimer);const item=s.queue[s.index];if(item.kind==='lesson'&&$('#evidence')){const p=pFor(item.id);p.evidence=$('#evidence').value;state.progress[item.id]=p;save();}else if(item.kind==='code'&&$('#code-editor'))saveCodeDraft(item.id);if(item.kind==='code')stopCode();const sameKind=s.queue[s.index+1]?.kind===item.kind;if(!sameKind){$(item.kind==='code'?'#code-dialog':'#lesson').close();}s.index++;showModuleItem();}
function retryModuleLesson(id){if(!moduleSession)return;clearTimeout(moduleAdvanceTimer);const current=moduleSession.queue[moduleSession.index];if(current?.id===id){openLesson(id);decorateModule('lesson');}}
function finishModule(){const s=moduleSession;if(!s)return;const title=dailyRecipe()[MODULE_KEYS.indexOf(s.key)][1],task=s.key==='project'||s.key==='career';moduleSession=null;$('#lesson-body').innerHTML=`<section class="module-finished"><span class="eyebrow">SESSION COMPLETE</span><h1>${esc(title)}，练习完成 🌿</h1><p>本轮通过 ${s.passed.length}/${s.queue.length} 项。${s.key==='project'?'本轮项目关卡已完成，可以继续其他关卡或下载完整项目。':task?'基础自测已完成，接下来进入投递任务。':'结果和已有笔记已保存；代码通过指本地公开案例通过。'}</p><div class="actions"><button id="finish-module" class="primary">${task?'进入实际任务':'回到今日配方'}</button><button id="repeat-module">再练一个模块</button></div></section>`;$('#finish-module').onclick=()=>{$('#lesson').close();go(s.key==='project'?'agent':task?'career':'today')};$('#repeat-module').onclick=()=>{$('#lesson').close();go('today')};if(!$('#lesson').open)$('#lesson').showModal();}
