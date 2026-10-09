window.QINGYUN_PLAN = {
  "papers": [
    {
      "title": "Building Effective Agents",
      "url": "https://www.anthropic.com/engineering/building-effective-agents",
      "year": "2024",
      "kind": "工程文章",
      "stage": "现在可读",
      "idea": "先理解固定工作流与由模型选择下一步的 Agent。把检索、工具、记忆看作可组合的小部件。",
      "limit": "这是一篇工程经验文章，不是同行评审论文；具体工具已更新，先学设计思想。",
      "practice": "画出学习助手的输入、工具、反馈、停止条件，标出哪些步骤不需要模型。",
      "question": "固定流程已经能完成任务时，应该先？",
      "options": [
        "添加五个 Agent",
        "先验证简单实现",
        "无条件换框架"
      ],
      "answer": 1,
      "explanation": "先验证简单方案，再用评估决定是否增加复杂度。"
    },
    {
      "title": "ReAct",
      "url": "https://arxiv.org/abs/2210.03629",
      "year": "2022 / ICLR 2023",
      "kind": "论文",
      "stage": "入门",
      "idea": "把推理、行动和环境反馈交替起来。例如提出查询、调用搜索、根据结果决定下一步。",
      "limit": "工具可能返回错误；结果来自特定实验任务，不能直接预测你项目的成功率。",
      "practice": "用纸模拟一个查询伦敦交通资料的 Agent：行动、返回结果、下一步，每次明确来源。",
      "question": "ReAct 中外部观察主要来自？",
      "options": [
        "工具或环境反馈",
        "模型的自信程度",
        "输出字数"
      ],
      "answer": 0,
      "explanation": "观察来自与环境交互的结果；它也需要检查真实性。"
    },
    {
      "title": "Retrieval-Augmented Generation",
      "url": "https://arxiv.org/abs/2005.11401",
      "year": "2020",
      "kind": "基础论文",
      "stage": "入门",
      "idea": "把信息检索与文本生成结合。先找到有关文档，再基于这些资料回答。",
      "limit": "不是所有相似文档都支持答案；原论文系统与现代应用实现存在差别。",
      "practice": "选三个城市数据文档，手动找支持一个答案的段落，记录来源和日期。",
      "question": "检索到一段相似内容后，能否自动认定答案正确？",
      "options": [
        "能",
        "仍需检查它是否支持答案",
        "看排版是否专业"
      ],
      "answer": 1,
      "explanation": "相似只是线索，需要验证证据与结论的关系。"
    },
    {
      "title": "Toolformer",
      "url": "https://arxiv.org/abs/2302.04761",
      "year": "2023",
      "kind": "论文",
      "stage": "了解思想即可",
      "idea": "研究如何让模型学习何时调用 API、传什么参数，以及如何利用返回结果。",
      "limit": "它包含训练方法；应用开发者无需从头训练 Toolformer 才能使用工具调用。",
      "practice": "给计算器工具定义输入输出；用 Python 手写调用；用三组测试确认行为。",
      "question": "Toolformer 与仅写一个工具提示词的区别之一是？",
      "options": [
        "论文涉及工具使用的训练",
        "不需要外部工具",
        "只做页面美化"
      ],
      "answer": 0,
      "explanation": "论文研究自监督工具使用训练，不应与普通应用层提示配置混为一谈。"
    },
    {
      "title": "Reflexion",
      "url": "https://arxiv.org/abs/2303.11366",
      "year": "2023",
      "kind": "论文",
      "stage": "完成工具基础后",
      "idea": "从任务反馈形成文字反思，并在后续尝试中使用；这不等于更新模型权重。",
      "limit": "文字反思可能错误，应该通过真实反馈或测试验证，不能无限循环。",
      "practice": "给失败的 API 调用写错误类型、下一步、验证方式；限制最多重试两次。",
      "question": "Reflexion 的文字反思等同于重新训练模型权重吗？",
      "options": [
        "是",
        "不是",
        "取决于文字长短"
      ],
      "answer": 1,
      "explanation": "这种反思主要利用反馈和记忆来指导后续尝试。"
    },
    {
      "title": "AgentBench",
      "url": "https://arxiv.org/abs/2308.03688",
      "year": "2023",
      "kind": "评估论文",
      "stage": "做 Agent 时读",
      "idea": "用多类交互环境评估模型作为 Agent 的能力，提醒我们区别聊天回答与实际任务执行。",
      "limit": "某个基准的好成绩不代表所有环境都可靠；你的应用也需要自己的测试集。",
      "practice": "给城市问答助手定义成功、错误引用、工具失败三个标签，设计十条案例。",
      "question": "Agent 评估应该主要关注？",
      "options": [
        "回答看起来像专家",
        "任务结果和交互过程",
        "名字是否很酷"
      ],
      "answer": 1,
      "explanation": "需要检查实际任务完成与过程，而不是只评文风。"
    },
    {
      "title": "SWE-bench",
      "url": "https://arxiv.org/abs/2310.06770",
      "year": "2023",
      "kind": "评估论文",
      "stage": "能读小项目后",
      "idea": "把真实 GitHub issue 和代码仓库组合成软件修复任务，用验证检查改动。",
      "limit": "不同版本、任务子集和执行环境会影响结果；本地通过一个测试也不代表所有需求正确。",
      "practice": "在自己的 CLI 建一个 bug issue，写复现和回归测试，再提交修复。",
      "question": "评估代码修复时，应优先看？",
      "options": [
        "解释很长",
        "代码修改与测试结果",
        "生成速度"
      ],
      "answer": 1,
      "explanation": "解释帮助理解，但修改是否解决问题需要执行验证。"
    },
    {
      "title": "Agentic Context Engineering · ACE",
      "url": "https://arxiv.org/abs/2510.04618",
      "year": "2025 / 2026 修订",
      "kind": "进阶论文",
      "stage": "后期选读",
      "idea": "把上下文视为可逐步积累、反思和整理的策略库，而不是每次整篇重写。",
      "limit": "策略积累可能引入过时或错误内容；要追踪来源、冲突和测试结果。",
      "practice": "为学习助手维护十条策略，每条带失败例子与适用条件；用固定案例比较修改前后。",
      "question": "持续维护策略库时最应该保留？",
      "options": [
        "来源、适用条件和验证结果",
        "越短越好",
        "所有旧内容永不删除"
      ],
      "answer": 0,
      "explanation": "策略需要可追溯、可适用、可验证，不能盲目堆积。"
    },
    {
      "title": "Meta Context Engineering · MCE",
      "url": "https://arxiv.org/abs/2601.21557",
      "year": "2026",
      "kind": "前沿预印本",
      "stage": "后期选读",
      "idea": "研究让生成和改进上下文的方法本身也随反馈演进。先区分任务层的上下文与改进它的方法。",
      "limit": "方法与收益依赖实验设置；先读摘要和方法图，不要求现在复现完整实验。",
      "practice": "手工比较两种整理笔记的方法，保持问题集一致，记录哪种方法更便于检索。",
      "question": "要比较两种上下文整理方法，应该？",
      "options": [
        "只挑一次漂亮结果",
        "使用相同问题集并记录代价",
        "只看长度"
      ],
      "answer": 1,
      "explanation": "同一任务集和明确评价能帮助区分方法变化与样本变化。"
    }
  ],
  "resources": [
    {
      "type": "video",
      "title": "CS50 · David Malan：Functions, Variables",
      "url": "https://www.youtube.com/watch?v=JP7ITIXGpHk",
      "stage": "现在 · 第 1–2 周",
      "why": "主课起点；函数、变量与输入输出。不要一次看完整段。",
      "task": "今天先看前 20 分钟，关闭视频，写 hello.py 和分钟计算器。"
    },
    {
      "type": "video",
      "title": "NeetCode：Two Sum · HashMap · Python",
      "url": "https://www.youtube.com/watch?v=KLlXCFG5TnA",
      "stage": "会列表与字典后 · 第 3–4 周",
      "why": "用一题学习从暴力解到哈希表；适合算法思路训练。",
      "task": "先独立尝试 20 分钟；看讲解后关闭视频重写，隔天重做。"
    },
    {
      "type": "video",
      "title": "Harvard · Joe Blitzstein：Stat 110",
      "url": "https://stat110.hsites.harvard.edu/youtube",
      "stage": "每周两次 · 挑选章节",
      "why": "第 1 讲计数，第 4 讲条件概率与贝叶斯，第 9 讲期望。",
      "task": "每次看 15–20 分钟，手算一道题，再写一个 Python 模拟。"
    },
    {
      "type": "video",
      "title": "3Blue1Brown · Grant Sanderson：神经网络",
      "url": "https://www.3blue1brown.com/topics/neural-networks",
      "stage": "第 4 周起 · 直觉选修",
      "why": "通过官方页面进入视频，先理解神经网络与梯度的图像直觉。",
      "task": "画一个两层网络，解释输入、权重、输出；不要求现在实现训练。"
    },
    {
      "type": "video",
      "title": "Andrej Karpathy：Building micrograd",
      "url": "https://www.youtube.com/watch?v=VMj-3S1tku0",
      "stage": "第 8 周后 · 进阶选修",
      "why": "从代码理解自动求导与神经网络；Python 零基础阶段先暂存。",
      "task": "等函数、类和导数熟悉后，每次复现一小段并添加断言。"
    },
    {
      "type": "repo",
      "title": "Microsoft · ai-agents-for-beginners",
      "url": "https://github.com/microsoft/ai-agents-for-beginners",
      "stage": "第 5 周起 · Agent 主线",
      "why": "结构化入门课程，先读概念、工具使用与设计模式。",
      "task": "只挑一个示例，写清入口、工具、状态、停止条件；理解后改成城市资料助手。"
    },
    {
      "type": "repo",
      "title": "Shubham Saboo · awesome-llm-apps",
      "url": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "stage": "第 6 周起 · 找项目灵感",
      "why": "Agent 和 RAG 应用合集。示例展示想法，不自动代表可生产使用。",
      "task": "挑一个最小应用，核对依赖、费用和许可证，补测试并记录你自己的改动。"
    },
    {
      "type": "repo",
      "title": "LangChain 团队 · LangGraph",
      "url": "https://github.com/langchain-ai/langgraph",
      "stage": "第 8 周起 · 工程进阶",
      "why": "适合学习显式状态、流程和恢复；先用普通 Python 理解同一流程。",
      "task": "比较普通 Python 循环与图流程各自的价值；加入失败恢复和运行日志。"
    },
    {
      "type": "repo",
      "title": "Anthropic · courses",
      "url": "https://github.com/anthropics/courses",
      "stage": "第 5 周起 · 选一段课程",
      "why": "学习提示、工具使用和评估思路；具体 API 按官方当前文档使用。",
      "task": "选一份 notebook，先读再跑；把硬编码输入改成测试数据，不上传密钥。"
    },
    {
      "type": "repo",
      "title": "Andrej Karpathy · nn-zero-to-hero",
      "url": "https://github.com/karpathy/nn-zero-to-hero",
      "stage": "第 8 周后 · 深度学习选修",
      "why": "配合视频复现；这是长期底层能力训练，不是 1 月求职的必修阻塞项。",
      "task": "先做 micrograd 的一个小实验，写下前向计算和梯度检查。"
    },
    {
      "type": "repo",
      "title": "Sebastian Raschka · LLMs-from-scratch",
      "url": "https://github.com/rasbt/LLMs-from-scratch",
      "stage": "拿到工程基础后 · 长期路线",
      "why": "逐步实现 LLM，适合 Python、PyTorch 和数学基础建立之后。",
      "task": "先理解 tokenization 与数据加载，不急着训练完整大模型。"
    },
    {
      "type": "repo",
      "title": "NeetCode · leetcode",
      "url": "https://github.com/neetcode-gh/leetcode",
      "stage": "第 3 周起 · 题解对照",
      "why": "按题型对照实现；自己的解法、复杂度与测试应先写。",
      "task": "只在独立尝试后对照；24 小时后脱离题解重做，并解释边界。"
    },
    {
      "type": "video",
      "category": "vibe",
      "title": "Google for Developers · Vibe Coding in AI Studio",
      "url": "https://www.youtube.com/watch?v=DePOMEBfvWQ",
      "stage": "② 入门后 · AI Studio 原型",
      "why": "Google 官方入门视频：自然语言构建 AI 应用。先使用已核对的官方视频入口；暂未核实 8 集播放列表地址和集数。",
      "task": "看 10–15 分钟，为活动运营 Agent 写用户、输入输出与 3 条验收标准；生成活动表单原型，再修改一个字段并验证。"
    },
    {
      "type": "video",
      "category": "vibe",
      "title": "DeepLearning.AI · Vibe Coding 101 with Replit",
      "url": "https://www.deeplearning.ai/courses/vibe-coding-101-with-replit",
      "stage": "① 现在可开始 · 自然语言提需求",
      "why": "DeepLearning.AI 与 Replit 合作，讲师 Michele Catasta 与 Matt Palmer。官方注明限时免费；课程和 Replit 实操费用以当前页面为准。",
      "task": "每次学 15–20 分钟，为活动运营 Agent 写一页需求：用户、输入输出、范围和验收；先构建活动信息页。"
    },
    {
      "type": "video",
      "category": "vibe",
      "title": "Anthropic 官方 · Claude Code",
      "url": "https://www.youtube.com/@anthropic-ai/search?query=Claude%20Code",
      "stage": "③ 会函数、Git 和测试后 · Agent 编程协作",
      "why": "在 Anthropic 官方频道查找 Claude Code 教程。先看介绍，再学读取项目、制定计划、改代码和验证。",
      "task": "给预算工具增加人数必须为正数的校验。先写验收案例，让编码 Agent 提计划，再看改动、运行测试并解释 3 行代码。"
    }
  ],
  "checked": "2026-10-08",
  "salaryUrl": "https://www.adlib-recruitment.co.uk/wp-content/uploads/2026/05/Agency-Salary-Guide_London_SE-2026.pdf",
  "problems": [
    {
      "id": "pyhello",
      "title": "Python 练习 · 我的 hello.py",
      "url": "",
      "week": 1,
      "topic": "变量 / print / 脚本",
      "method": "",
      "mode": "script",
      "starter": "# 用三行 print 输出自己的信息\n# 每行格式：姓名：内容 / 目标岗位：内容 / 本周学习目标：内容\n",
      "body": "写一个 hello.py 脚本，用 print 分三行输出：姓名：你的名字；目标岗位：你的目标；本周学习目标：你的具体目标。这里直接运行，不需要安装 Python。检查标签和非空内容，不判断个人目标是否合适。",
      "tests": [
        {
          "args": [],
          "expected": "姓名：后有非空内容",
          "label": "姓名"
        },
        {
          "args": [],
          "expected": "目标岗位：后有非空内容",
          "label": "目标岗位"
        },
        {
          "args": [],
          "expected": "本周学习目标：后有非空内容",
          "label": "本周学习目标"
        }
      ],
      "hint": "print(\"姓名：你的名字\") 会输出一行；另外两行也用 print，填写自己的内容。",
      "level": "基础",
      "reference": "print(\"姓名：小青\")\nprint(\"目标岗位：AI 实施顾问\")\nprint(\"本周学习目标：掌握变量和 print\")",
      "referenceExplanation": "print 每次输出一行。把示例内容换成自己的信息，保留三个标签。"
    },
    {
      "id": "py1",
      "title": "Python 练习 · 分钟计算器",
      "url": "",
      "week": 1,
      "topic": "函数 / 返回值",
      "method": "totalMinutes",
      "starter": "class Solution:\n    def totalMinutes(self, hours, minutes):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "把非负小时与分钟转换为总分钟。例：2 小时 15 分钟 → 135。",
      "tests": [
        {
          "args": [
            2,
            15
          ],
          "expected": 135,
          "normalize": "exact"
        },
        {
          "args": [
            0,
            0
          ],
          "expected": 0,
          "normalize": "exact"
        },
        {
          "args": [
            3,
            0
          ],
          "expected": 180,
          "normalize": "exact"
        }
      ],
      "hint": "总分钟由小时部分乘 60，再加分钟。",
      "level": "基础",
      "reference": "class Solution:\n    def totalMinutes(self, hours, minutes):\n        return hours * 60 + minutes\n",
      "referenceExplanation": "小时乘 60，再加分钟。时间和额外空间均为 O(1)。"
    },
    {
      "id": "py2",
      "title": "Python 练习 · 累计学习时间",
      "url": "",
      "week": 1,
      "topic": "列表 / 循环",
      "method": "totalStudy",
      "starter": "class Solution:\n    def totalStudy(self, minutes):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "输入非负整数列表，返回总和；空列表返回 0。",
      "tests": [
        {
          "args": [
            [
              20,
              30,
              40
            ]
          ],
          "expected": 90,
          "normalize": "exact"
        },
        {
          "args": [
            []
          ],
          "expected": 0,
          "normalize": "exact"
        },
        {
          "args": [
            [
              180
            ]
          ],
          "expected": 180,
          "normalize": "exact"
        }
      ],
      "hint": "先用循环累加，再比较内置 sum。",
      "level": "基础",
      "reference": "class Solution:\n    def totalStudy(self, minutes):\n        total = 0\n        for value in minutes:\n            total += value\n        return total\n",
      "referenceExplanation": "从 0 开始累加，空列表也得到 0。时间 O(n)，额外空间 O(1)。"
    },
    {
      "id": "py3",
      "title": "Python 练习 · 达标天数",
      "url": "",
      "week": 2,
      "topic": "条件 / 循环",
      "method": "countDays",
      "starter": "class Solution:\n    def countDays(self, minutes, target):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回列表中学习分钟大于等于 target 的天数。",
      "tests": [
        {
          "args": [
            [
              60,
              180,
              240
            ],
            180
          ],
          "expected": 2,
          "normalize": "exact"
        },
        {
          "args": [
            [],
            180
          ],
          "expected": 0,
          "normalize": "exact"
        },
        {
          "args": [
            [
              179,
              180
            ],
            180
          ],
          "expected": 1,
          "normalize": "exact"
        }
      ],
      "hint": "对每个值判断 >=，符合则加一。",
      "level": "基础",
      "reference": "class Solution:\n    def countDays(self, minutes, target):\n        return sum(value >= target for value in minutes)\n",
      "referenceExplanation": "逐个判断是否达到目标，True 按 1 计数。时间 O(n)，额外空间 O(1)。"
    },
    {
      "id": "py4",
      "title": "Python 练习 · 科目统计",
      "url": "",
      "week": 2,
      "topic": "字典",
      "method": "countTopics",
      "starter": "class Solution:\n    def countTopics(self, topics):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "统计科目名称出现次数，返回字典。",
      "tests": [
        {
          "args": [
            [
              "python",
              "sql",
              "python"
            ]
          ],
          "expected": {
            "python": 2,
            "sql": 1
          },
          "normalize": "exact"
        },
        {
          "args": [
            []
          ],
          "expected": {},
          "normalize": "exact"
        }
      ],
      "hint": "使用字典 get(topic, 0) 获取已有计数。",
      "level": "基础",
      "reference": "class Solution:\n    def countTopics(self, topics):\n        counts = {}\n        for topic in topics:\n            counts[topic] = counts.get(topic, 0) + 1\n        return counts\n",
      "referenceExplanation": "字典保存每个科目的次数。时间 O(n)，空间 O(k)，k 是不同科目数。"
    },
    {
      "id": "lc1480",
      "title": "1480 · Running Sum of 1d Array",
      "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
      "week": 3,
      "topic": "数组 / 累加",
      "method": "runningSum",
      "starter": "class Solution:\n    def runningSum(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回每个位置以前所有数的累加结果。输入 [1,2,3] 得到 [1,3,6]。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              3
            ]
          ],
          "expected": [
            1,
            3,
            6
          ],
          "normalize": "exact"
        },
        {
          "args": [
            [
              1,
              1,
              1
            ]
          ],
          "expected": [
            1,
            2,
            3
          ],
          "normalize": "exact"
        },
        {
          "args": [
            [
              5
            ]
          ],
          "expected": [
            5
          ],
          "normalize": "exact"
        }
      ],
      "hint": "维护一个累加值和一个输出列表。",
      "level": "Easy",
      "reference": "class Solution:\n    def runningSum(self, nums):\n        result = []\n        total = 0\n        for value in nums:\n            total += value\n            result.append(total)\n        return result\n",
      "referenceExplanation": "维护前缀和。时间 O(n)，结果空间 O(n)。"
    },
    {
      "id": "lc1672",
      "title": "1672 · Richest Customer Wealth",
      "url": "https://leetcode.com/problems/richest-customer-wealth/",
      "week": 3,
      "topic": "嵌套列表",
      "method": "maximumWealth",
      "starter": "class Solution:\n    def maximumWealth(self, accounts):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "每行是一个人的账户余额；返回最高行总和。输入至少有一行。",
      "tests": [
        {
          "args": [
            [
              [
                1,
                2,
                3
              ],
              [
                3,
                2,
                1
              ]
            ]
          ],
          "expected": 6,
          "normalize": "exact"
        },
        {
          "args": [
            [
              [
                1,
                5
              ],
              [
                7,
                3
              ],
              [
                3,
                5
              ]
            ]
          ],
          "expected": 10,
          "normalize": "exact"
        }
      ],
      "hint": "先统计每行，再找最大值。",
      "level": "Easy",
      "reference": "class Solution:\n    def maximumWealth(self, accounts):\n        return max(sum(row) for row in accounts)\n",
      "referenceExplanation": "每行求和后取最大值。时间 O(mn)。"
    },
    {
      "id": "lc217",
      "title": "217 · Contains Duplicate",
      "url": "https://leetcode.com/problems/contains-duplicate/",
      "week": 3,
      "topic": "集合",
      "method": "containsDuplicate",
      "starter": "class Solution:\n    def containsDuplicate(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "判断整数列表中是否存在重复值，返回布尔值。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              3,
              1
            ]
          ],
          "expected": true,
          "normalize": "exact"
        },
        {
          "args": [
            [
              1,
              2,
              3
            ]
          ],
          "expected": false,
          "normalize": "exact"
        },
        {
          "args": [
            []
          ],
          "expected": false,
          "normalize": "exact"
        }
      ],
      "hint": "集合可记录已经见过的元素。",
      "level": "Easy",
      "reference": "class Solution:\n    def containsDuplicate(self, nums):\n        return len(set(nums)) < len(nums)\n",
      "referenceExplanation": "集合去重后比较长度。平均时间 O(n)，空间 O(n)。"
    },
    {
      "id": "lc242",
      "title": "242 · Valid Anagram",
      "url": "https://leetcode.com/problems/valid-anagram/",
      "week": 4,
      "topic": "字符计数",
      "method": "isAnagram",
      "starter": "class Solution:\n    def isAnagram(self, s, t):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "两个仅含小写英文字母的字符串，判断字符数量是否完全相同。",
      "tests": [
        {
          "args": [
            "anagram",
            "nagaram"
          ],
          "expected": true,
          "normalize": "exact"
        },
        {
          "args": [
            "rat",
            "car"
          ],
          "expected": false,
          "normalize": "exact"
        },
        {
          "args": [
            "a",
            "aa"
          ],
          "expected": false,
          "normalize": "exact"
        }
      ],
      "hint": "先比较长度，再比较每个字符的计数。",
      "level": "Easy",
      "reference": "class Solution:\n    def isAnagram(self, s, t):\n        from collections import Counter\n        return Counter(s) == Counter(t)\n",
      "referenceExplanation": "比较字符计数。时间 O(n+m)，空间取决于字符种类。"
    },
    {
      "id": "lc1",
      "title": "1 · Two Sum",
      "url": "https://leetcode.com/problems/two-sum/",
      "week": 4,
      "topic": "哈希表",
      "method": "twoSum",
      "starter": "class Solution:\n    def twoSum(self, nums, target):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "输入整数数组和目标和，返回两个不同元素的下标。每个测试恰有一组答案，下标顺序不限。",
      "tests": [
        {
          "args": [
            [
              2,
              7,
              11,
              15
            ],
            9
          ],
          "expected": [
            0,
            1
          ],
          "normalize": "sort"
        },
        {
          "args": [
            [
              3,
              2,
              4
            ],
            6
          ],
          "expected": [
            1,
            2
          ],
          "normalize": "sort"
        },
        {
          "args": [
            [
              3,
              3
            ],
            6
          ],
          "expected": [
            0,
            1
          ],
          "normalize": "sort"
        }
      ],
      "hint": "寻找 target - x；先查询再记录下标。",
      "level": "Easy",
      "reference": "class Solution:\n    def twoSum(self, nums, target):\n        seen = {}\n        for i, value in enumerate(nums):\n            other = target - value\n            if other in seen:\n                return [seen[other], i]\n            seen[value] = i\n",
      "referenceExplanation": "先查再存，避免重复使用同一位置。平均时间 O(n)，空间 O(n)。"
    },
    {
      "id": "lc125",
      "title": "125 · Valid Palindrome",
      "url": "https://leetcode.com/problems/valid-palindrome/",
      "week": 4,
      "topic": "双指针 / 字符串",
      "method": "isPalindrome",
      "starter": "class Solution:\n    def isPalindrome(self, s):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "忽略 ASCII 字母大小写和非字母数字字符，判断字符串是否回文。",
      "tests": [
        {
          "args": [
            "A man, a plan, a canal: Panama"
          ],
          "expected": true,
          "normalize": "exact"
        },
        {
          "args": [
            "race a car"
          ],
          "expected": false,
          "normalize": "exact"
        },
        {
          "args": [
            " "
          ],
          "expected": true,
          "normalize": "exact"
        }
      ],
      "hint": "先规范化字符串，再比较两端字符。",
      "level": "Easy",
      "reference": "class Solution:\n    def isPalindrome(self, s):\n        chars = [c.lower() for c in s if c.isalnum()]\n        return chars == chars[::-1]\n",
      "referenceExplanation": "只保留字母和数字并统一小写。时间 O(n)，空间 O(n)。可进一步用双指针减少空间。"
    },
    {
      "id": "lc20",
      "title": "20 · Valid Parentheses",
      "url": "https://leetcode.com/problems/valid-parentheses/",
      "week": 5,
      "topic": "栈",
      "method": "isValid",
      "starter": "class Solution:\n    def isValid(self, s):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "输入只含 ()[]{} 的字符串，判断括号嵌套和顺序是否匹配。",
      "tests": [
        {
          "args": [
            "()[]{}"
          ],
          "expected": true,
          "normalize": "exact"
        },
        {
          "args": [
            "([)]"
          ],
          "expected": false,
          "normalize": "exact"
        },
        {
          "args": [
            "]"
          ],
          "expected": false,
          "normalize": "exact"
        }
      ],
      "hint": "右括号必须与栈顶左括号匹配，最后栈必须为空。",
      "level": "Easy",
      "reference": "class Solution:\n    def isValid(self, s):\n        stack = []\n        pairs = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n        for c in s:\n            if c in pairs:\n                if not stack or stack.pop() != pairs[c]:\n                    return False\n            else:\n                stack.append(c)\n        return not stack\n",
      "referenceExplanation": "右括号必须匹配最近的左括号；最后栈必须为空。时间 O(n)，空间 O(n)。"
    },
    {
      "id": "lc704",
      "title": "704 · Binary Search",
      "url": "https://leetcode.com/problems/binary-search/",
      "week": 5,
      "topic": "二分",
      "method": "search",
      "starter": "class Solution:\n    def search(self, nums, target):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "在升序、无重复整数数组中返回 target 下标；找不到返回 -1。",
      "tests": [
        {
          "args": [
            [
              -1,
              0,
              3,
              5,
              9,
              12
            ],
            9
          ],
          "expected": 4,
          "normalize": "exact"
        },
        {
          "args": [
            [
              -1,
              0,
              3,
              5,
              9,
              12
            ],
            2
          ],
          "expected": -1,
          "normalize": "exact"
        },
        {
          "args": [
            [
              5
            ],
            5
          ],
          "expected": 0,
          "normalize": "exact"
        }
      ],
      "hint": "选闭区间并保持循环边界一致。",
      "level": "Easy",
      "reference": "class Solution:\n    def search(self, nums, target):\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            if nums[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return -1\n",
      "referenceExplanation": "维护闭区间，每次排除一半。时间 O(log n)，空间 O(1)。"
    },
    {
      "id": "lc121",
      "title": "121 · Best Time to Buy and Sell Stock",
      "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      "week": 5,
      "topic": "一次扫描",
      "method": "maxProfit",
      "starter": "class Solution:\n    def maxProfit(self, prices):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "最多买入卖出各一次，卖出须晚于买入；返回最大非负利润。",
      "tests": [
        {
          "args": [
            [
              7,
              1,
              5,
              3,
              6,
              4
            ]
          ],
          "expected": 5,
          "normalize": "exact"
        },
        {
          "args": [
            [
              7,
              6,
              4,
              3,
              1
            ]
          ],
          "expected": 0,
          "normalize": "exact"
        },
        {
          "args": [
            [
              2
            ]
          ],
          "expected": 0,
          "normalize": "exact"
        }
      ],
      "hint": "扫描时维护历史最低价和最佳利润。",
      "level": "Easy",
      "reference": "class Solution:\n    def maxProfit(self, prices):\n        lowest = float(\"inf\")\n        best = 0\n        for price in prices:\n            lowest = min(lowest, price)\n            best = max(best, price - lowest)\n        return best\n",
      "referenceExplanation": "记录此前最低买入价。时间 O(n)，空间 O(1)。"
    },
    {
      "id": "lc283",
      "title": "283 · Move Zeroes",
      "url": "https://leetcode.com/problems/move-zeroes/",
      "week": 6,
      "topic": "双指针",
      "method": "moveZeroes",
      "starter": "class Solution:\n    def moveZeroes(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "原地把所有 0 移到末尾，保持其他元素相对顺序；函数不返回数组。",
      "tests": [
        {
          "args": [
            [
              0,
              1,
              0,
              3,
              12
            ]
          ],
          "expected": [
            1,
            3,
            12,
            0,
            0
          ],
          "normalize": "exact",
          "mutates": true
        },
        {
          "args": [
            [
              0
            ]
          ],
          "expected": [
            0
          ],
          "normalize": "exact",
          "mutates": true
        }
      ],
      "hint": "先把非零值写到前面，再填充剩余 0。",
      "level": "Easy",
      "reference": "class Solution:\n    def moveZeroes(self, nums):\n        write = 0\n        for read in range(len(nums)):\n            if nums[read] != 0:\n                nums[write], nums[read] = nums[read], nums[write]\n                write += 1\n",
      "referenceExplanation": "原地把非零元素依次放到前面。时间 O(n)，额外空间 O(1)，不返回新列表。"
    },
    {
      "id": "lc219",
      "title": "219 · Contains Duplicate II",
      "url": "https://leetcode.com/problems/contains-duplicate-ii/",
      "week": 6,
      "topic": "哈希表 / 距离",
      "method": "containsNearbyDuplicate",
      "starter": "class Solution:\n    def containsNearbyDuplicate(self, nums, k):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "判断是否有相同元素，它们的不同下标之差至多 k。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              3,
              1
            ],
            3
          ],
          "expected": true,
          "normalize": "exact"
        },
        {
          "args": [
            [
              1,
              2,
              3,
              1,
              2,
              3
            ],
            2
          ],
          "expected": false,
          "normalize": "exact"
        }
      ],
      "hint": "记录每个值最近出现的位置。",
      "level": "Easy",
      "reference": "class Solution:\n    def containsNearbyDuplicate(self, nums, k):\n        last = {}\n        for i, value in enumerate(nums):\n            if value in last and i - last[value] <= k:\n                return True\n            last[value] = i\n        return False\n",
      "referenceExplanation": "保存最近出现位置。平均时间 O(n)，空间 O(n)。"
    },
    {
      "id": "lc3",
      "title": "3 · Longest Substring Without Repeating Characters",
      "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "week": 6,
      "topic": "滑动窗口",
      "method": "lengthOfLongestSubstring",
      "starter": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回没有重复字符的最长连续子串长度。",
      "tests": [
        {
          "args": [
            "abcabcbb"
          ],
          "expected": 3,
          "normalize": "exact"
        },
        {
          "args": [
            "bbbbb"
          ],
          "expected": 1,
          "normalize": "exact"
        },
        {
          "args": [
            "abba"
          ],
          "expected": 2,
          "normalize": "exact"
        },
        {
          "args": [
            ""
          ],
          "expected": 0,
          "normalize": "exact"
        }
      ],
      "hint": "窗口遇到重复时，收缩左边直到恢复约束。",
      "level": "Medium",
      "reference": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        last = {}\n        left = best = 0\n        for right, c in enumerate(s):\n            left = max(left, last.get(c, -1) + 1)\n            last[c] = right\n            best = max(best, right - left + 1)\n        return best\n",
      "referenceExplanation": "遇到重复字符时移动窗口左边界，不能向后退。时间 O(n)，空间 O(k)。"
    },
    {
      "id": "lc49",
      "title": "49 · Group Anagrams",
      "url": "https://leetcode.com/problems/group-anagrams/",
      "week": 7,
      "topic": "哈希分组",
      "method": "groupAnagrams",
      "starter": "class Solution:\n    def groupAnagrams(self, strs):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "把字符计数相同的字符串分组，分组与组内顺序不限。",
      "tests": [],
      "hint": "可使用排序后的字符串作为键。",
      "level": "Medium",
      "reference": "class Solution:\n    def groupAnagrams(self, strs):\n        groups = {}\n        for word in strs:\n            key = tuple(sorted(word))\n            groups.setdefault(key, []).append(word)\n        return list(groups.values())\n",
      "referenceExplanation": "排序后的字符序列作为分组键。n 个长度至多 k 的词：时间 O(nk log k)。"
    },
    {
      "id": "lc238",
      "title": "238 · Product of Array Except Self",
      "url": "https://leetcode.com/problems/product-of-array-except-self/",
      "week": 7,
      "topic": "前缀 / 后缀",
      "method": "productExceptSelf",
      "starter": "class Solution:\n    def productExceptSelf(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回每个位置除它自身外所有元素的乘积，不使用除法。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              3,
              4
            ]
          ],
          "expected": [
            24,
            12,
            8,
            6
          ],
          "normalize": "exact"
        },
        {
          "args": [
            [
              -1,
              1,
              0,
              -3,
              3
            ]
          ],
          "expected": [
            0,
            0,
            9,
            0,
            0
          ],
          "normalize": "exact"
        }
      ],
      "hint": "组合前缀乘积与后缀乘积。",
      "level": "Medium",
      "reference": "class Solution:\n    def productExceptSelf(self, nums):\n        result = [1] * len(nums)\n        prefix = 1\n        for i in range(len(nums)):\n            result[i] = prefix\n            prefix *= nums[i]\n        suffix = 1\n        for i in range(len(nums) - 1, -1, -1):\n            result[i] *= suffix\n            suffix *= nums[i]\n        return result\n",
      "referenceExplanation": "左侧乘积乘右侧乘积，不用除法，支持零。时间 O(n)，除结果外空间 O(1)。"
    },
    {
      "id": "lc198",
      "title": "198 · House Robber",
      "url": "https://leetcode.com/problems/house-robber/",
      "week": 8,
      "topic": "动态规划",
      "method": "rob",
      "starter": "class Solution:\n    def rob(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "选择不相邻的非负数组元素，使总和最大。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              3,
              1
            ]
          ],
          "expected": 4,
          "normalize": "exact"
        },
        {
          "args": [
            [
              2,
              7,
              9,
              3,
              1
            ]
          ],
          "expected": 12,
          "normalize": "exact"
        }
      ],
      "hint": "每个位置比较不取当前与取当前的收益。",
      "level": "Medium",
      "reference": "class Solution:\n    def rob(self, nums):\n        prev = current = 0\n        for value in nums:\n            prev, current = current, max(current, prev + value)\n        return current\n",
      "referenceExplanation": "每步选择跳过或取当前房屋，取则不能取上一间。时间 O(n)，空间 O(1)。"
    },
    {
      "id": "lc70",
      "title": "70 · Climbing Stairs",
      "url": "https://leetcode.com/problems/climbing-stairs/",
      "week": 8,
      "topic": "动态规划",
      "method": "climbStairs",
      "starter": "class Solution:\n    def climbStairs(self, n):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "每次走 1 或 2 级，返回走完正整数 n 级的方法数。",
      "tests": [
        {
          "args": [
            1
          ],
          "expected": 1,
          "normalize": "exact"
        },
        {
          "args": [
            2
          ],
          "expected": 2,
          "normalize": "exact"
        },
        {
          "args": [
            3
          ],
          "expected": 3,
          "normalize": "exact"
        },
        {
          "args": [
            5
          ],
          "expected": 8,
          "normalize": "exact"
        }
      ],
      "hint": "最后一步来自 n-1 或 n-2。",
      "level": "Easy",
      "reference": "class Solution:\n    def climbStairs(self, n):\n        a = b = 1\n        for _ in range(n):\n            a, b = b, a + b\n        return a\n",
      "referenceExplanation": "最后一步来自 n-1 或 n-2，滚动保存计数。时间 O(n)，空间 O(1)。"
    },
    {
      "id": "lc206",
      "title": "206 · Reverse Linked List",
      "url": "https://leetcode.com/problems/reverse-linked-list/",
      "week": 9,
      "topic": "链表",
      "method": "reverseList",
      "starter": "class Solution:\n    def reverseList(self, head):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "反转单链表；在 LeetCode 中使用 ListNode 接口。",
      "tests": [],
      "hint": "先保存 next，再改变指向。",
      "level": "Easy",
      "reference": "class Solution:\n    def reverseList(self, head):\n        prev = None\n        while head:\n            next_node = head.next\n            head.next = prev\n            prev, head = head, next_node\n        return prev\n",
      "referenceExplanation": "改指针前保存后继。时间 O(n)，空间 O(1)。ListNode 由 LeetCode 提供。"
    },
    {
      "id": "lc21",
      "title": "21 · Merge Two Sorted Lists",
      "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
      "week": 9,
      "topic": "链表",
      "method": "mergeTwoLists",
      "starter": "class Solution:\n    def mergeTwoLists(self, list1, list2):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "合并两个有序链表；使用 LeetCode 的 ListNode。",
      "tests": [],
      "hint": "使用哑节点和尾指针。",
      "level": "Easy",
      "reference": "class Solution:\n    def mergeTwoLists(self, list1, list2):\n        dummy = tail = ListNode()\n        while list1 and list2:\n            if list1.val <= list2.val:\n                tail.next, list1 = list1, list1.next\n            else:\n                tail.next, list2 = list2, list2.next\n            tail = tail.next\n        tail.next = list1 or list2\n        return dummy.next\n",
      "referenceExplanation": "用虚拟头节点串接较小节点。时间 O(n+m)，额外空间 O(1)。ListNode 由原站提供。"
    },
    {
      "id": "lc141",
      "title": "141 · Linked List Cycle",
      "url": "https://leetcode.com/problems/linked-list-cycle/",
      "week": 9,
      "topic": "快慢指针",
      "method": "hasCycle",
      "starter": "class Solution:\n    def hasCycle(self, head):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "判断链表中是否存在环。",
      "tests": [],
      "hint": "快慢指针若再次相遇，说明存在环。",
      "level": "Easy",
      "reference": "class Solution:\n    def hasCycle(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow, fast = slow.next, fast.next.next\n            if slow is fast:\n                return True\n        return False\n",
      "referenceExplanation": "快慢指针有环会相遇。时间 O(n)，空间 O(1)。"
    },
    {
      "id": "lc104",
      "title": "104 · Maximum Depth of Binary Tree",
      "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      "week": 10,
      "topic": "树 / DFS",
      "method": "maxDepth",
      "starter": "class Solution:\n    def maxDepth(self, root):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "求二叉树最大深度；使用 LeetCode TreeNode。",
      "tests": [],
      "hint": "空树深度 0；其他节点为 1 + 两个子树深度最大值。",
      "level": "Easy",
      "reference": "class Solution:\n    def maxDepth(self, root):\n        if root is None:\n            return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))\n",
      "referenceExplanation": "空树深度为 0，其他节点取子树最大值加 1。时间 O(n)，递归空间 O(h)。"
    },
    {
      "id": "lc226",
      "title": "226 · Invert Binary Tree",
      "url": "https://leetcode.com/problems/invert-binary-tree/",
      "week": 10,
      "topic": "树",
      "method": "invertTree",
      "starter": "class Solution:\n    def invertTree(self, root):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "交换每个节点左右子树。",
      "tests": [],
      "hint": "递归交换子树，或使用队列逐个处理。",
      "level": "Easy",
      "reference": "class Solution:\n    def invertTree(self, root):\n        if root:\n            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)\n        return root\n",
      "referenceExplanation": "递归交换左右子树。时间 O(n)，递归空间 O(h)。"
    },
    {
      "id": "lc102",
      "title": "102 · Binary Tree Level Order Traversal",
      "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      "week": 10,
      "topic": "BFS",
      "method": "levelOrder",
      "starter": "class Solution:\n    def levelOrder(self, root):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "按层输出二叉树节点值。",
      "tests": [],
      "hint": "每轮按当前队列长度处理一层。",
      "level": "Medium",
      "reference": "class Solution:\n    def levelOrder(self, root):\n        from collections import deque\n        if not root:\n            return []\n        queue = deque([root])\n        result = []\n        while queue:\n            level = []\n            for _ in range(len(queue)):\n                node = queue.popleft()\n                level.append(node.val)\n                if node.left:\n                    queue.append(node.left)\n                if node.right:\n                    queue.append(node.right)\n            result.append(level)\n        return result\n",
      "referenceExplanation": "队列每轮只处理当前层的节点。时间 O(n)，空间 O(n)。"
    },
    {
      "id": "lc200",
      "title": "200 · Number of Islands",
      "url": "https://leetcode.com/problems/number-of-islands/",
      "week": 11,
      "topic": "图 / 网格",
      "method": "numIslands",
      "starter": "class Solution:\n    def numIslands(self, grid):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "网格中字符串 1 表示陆地，0 表示水；仅上下左右相连，返回岛屿数。",
      "tests": [
        {
          "args": [
            [
              [
                "1",
                "1",
                "0"
              ],
              [
                "0",
                "1",
                "0"
              ],
              [
                "0",
                "0",
                "1"
              ]
            ]
          ],
          "expected": 2,
          "normalize": "exact"
        },
        {
          "args": [
            [
              [
                "0"
              ]
            ]
          ],
          "expected": 0,
          "normalize": "exact"
        }
      ],
      "hint": "对每个未访问陆地开始遍历，并标记整个连通块。",
      "level": "Medium",
      "reference": "class Solution:\n    def numIslands(self, grid):\n        if not grid:\n            return 0\n        rows, cols = len(grid), len(grid[0])\n        seen = set()\n        count = 0\n        for r in range(rows):\n            for c in range(cols):\n                if grid[r][c] != \"1\" or (r, c) in seen:\n                    continue\n                count += 1\n                stack = [(r, c)]\n                seen.add((r, c))\n                while stack:\n                    x, y = stack.pop()\n                    for a, b in [(x-1,y),(x+1,y),(x,y-1),(x,y+1)]:\n                        if 0 <= a < rows and 0 <= b < cols and grid[a][b] == \"1\" and (a,b) not in seen:\n                            seen.add((a,b))\n                            stack.append((a,b))\n        return count\n",
      "referenceExplanation": "每个未访问陆地开启一次遍历。时间和空间 O(rows × cols)。"
    },
    {
      "id": "lc733",
      "title": "733 · Flood Fill",
      "url": "https://leetcode.com/problems/flood-fill/",
      "week": 11,
      "topic": "DFS / BFS",
      "method": "floodFill",
      "starter": "class Solution:\n    def floodFill(self, image, sr, sc, color):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "从起点出发，把与起点同色且上下左右连通的区域改为 color。",
      "tests": [
        {
          "args": [
            [
              [
                1,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                1,
                0,
                1
              ]
            ],
            1,
            1,
            2
          ],
          "expected": [
            [
              2,
              2,
              2
            ],
            [
              2,
              2,
              0
            ],
            [
              2,
              0,
              1
            ]
          ],
          "normalize": "exact"
        }
      ],
      "hint": "新颜色与旧颜色相同需要直接返回，避免重复扩展。",
      "level": "Easy",
      "reference": "class Solution:\n    def floodFill(self, image, sr, sc, color):\n        original = image[sr][sc]\n        if original == color:\n            return image\n        stack = [(sr, sc)]\n        image[sr][sc] = color\n        while stack:\n            r, c = stack.pop()\n            for a, b in [(r-1,c),(r+1,c),(r,c-1),(r,c+1)]:\n                if 0 <= a < len(image) and 0 <= b < len(image[0]) and image[a][b] == original:\n                    image[a][b] = color\n                    stack.append((a,b))\n        return image\n",
      "referenceExplanation": "入栈时染色防止重复访问，同色直接返回。时间和最坏空间 O(mn)。"
    },
    {
      "id": "lc215",
      "title": "215 · Kth Largest Element in an Array",
      "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      "week": 12,
      "topic": "堆",
      "method": "findKthLargest",
      "starter": "class Solution:\n    def findKthLargest(self, nums, k):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回排序后第 k 大元素，重复值也占位置。",
      "tests": [
        {
          "args": [
            [
              3,
              2,
              1,
              5,
              6,
              4
            ],
            2
          ],
          "expected": 5,
          "normalize": "exact"
        },
        {
          "args": [
            [
              3,
              2,
              3,
              1,
              2,
              4,
              5,
              5,
              6
            ],
            4
          ],
          "expected": 4,
          "normalize": "exact"
        }
      ],
      "hint": "先排序解，再学习维护大小 k 的最小堆。",
      "level": "Medium",
      "reference": "class Solution:\n    def findKthLargest(self, nums, k):\n        import heapq\n        return heapq.nlargest(k, nums)[-1]\n",
      "referenceExplanation": "维护最大的 k 项。时间 O(n log k)，空间 O(k)。"
    },
    {
      "id": "lc347",
      "title": "347 · Top K Frequent Elements",
      "url": "https://leetcode.com/problems/top-k-frequent-elements/",
      "week": 12,
      "topic": "计数 / 堆",
      "method": "topKFrequent",
      "starter": "class Solution:\n    def topKFrequent(self, nums, k):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回出现次数最多的 k 个元素，答案顺序不限。",
      "tests": [
        {
          "args": [
            [
              1,
              1,
              1,
              2,
              2,
              3
            ],
            2
          ],
          "expected": [
            1,
            2
          ],
          "normalize": "sort"
        },
        {
          "args": [
            [
              1
            ],
            1
          ],
          "expected": [
            1
          ],
          "normalize": "sort"
        }
      ],
      "hint": "先统计频率，再比较堆、排序和桶的开销。",
      "level": "Medium",
      "reference": "class Solution:\n    def topKFrequent(self, nums, k):\n        from collections import Counter\n        return [value for value, count in Counter(nums).most_common(k)]\n",
      "referenceExplanation": "先计数再取前 k。保守时间上界 O(n + u log u)，u 为不同元素数。"
    },
    {
      "id": "lc56",
      "title": "56 · Merge Intervals",
      "url": "https://leetcode.com/problems/merge-intervals/",
      "week": 13,
      "topic": "排序 / 区间",
      "method": "merge",
      "starter": "class Solution:\n    def merge(self, intervals):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "合并重叠闭区间，按起点升序返回。",
      "tests": [
        {
          "args": [
            [
              [
                1,
                3
              ],
              [
                2,
                6
              ],
              [
                8,
                10
              ],
              [
                15,
                18
              ]
            ]
          ],
          "expected": [
            [
              1,
              6
            ],
            [
              8,
              10
            ],
            [
              15,
              18
            ]
          ],
          "normalize": "exact"
        },
        {
          "args": [
            [
              [
                1,
                4
              ],
              [
                4,
                5
              ]
            ]
          ],
          "expected": [
            [
              1,
              5
            ]
          ],
          "normalize": "exact"
        }
      ],
      "hint": "先排序，比较当前区间与上一个合并区间。",
      "level": "Medium",
      "reference": "class Solution:\n    def merge(self, intervals):\n        result = []\n        for start, end in sorted(intervals):\n            if result and start <= result[-1][1]:\n                result[-1][1] = max(result[-1][1], end)\n            else:\n                result.append([start, end])\n        return result\n",
      "referenceExplanation": "按起点排序，再合并重叠区间。时间 O(n log n)，空间 O(n)。"
    },
    {
      "id": "lc53",
      "title": "53 · Maximum Subarray",
      "url": "https://leetcode.com/problems/maximum-subarray/",
      "week": 13,
      "topic": "动态规划",
      "method": "maxSubArray",
      "starter": "class Solution:\n    def maxSubArray(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "返回非空数组的最大连续子数组和。",
      "tests": [
        {
          "args": [
            [
              -2,
              1,
              -3,
              4,
              -1,
              2,
              1,
              -5,
              4
            ]
          ],
          "expected": 6,
          "normalize": "exact"
        },
        {
          "args": [
            [
              -1
            ]
          ],
          "expected": -1,
          "normalize": "exact"
        }
      ],
      "hint": "当前最佳结尾要么从当前元素开始，要么延续前一段。",
      "level": "Medium",
      "reference": "class Solution:\n    def maxSubArray(self, nums):\n        current = best = nums[0]\n        for value in nums[1:]:\n            current = max(value, current + value)\n            best = max(best, current)\n        return best\n",
      "referenceExplanation": "每步选择重新开始或接在前面的子数组后。时间 O(n)，此切片写法额外空间 O(n)。"
    },
    {
      "id": "lc322",
      "title": "322 · Coin Change",
      "url": "https://leetcode.com/problems/coin-change/",
      "week": 14,
      "topic": "动态规划",
      "method": "coinChange",
      "starter": "class Solution:\n    def coinChange(self, coins, amount):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "求组成 amount 的最少硬币数量；无法组成返回 -1。",
      "tests": [
        {
          "args": [
            [
              1,
              2,
              5
            ],
            11
          ],
          "expected": 3,
          "normalize": "exact"
        },
        {
          "args": [
            [
              2
            ],
            3
          ],
          "expected": -1,
          "normalize": "exact"
        },
        {
          "args": [
            [
              1
            ],
            0
          ],
          "expected": 0,
          "normalize": "exact"
        }
      ],
      "hint": "定义 dp[x] 为组成 x 的最小数量，并设置不可达状态。",
      "level": "Medium",
      "reference": "class Solution:\n    def coinChange(self, coins, amount):\n        dp = [0] + [amount + 1] * amount\n        for value in range(1, amount + 1):\n            for coin in coins:\n                if coin <= value:\n                    dp[value] = min(dp[value], dp[value-coin] + 1)\n        return dp[amount] if dp[amount] <= amount else -1\n",
      "referenceExplanation": "dp[v] 是组成 v 的最少硬币数。时间 O(amount × 硬币种数)，空间 O(amount)。"
    },
    {
      "id": "lc15",
      "title": "15 · 3Sum",
      "url": "https://leetcode.com/problems/3sum/",
      "week": 14,
      "topic": "双指针 / 去重",
      "method": "threeSum",
      "starter": "class Solution:\n    def threeSum(self, nums):\n        # 在这里实现，使用 return 返回结果\n        pass\n",
      "body": "输出和为零的不重复三元组；顺序不限。",
      "tests": [],
      "hint": "排序、固定一个数、左右指针，同时跳过重复值。",
      "level": "Medium",
      "reference": "class Solution:\n    def threeSum(self, nums):\n        nums = sorted(nums)\n        result = []\n        for i in range(len(nums)-2):\n            if i and nums[i] == nums[i-1]:\n                continue\n            left, right = i+1, len(nums)-1\n            while left < right:\n                total = nums[i] + nums[left] + nums[right]\n                if total < 0:\n                    left += 1\n                elif total > 0:\n                    right -= 1\n                else:\n                    result.append([nums[i], nums[left], nums[right]])\n                    left += 1\n                    right -= 1\n                    while left < right and nums[left] == nums[left-1]:\n                        left += 1\n                    while left < right and nums[right] == nums[right+1]:\n                        right -= 1\n        return result\n",
      "referenceExplanation": "排序后固定一个数，用双指针找另外两个并跳过重复。时间 O(n²)，排序副本空间 O(n)。"
    },
    {
      "id": "sql1757",
      "title": "1757 · Recyclable and Low Fat Products",
      "url": "https://leetcode.com/problems/recyclable-and-low-fat-products/",
      "week": 3,
      "topic": "WHERE",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT product_id FROM Products WHERE low_fats = 'Y' AND recyclable = 'Y';",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql584",
      "title": "584 · Find Customer Referee",
      "url": "https://leetcode.com/problems/find-customer-referee/",
      "week": 3,
      "topic": "NULL",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT name FROM Customer WHERE referee_id <> 2 OR referee_id IS NULL;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql595",
      "title": "595 · Big Countries",
      "url": "https://leetcode.com/problems/big-countries/",
      "week": 4,
      "topic": "AND / OR",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql1148",
      "title": "1148 · Article Views I",
      "url": "https://leetcode.com/problems/article-views-i/",
      "week": 4,
      "topic": "DISTINCT",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY id;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql1683",
      "title": "1683 · Invalid Tweets",
      "url": "https://leetcode.com/problems/invalid-tweets/",
      "week": 5,
      "topic": "字符串",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT tweet_id FROM Tweets WHERE CHAR_LENGTH(content) > 15;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql175",
      "title": "175 · Combine Two Tables",
      "url": "https://leetcode.com/problems/combine-two-tables/",
      "week": 5,
      "topic": "LEFT JOIN",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT p.firstName, p.lastName, a.city, a.state FROM Person p LEFT JOIN Address a ON p.personId = a.personId;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql577",
      "title": "577 · Employee Bonus",
      "url": "https://leetcode.com/problems/employee-bonus/",
      "week": 6,
      "topic": "LEFT JOIN / NULL",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT e.name, b.bonus FROM Employee e LEFT JOIN Bonus b ON e.empId = b.empId WHERE b.bonus < 1000 OR b.bonus IS NULL;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql1378",
      "title": "1378 · Replace Employee ID With The Unique Identifier",
      "url": "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/",
      "week": 6,
      "topic": "JOIN",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT u.unique_id, e.name FROM Employees e LEFT JOIN EmployeeUNI u ON e.id = u.id;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql197",
      "title": "197 · Rising Temperature",
      "url": "https://leetcode.com/problems/rising-temperature/",
      "week": 7,
      "topic": "自连接 / 日期",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT today.id FROM Weather today JOIN Weather yesterday ON DATEDIFF(today.recordDate, yesterday.recordDate) = 1 WHERE today.temperature > yesterday.temperature;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql620",
      "title": "620 · Not Boring Movies",
      "url": "https://leetcode.com/problems/not-boring-movies/",
      "week": 7,
      "topic": "排序",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT * FROM Cinema WHERE MOD(id, 2) = 1 AND description <> 'boring' ORDER BY rating DESC;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql1251",
      "title": "1251 · Average Selling Price",
      "url": "https://leetcode.com/problems/average-selling-price/",
      "week": 8,
      "topic": "加权平均 / JOIN",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT p.product_id, COALESCE(ROUND(SUM(p.price * u.units) / SUM(u.units), 2), 0) AS average_price FROM Prices p LEFT JOIN UnitsSold u ON p.product_id = u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date GROUP BY p.product_id;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql570",
      "title": "570 · Managers with at Least 5 Direct Reports",
      "url": "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/",
      "week": 9,
      "topic": "GROUP BY / HAVING",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT m.name FROM Employee m JOIN Employee e ON m.id = e.managerId GROUP BY m.id, m.name HAVING COUNT(*) >= 5;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql180",
      "title": "180 · Consecutive Numbers",
      "url": "https://leetcode.com/problems/consecutive-numbers/",
      "week": 10,
      "topic": "窗口 / 自连接",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT DISTINCT a.num AS ConsecutiveNums FROM Logs a JOIN Logs b ON b.id = a.id + 1 JOIN Logs c ON c.id = b.id + 1 WHERE a.num = b.num AND b.num = c.num;",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    },
    {
      "id": "sql184",
      "title": "184 · Department Highest Salary",
      "url": "https://leetcode.com/problems/department-highest-salary/",
      "week": 11,
      "topic": "分组最大值",
      "level": "SQL",
      "body": "阅读 LeetCode 原题表结构，在原站运行并提交；记录 SQL、结果与 NULL / 重复值等边界。",
      "starter": "-- 在 LeetCode 查看 schema 并运行 SQL\n",
      "tests": [],
      "reference": "SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary FROM Employee e JOIN Department d ON e.departmentId = d.id WHERE e.salary = (SELECT MAX(x.salary) FROM Employee x WHERE x.departmentId = e.departmentId);",
      "referenceExplanation": "MySQL 参考解。先核对原题表结构、NULL、重复值及输出列；在 LeetCode 选择 MySQL 提交验证。"
    }
  ]
};
