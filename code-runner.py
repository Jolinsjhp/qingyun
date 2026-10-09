"""Verify the actual browser-worker harness with Python, including mutation and errors."""
import json
from pathlib import Path

source = Path('python-worker.js').read_text()
harness = source.split('runtime.runPythonAsync(`', 1)[1].split('`);', 1)[0]
content = json.loads(Path('learning-plan.js').read_text().removeprefix('window.QINGYUN_PLAN = ').strip().removesuffix(';'))
problems = {p['id']: p for p in content['problems']}

def evaluate(problem_id, code):
    problem = problems[problem_id]
    namespace = {'_qy_payload': json.dumps({'code': code, 'method': problem['method'], 'mode': problem.get('mode'), 'tests': problem['tests']})}
    setup, final = harness.rsplit('\njson.dumps(', 1)
    exec(setup, namespace)
    return json.loads(eval('json.dumps(' + final.strip(), namespace))

correct = evaluate('py1', 'class Solution:\n    def totalMinutes(self, hours, minutes):\n        return hours * 60 + minutes')
assert all(c['pass'] for c in correct['cases'])
wrong = evaluate('py1', 'class Solution:\n    def totalMinutes(self, hours, minutes):\n        return 0')
assert sum(c['pass'] for c in wrong['cases']) == 1
error = evaluate('py1', 'class Solution:\n    def totalMinutes(self, hours, minutes):\n        raise ValueError("example")')
assert all(not c['pass'] and 'ValueError' in c['error'] for c in error['cases'])
mutating = evaluate('lc283', 'class Solution:\n    def moveZeroes(self, nums):\n        vals = [x for x in nums if x != 0]\n        nums[:] = vals + [0] * (len(nums) - len(vals))')
assert all(c['pass'] for c in mutating['cases'])
order = evaluate('lc1', 'class Solution:\n    def twoSum(self, nums, target):\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] + nums[j] == target:\n                    return [j, i]')
assert all(c['pass'] for c in order['cases'])
bool_type = evaluate('lc217', 'class Solution:\n    def containsDuplicate(self, nums):\n        return 1')
assert not any(c['pass'] for c in bool_type['cases'])
output = evaluate('py1', 'class Solution:\n    def totalMinutes(self, hours, minutes):\n        print("x" * 5000)\n        return hours * 60 + minutes')
assert len(output['stdout']) <= 4000
hello = evaluate('pyhello', 'print("姓名：Lin")\nprint("目标岗位：AI 实施")\nprint("本周学习目标：完成 Python 入门")')
assert all(c['pass'] for c in hello['cases'])
missing = evaluate('pyhello', 'print("姓名：")\nprint("目标岗位：AI 实施")')
assert [c['pass'] for c in missing['cases']] == [False, True, False]
print('Passed: actual worker harness, correct/wrong answers, per-case errors, in-place changes, unordered indices, strict bool types and capped output.')

for problem in problems.values():
    assert problem.get("reference") and problem.get("referenceExplanation")
    if problem["tests"]:
        result = evaluate(problem["id"], problem["reference"])
        assert all(c["pass"] for c in result["cases"]), (problem["id"], result)
print("Passed: all runnable reference answers against actual worker public tests.")
