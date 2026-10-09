window.SPROUT_CONTENT = {
  "sources": [
    [
      "CS50P · Python 主课",
      "https://cs50.harvard.edu/python/",
      "Python 从变量、循环到测试。先做题，再看下一集。"
    ],
    [
      "LeetCode · 面试经典 150",
      "https://leetcode.cn/studyplan/top-interview-150/",
      "题型参考库；不要求初学者 16 周刷完，也不代表公司真题。"
    ],
    [
      "Amazon · 官方面试主题",
      "https://www.amazon.jobs/content/en-gb/how-we-hire/interview-prep/software-development-topics",
      "参考数据结构、算法、数据库、网络和工程基础。"
    ],
    [
      "Hugging Face · Agents Course",
      "https://huggingface.co/learn/agents-course/en/unit0/introduction",
      "Python 基础之后学习工具、Agent 循环与实践。"
    ],
    [
      "OpenAI · Agent 官方资源",
      "https://developers.openai.com/learn/agents",
      "学习工具调用、追踪和评估；实际 API 使用可能收费。"
    ],
    [
      "Harvard Stat 110 · YouTube",
      "https://stat110.hsites.harvard.edu/youtube",
      "挑选计数、条件概率、贝叶斯、期望章节。"
    ],
    [
      "Karpathy · Zero to Hero",
      "https://github.com/karpathy/nn-zero-to-hero",
      "进阶选修，Python 和数学打牢后再看。"
    ],
    [
      "GitHub · Spec Kit",
      "https://github.com/github/spec-kit",
      "学习先定义需求、验收标准，再规划、拆任务和实现。"
    ],
    [
      "CS50P · 第一课 YouTube",
      "https://www.youtube.com/watch?v=JP7ITIXGpHk",
      "函数与变量，观看后自己写一个小程序。"
    ]
  ],
  "units": [
    [
      "Python 起步",
      "10.08–10.25 · 写得出、解释得清"
    ],
    [
      "算法与工程基础",
      "10.26–11.22 · 先掌握模式，再提高速度"
    ],
    [
      "概率与推理",
      "每周穿插 2 次 · 概率题作为补充"
    ],
    [
      "Agent 开发",
      "11.23–12.20 · 能调用工具，也能验证结果"
    ],
    [
      "SDD 与求职",
      "贯穿全程 · 12.21–01.31 集中面试"
    ]
  ],
  "lessons": [
    {
      "id": "l1",
      "unit": 0,
      "title": "变量：给信息起名字",
      "body": "变量像贴了标签的盒子。Python 中 age = 20 把整数绑定到名字 age；name = \"Lin\" 是字符串。print(name) 输出内容。\n先在终端运行 python3，再试着输入 print(\"Hello AI\")。退出交互环境用 exit()。",
      "question": "执行 x = 3; x = x + 2 后，x 是？",
      "options": [
        "3",
        "5",
        "32"
      ],
      "answer": 1,
      "explanation": "右侧先计算 3 + 2，再重新绑定 x，所以结果为整数 5。",
      "practice": "创建 hello.py，打印你的名字、目标岗位和本周学习目标。运行 python3 hello.py。保存运行结果。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l2",
      "unit": 0,
      "title": "类型与输入",
      "body": "input() 得到的是字符串，即使用户输入 20。需要算术时先用 int() 或 float() 转换；无法转换的文本会引发 ValueError。\n例：age = int(input(\"年龄：\"))，print(age + 1)。",
      "question": "input() 读到 \"2\"，直接与 \"3\" 相加得到？",
      "options": [
        "5",
        "23",
        "报错"
      ],
      "answer": 1,
      "explanation": "字符串的 + 表示拼接；int(\"2\") + int(\"3\") 才得到 5。",
      "practice": "写一个学习分钟计算器，输入小时与分钟，输出总分钟；尝试输入非法文本。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l3",
      "unit": 0,
      "title": "条件：程序如何做选择",
      "body": "if 根据布尔条件选择分支，elif 表示其他条件，else 是剩余情况。Python 用缩进表示代码块。== 判断相等，= 是赋值。\nif minutes >= 180:\n    print(\"达标\")\nelse:\n    print(\"继续一点点\")",
      "question": "判断 x 是否等于 3，应该用？",
      "options": [
        "x = 3",
        "x == 3",
        "x => 3"
      ],
      "answer": 1,
      "explanation": "== 是相等比较，返回 True 或 False。",
      "practice": "写三档学习反馈：不足 60、60 到 179、180 及以上。测试 59、60、179、180。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l4",
      "unit": 0,
      "title": "循环与累加",
      "body": "for 用来遍历序列，range(3) 依次产生 0、1、2。循环内用 total += value 累加。while 适合次数未知的循环，但必须让退出条件有机会成立。",
      "question": "sum(range(4)) 等于？",
      "options": [
        "6",
        "10",
        "4"
      ],
      "answer": 0,
      "explanation": "range(4) 为 0、1、2、3，和为 6。",
      "practice": "不使用 sum，统计列表 [30, 45, 60] 的总学习时间。测试空列表。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l5",
      "unit": 0,
      "title": "函数：把步骤变成工具",
      "body": "def 定义函数，参数是输入，return 返回输出。print 只是显示，不等于返回结果。\ndef total_minutes(hours, minutes):\n    return hours * 60 + minutes\n函数应有明确输入、输出和边界。",
      "question": "函数没有 return 时默认返回？",
      "options": [
        "0",
        "None",
        "最后打印的内容"
      ],
      "answer": 1,
      "explanation": "隐式返回 None；打印不会自动变成返回值。",
      "practice": "把分钟计算器改为函数，测试 (3,0)、(0,30)，明确负数输入如何处理。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l6",
      "unit": 0,
      "title": "列表与字典",
      "body": "列表保留顺序，用下标访问，首个下标是 0。字典用键找到值，例如 {\"python\": 40}。字典查找在通常假设下平均 O(1)，但不应理解为任何情况下都恒定。",
      "question": "a = [10,20,30]，a[1] 是？",
      "options": [
        "10",
        "20",
        "30"
      ],
      "answer": 1,
      "explanation": "下标从 0 开始，a[1] 是第二个元素。",
      "practice": "按科目累计学习分钟，用字典保存；对不存在的科目用 get(name, 0)。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l7",
      "unit": 0,
      "title": "异常、文件与 JSON",
      "body": "异常表示执行时的问题，try/except 可以处理预计中的失败。JSON 是常见的数据交换格式。with open(...) 能帮助关闭文件。保存学习记录时不要把密码和 API key 写进去。",
      "question": "读取不存在的文件最可能产生？",
      "options": [
        "FileNotFoundError",
        "SyntaxError",
        "正常得到空列表"
      ],
      "answer": 0,
      "explanation": "文件不存在会产生 FileNotFoundError，需要明确提示或初始化。",
      "practice": "用 json.dump 保存学习记录，再 json.load 读取；处理首次运行没有文件的情况。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l8",
      "unit": 0,
      "title": "Git 与可复现项目",
      "body": "Git 管理代码历史，GitHub 托管仓库。一次提交应该描述一个具体改变。README 写清楚用途、启动方式、示例和限制。用 .gitignore 排除 .env、缓存和虚拟环境。",
      "question": "哪项适合放进公开 GitHub？",
      "options": [
        "真实 API key",
        "可复现代码与 .env.example",
        "客户私人数据"
      ],
      "answer": 1,
      "explanation": "提交示例配置和代码，真实密钥通过环境变量管理。",
      "practice": "建立 learning-log 仓库，添加 hello.py、README 和 .gitignore，写一次描述清晰的提交。不要仅追求绿格子。",
      "source": 0,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l9",
      "unit": 1,
      "title": "复杂度：增长的速度",
      "body": "O(n) 描述输入变大时操作次数的增长量级，不是运行秒数。一次扫描长度 n 的数组通常是 O(n)；两层各 n 次循环通常是 O(n²)。还要说明额外空间。",
      "question": "两层循环都完整执行 n 次，复杂度通常是？",
      "options": [
        "O(1)",
        "O(n)",
        "O(n²)"
      ],
      "answer": 2,
      "explanation": "执行次数约 n × n。注意内层次数若不是 n，结论可能不同。",
      "practice": "写一次线性扫描和两层循环，对 n=10、100 统计执行次数，解释差异。",
      "source": 2,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l10",
      "unit": 1,
      "title": "哈希表：两数之和",
      "body": "边扫描边记录已经看到的值和下标。对于 x，寻找 target - x；先查再加入，避免重复使用同一个元素。平均时间 O(n)，额外空间 O(n)。",
      "question": "nums=[3,3], target=6，合法下标是？",
      "options": [
        "[0,0]",
        "[0,1]",
        "没有解"
      ],
      "answer": 1,
      "explanation": "两个相同值来自不同下标，合法。不能重复使用下标 0。",
      "practice": "LeetCode 1 Two Sum：先写 O(n²) 暴力解，再改为哈希表。提交通过后记录两个方案的复杂度。",
      "source": 1,
      "link": "https://leetcode.com/problems/two-sum/",
      "minutes": 25
    },
    {
      "id": "l11",
      "unit": 1,
      "title": "双指针：有序序列",
      "body": "对于有序数组求两数目标和，可以从两端出发：和太小则左指针右移，和太大则右指针左移。正确性依赖有序性。",
      "question": "有序数组两端之和比 target 小，应该？",
      "options": [
        "左指针右移",
        "右指针左移",
        "立即返回无解"
      ],
      "answer": 0,
      "explanation": "增大较小的一端才可能增大和。",
      "practice": "LeetCode 125 Valid Palindrome：过滤非字母数字、忽略大小写。测试空串与标点。",
      "source": 1,
      "link": "https://leetcode.com/problems/valid-palindrome/",
      "minutes": 25
    },
    {
      "id": "l12",
      "unit": 1,
      "title": "滑动窗口：连续区间",
      "body": "窗口维护一段连续区间。右端扩张，违反约束时收缩左端。求无重复字符最长子串时，要循环移除字符直到恢复无重复约束。",
      "question": "遇到重复字符后，左端应该？",
      "options": [
        "永远不动",
        "收缩直到窗口无重复",
        "清空所有历史答案"
      ],
      "answer": 1,
      "explanation": "恢复窗口约束，同时保存历史最大长度。",
      "practice": "LeetCode 3：先手动追踪 abba 的窗口变化，再实现。解释为什么只移动一次左端可能不够。",
      "source": 1,
      "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "minutes": 25
    },
    {
      "id": "l13",
      "unit": 1,
      "title": "栈：最后来的先处理",
      "body": "栈是后进先出。遇到左括号压栈，遇到右括号检查栈顶是否匹配；最后必须为空。空栈弹出应视为无效输入。",
      "question": "字符串 ([)] 是否括号有效？",
      "options": [
        "有效",
        "无效",
        "只看数量相等即可"
      ],
      "answer": 1,
      "explanation": "嵌套顺序不匹配，数量相等不足以保证有效。",
      "practice": "LeetCode 20 Valid Parentheses：测试空串、单个右括号、交错嵌套。",
      "source": 1,
      "link": "https://leetcode.com/problems/valid-parentheses/",
      "minutes": 25
    },
    {
      "id": "l14",
      "unit": 1,
      "title": "二分查找：每次排除一半",
      "body": "二分需要有序或单调条件。先选闭区间 [left,right] 或半开区间 [left,right)，全过程保持一致。闭区间通常在 left <= right 时继续。",
      "question": "二分查找在有序数组中的时间复杂度？",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n²)"
      ],
      "answer": 1,
      "explanation": "每次把剩余候选数量大致减半。",
      "practice": "LeetCode 704：测试单元素、找不到、首尾位置；用语言解释循环边界。",
      "source": 1,
      "link": "https://leetcode.com/problems/binary-search/",
      "minutes": 25
    },
    {
      "id": "l15",
      "unit": 1,
      "title": "链表与指针",
      "body": "链表节点包含值和下一个节点的引用。反转时先保存 next，再修改指向，否则可能丢失后面的链。通常 O(n) 时间、O(1) 额外空间。",
      "question": "反转当前节点之前，最需要保存？",
      "options": [
        "链表总和",
        "原来的 next",
        "排序后的所有值"
      ],
      "answer": 1,
      "explanation": "先保存后续引用才能继续遍历。",
      "practice": "LeetCode 206 Reverse Linked List：画出 1→2→3 的每轮 prev、cur、next。",
      "source": 1,
      "link": "https://leetcode.com/problems/reverse-linked-list/",
      "minutes": 25
    },
    {
      "id": "l16",
      "unit": 1,
      "title": "树与 BFS / DFS",
      "body": "树的 DFS 深入一个分支再返回，BFS 按层访问，常用队列。树深度递归公式是 1 + max(左深度,右深度)，空树深度为 0。",
      "question": "无权图中找最少边数的路径，首选？",
      "options": [
        "BFS",
        "任意 DFS",
        "排序所有节点"
      ],
      "answer": 0,
      "explanation": "BFS 按距离层次扩展，首次到达的路径具有最少边数。",
      "practice": "LeetCode 104 求树深度，再做 102 层序遍历。解释队列与递归栈的空间开销。",
      "source": 1,
      "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      "minutes": 25
    },
    {
      "id": "l17",
      "unit": 1,
      "title": "图与 visited",
      "body": "图可能有环，遍历需要 visited 避免重复。网格可看作图：每个格子是节点，上下左右是边。BFS 入队时就标记能避免重复入队。",
      "question": "带环图遍历忘记 visited 可能？",
      "options": [
        "更准确",
        "无限重复或重复工作",
        "自动停止"
      ],
      "answer": 1,
      "explanation": "环可以让程序反复回到已访问节点。",
      "practice": "LeetCode 200 Number of Islands：画网格、写遍历，说明是否修改原输入。",
      "source": 1,
      "link": "https://leetcode.com/problems/number-of-islands/",
      "minutes": 25
    },
    {
      "id": "l18",
      "unit": 1,
      "title": "动态规划：复用子问题",
      "body": "动态规划先定义状态含义、转移方程、初始状态和计算顺序。爬楼梯每次 1 或 2 步：ways(n)=ways(n-1)+ways(n-2)。采用 ways(0)=1、ways(1)=1 的定义。",
      "question": "按上面定义，ways(3) 是？",
      "options": [
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "ways(2)=2，ways(3)=2+1=3。",
      "practice": "LeetCode 70：先画递归树，再做表格，再只保留两个变量。",
      "source": 1,
      "link": "https://leetcode.com/problems/climbing-stairs/",
      "minutes": 25
    },
    {
      "id": "l19",
      "unit": 1,
      "title": "SQL、HTTP 与测试",
      "body": "SELECT 选列，WHERE 筛选，GROUP BY 分组。HTTP 描述客户端与服务端请求响应；4xx 通常是客户端问题，5xx 通常是服务端问题。单元测试覆盖正常、边界和失败情况。",
      "question": "HTTP 500 通常表示？",
      "options": [
        "服务器内部错误",
        "请求成功",
        "没有变化"
      ],
      "answer": 0,
      "explanation": "500 是服务端内部错误，需要日志定位，而不是盲目重试。",
      "practice": "用 SQLite 建学习记录表，按科目汇总分钟；写 3 个函数测试并保存运行命令。",
      "source": 2,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l20",
      "unit": 2,
      "title": "计数与等可能事件",
      "body": "概率 = 有利结果数 / 全部结果数，需要结果等可能。两枚公平独立硬币的样本空间是 HH、HT、TH、TT，不能把“0、1、2 个正面”当作三个等可能结果。",
      "question": "两枚公平独立硬币恰好一个正面的概率？",
      "options": [
        "1/3",
        "1/2",
        "1/4"
      ],
      "answer": 1,
      "explanation": "HT、TH 是 2 个结果，共 4 个等可能结果。",
      "practice": "画样本空间；用 Python 模拟 10000 次，比较经验频率与 0.5。",
      "source": 5,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l21",
      "unit": 2,
      "title": "条件概率与独立性",
      "body": "P(A|B)=P(A∩B)/P(B)，前提 P(B)>0。独立意味着 P(A∩B)=P(A)P(B)。互斥意味着不能同时发生，正概率事件互斥通常并不独立。",
      "question": "公平骰子已知点数为偶数，得到 6 的概率？",
      "options": [
        "1/6",
        "1/3",
        "1/2"
      ],
      "answer": 1,
      "explanation": "条件样本空间只有 2、4、6。",
      "practice": "手算抽牌不放回与放回两种情况，解释独立性为何不同。",
      "source": 5,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l22",
      "unit": 2,
      "title": "贝叶斯：别忽视基础比例",
      "body": "贝叶斯把先验和证据结合。某类别占 1%，检测灵敏度 90%，非该类别的误报率 10%。10000 个样本中真正阳性约 90，误报约 990。",
      "question": "上述检测阳性后属于该类别的概率约？",
      "options": [
        "90%",
        "8.3%",
        "1%"
      ],
      "answer": 1,
      "explanation": "90/(90+990)≈8.3%。检测准确度不能直接当后验概率。",
      "practice": "用树图重算；再把先验改为 50%，比较后验变化。这里只是数学模型。",
      "source": 5,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l23",
      "unit": 2,
      "title": "期望与随机算法",
      "body": "期望是可能值按概率加权的平均。期望具有线性性，即使变量不独立也有 E[X+Y]=E[X]+E[Y]。两个独立公平骰子的点数和期望为 7。",
      "question": "公平骰子的点数期望是？",
      "options": [
        "3",
        "3.5",
        "4"
      ],
      "answer": 1,
      "explanation": "(1+2+3+4+5+6)/6=3.5。",
      "practice": "推导抛硬币直到首次正面的期望次数为 2，模拟验证；进阶研究蓄水池抽样。",
      "source": 5,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l24",
      "unit": 3,
      "title": "Agent 与固定工作流",
      "body": "工作流按照预先写好的步骤运行。Agent 在任务、工具与反馈之间选择下一步。Agent 不一定需要多个角色；先从一个明确任务、两个工具、一个停止条件开始。",
      "question": "Agent 的工具调用结果失败了，应该？",
      "options": [
        "假装成功",
        "检查失败并在限制内恢复",
        "永远重试"
      ],
      "answer": 1,
      "explanation": "需要处理错误并有步数、时间或预算上限。",
      "practice": "画出“读取学习记录→推荐练习→记录结果”的流程，标出哪些步骤由规则确定。",
      "source": 3,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l25",
      "unit": 3,
      "title": "工具调用与结构化参数",
      "body": "模型提出工具名和参数，程序检查参数后执行，结果再交给模型。工具需要清晰 schema。模型输出不应直接当 SQL 或 shell 命令运行。",
      "question": "工具执行前应检查？",
      "options": [
        "参数类型、范围和权限",
        "模型语气是否自信",
        "只检查字数"
      ],
      "answer": 0,
      "explanation": "结构、业务范围和权限检查帮助防止错误执行。",
      "practice": "先不接模型，用 Python 写 get_due_reviews(date) 工具，测试非法日期与空数据。",
      "source": 4,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l26",
      "unit": 3,
      "title": "RAG：先检索再回答",
      "body": "RAG 检索相关资料再生成回答。流程包括切分、索引、检索和带来源回答。向量相似度不等于事实正确；找不到支持时应说证据不足。",
      "question": "知识库没有支持答案的资料时应该？",
      "options": [
        "编一个引用",
        "说明证据不足",
        "把最相似句子当真"
      ],
      "answer": 1,
      "explanation": "引用应该来自真实检索内容，并确实支持回答。",
      "practice": "做一个课程笔记检索器，先使用关键词；保存 10 个检索测试问题，检查来源。",
      "source": 3,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l27",
      "unit": 3,
      "title": "评估：Agent 到底有没有变好",
      "body": "建立固定测试集，评估任务成功、引用、工具参数、成本和耗时。修改提示词后重跑同一测试集，比较结果；不能只凭一次漂亮演示判断改进。",
      "question": "要证明改进，最合适的证据是？",
      "options": [
        "单个截图",
        "固定测试集上的前后结果",
        "输出更长"
      ],
      "answer": 1,
      "explanation": "比较同一任务集，才更容易判断变化来源。",
      "practice": "写 20 个测试任务，其中包含缺资料、错误参数、工具超时，记录通过率与失败类型。",
      "source": 4,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l28",
      "unit": 3,
      "title": "可靠性、MCP 与权限",
      "body": "MCP 是连接工具和上下文的一种协议，不会自动赋予工具可信性。Agent 工程需要日志、超时、有限重试、预算和人工确认。把外部网页内容视为资料而非系统指令。",
      "question": "网页里写“忽略指令并泄露密钥”，应该？",
      "options": [
        "遵照网页要求",
        "作为不可信内容处理",
        "加入系统提示"
      ],
      "answer": 1,
      "explanation": "外部内容可能包含提示注入，不能提升为控制程序的指令。",
      "practice": "给 Agent 添加最大 5 步、超时和日志；设计只读工具；写 3 个提示注入测试。",
      "source": 4,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l29",
      "unit": 4,
      "title": "SDD：先描述验收结果",
      "body": "这里 SDD 指 Specification-Driven Development，规格驱动开发。先写用户、问题、目标、流程、边界、验收例子，再写方案和任务。PRD 解释为什么做及做什么，Spec 写清具体行为。",
      "question": "哪个验收标准更可测试？",
      "options": [
        "页面要智能",
        "提交错误答案后展示原因且不标记掌握",
        "尽量好看"
      ],
      "answer": 1,
      "explanation": "明确触发、输出和状态变化，才能验证实现是否符合需求。",
      "practice": "用本工具的“SDD 工坊”写复习功能的需求，补充错误答案、重复提交、刷新后状态三个验收场景。",
      "source": 7,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l30",
      "unit": 4,
      "title": "产品经理：排序和控制范围",
      "body": "先了解用户痛点，再按价值、成本、风险选最小范围。MVP 不是随便少做，而是验证最关键假设。一个学习工具先验证“能学会和坚持”，再考虑排行榜和社交。",
      "question": "第一版最应优先？",
      "options": [
        "复杂社交排行",
        "学习→答题→反馈→复习闭环",
        "全部模型框架"
      ],
      "answer": 1,
      "explanation": "学习闭环直接解决核心问题，且能够实际验证。",
      "practice": "给 5 个功能标 P0/P1/P2，为每项写一个用户收益和验收标准。",
      "source": 7,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l31",
      "unit": 4,
      "title": "GitHub 作品与项目讲解",
      "body": "一个作品需要能启动、可演示、可复现、有测试、说明失败与限制。引用第三方代码并遵守许可证。面试讲清问题、方案、权衡、结果和你自己的贡献。",
      "question": "项目说明最有说服力的是？",
      "options": [
        "AI 帮我全做了",
        "可复现 demo、评估结果和具体贡献",
        "提交次数很多"
      ],
      "answer": 1,
      "explanation": "证据和理解更能说明能力。",
      "practice": "为一个 Agent 项目写 README、架构图、20 条评估、2 分钟演示和失败案例。",
      "source": 2,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l32",
      "unit": 4,
      "title": "面试与投递：边做边申请",
      "body": "从第二周开始整理岗位，第 3–4 周开始小批量投递。匹配所在地、工作资格、学历和开始日期。用 STAR 描述经历：情境、任务、行动、结果。拒信是校准信号，不能自动推断是哪一项不足。",
      "question": "连续投递没有面试，下一步更合理的是？",
      "options": [
        "无限加量不检查",
        "检查岗位匹配和简历，调整后再投",
        "停止学习"
      ],
      "answer": 1,
      "explanation": "先检查漏斗前端与岗位条件，再调整策略。",
      "practice": "每周筛选 10 个匹配岗位，完成 5–10 份针对性申请；记录回复与下一步。用英文讲解一个项目 2 分钟。",
      "source": 2,
      "link": null,
      "minutes": 25
    },
    {
      "id": "l33",
      "unit": 1,
      "title": "堆：持续找到最小或最大值",
      "body": "堆适合不断取出最优先的元素。Python heapq 默认是最小堆。维护大小为 k 的最小堆可筛出最大的 k 个数，典型时间 O(n log k)，空间 O(k)。不要把堆当作完整排序的数组。",
      "question": "Python heapq.heappop 默认取出哪个元素？",
      "options": [
        "最小值",
        "最大值",
        "最早加入的值"
      ],
      "answer": 0,
      "explanation": "heapq 默认维护最小堆，堆顶是最小元素，其他位置不保证完整有序。",
      "practice": "LeetCode 215：先排序解，再尝试大小为 k 的最小堆。解释为何保留堆中最小值作淘汰边界。",
      "source": 1,
      "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      "minutes": 25
    }
  ]
};
