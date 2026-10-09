'use strict';
// Each run uses a fresh browser worker; code is never sent to a grading server.
const runtimeURL='https://cdn.jsdelivr.net/pyodide/v0.29.3/full/';
let runtime;
(async()=>{try{importScripts(runtimeURL+'pyodide.js');runtime=await loadPyodide({indexURL:runtimeURL});postMessage({type:'ready'});}catch(e){postMessage({type:'error',error:'浏览器 Python 下载失败。请检查联网，或在 LeetCode 运行。\n'+String(e)});}})();
self.onmessage=async({data})=>{try{
 runtime.globals.set('_qy_payload',JSON.stringify(data));
 const output=await runtime.runPythonAsync(`
import json, io, contextlib, traceback, copy
from typing import List, Optional, Dict
_payload = json.loads(_qy_payload)
class _CappedOutput(io.TextIOBase):
    def __init__(self):
        self.text = ""
    def write(self, text):
        self.text += text[:max(0, 4000-len(self.text))]
        return len(text)
_out = _CappedOutput()
_namespace = {"List": List, "Optional": Optional, "Dict": Dict}
_cases = []
with contextlib.redirect_stdout(_out), contextlib.redirect_stderr(_out):
    exec(_payload["code"], _namespace)
    for _case in _payload["tests"]:
        if _payload.get("mode") == "script":
            _label = _case["label"]
            _matching = [line for line in _out.text.splitlines() if line.startswith(_label+"：") or line.startswith(_label+":")]
            _passed = any(line[len(_label)+1:].strip() for line in _matching)
            _cases.append({"pass": bool(_passed), "actual": _matching[0] if _matching else "缺少这一行"})
            continue
        try:
            _args = copy.deepcopy(_case["args"])
            _solver = _namespace["Solution"]()
            _actual = getattr(_solver, _payload["method"])(*_args)
            if _case.get("mutates"):
                _actual = _args[0]
            _expected = _case["expected"]
            if _case.get("normalize") == "sort":
                _passed = isinstance(_actual, list) and sorted(_actual) == sorted(_expected)
            else:
                _passed = type(_actual) is type(_expected) and _actual == _expected
            _cases.append({"pass": _passed, "actual": _actual})
        except Exception as _error:
            _cases.append({"pass": False, "actual": None, "error": type(_error).__name__+": "+str(_error)[:1500]})
json.dumps({"cases": _cases, "stdout": _out.text}, default=str)
`);
 postMessage({type:'result',result:JSON.parse(output)});
}catch(e){postMessage({type:'error',error:String(e).slice(0,4000)});}};
