import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { BookOpen, Play, Check, ChevronLeft, ChevronRight, Code, PenTool, Award } from 'lucide-react';
import { useProgressStore, useUserStore } from '../store';

const Learn = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const lessonId = searchParams.get('lessonId') || '1';
  const { updateProgress, progress } = useProgressStore();
  const { user } = useUserStore();
  const [activeTab, setActiveTab] = useState('knowledge');
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [code, setCode] = useState('print("Hello, World!")');
  const [output, setOutput] = useState('');
  const [completed, setCompleted] = useState(false);

  // 模拟课程数据
  const mockCourse = {
    id: courseId || '1',
    title: 'Python基础入门',
    chapters: [
      {
        id: '1',
        title: 'Python简介',
        lessons: [
          {
            id: '1',
            title: '什么是Python',
            knowledge_points: [
              'Python的定义和特点',
              'Python的历史和发展',
              'Python的设计哲学',
              'Python的应用领域'
            ],
            content: 'Python是一种高级编程语言，以其简洁的语法和强大的功能而闻名。Python由Guido van Rossum于1989年创建，第一版发布于1991年。Python的设计哲学强调代码的可读性和简洁性，使用空格缩进代替大括号来划分代码块。Python广泛应用于数据分析、人工智能、Web开发、自动化脚本等领域。',
            code_example: 'print("Hello, World!")',
            exercise: {
              type: 'multiple_choice',
              question: 'Python的创始人是谁？',
              options: [
                'Guido van Rossum',
                'James Gosling',
                'Dennis Ritchie',
                'Bjarne Stroustrup'
              ],
              correct_answer: 'Guido van Rossum'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: 'Python的设计哲学强调什么？',
                  options: [
                    '代码的可读性和简洁性',
                    '执行速度',
                    '内存使用效率',
                    '语法复杂性'
                  ],
                  correct_answer: '代码的可读性和简洁性'
                },
                {
                  type: 'multiple_choice',
                  question: 'Python不常用于以下哪个领域？',
                  options: [
                    '数据分析',
                    '人工智能',
                    '系统级编程',
                    'Web开发'
                  ],
                  correct_answer: '系统级编程'
                }
              ]
            }
          },
          {
            id: '2',
            title: 'Python的安装',
            knowledge_points: [
              'Python的下载渠道',
              'Windows系统安装Python',
              'Mac系统安装Python',
              'Linux系统安装Python',
              '验证Python安装'
            ],
            content: '学习如何在不同操作系统上安装Python。Windows用户可以从Python官网下载安装程序，Mac用户可以使用Homebrew或从官网下载，Linux用户可以使用包管理器安装。安装完成后，可以通过命令行运行python --version来验证安装是否成功。',
            code_example: '# 检查Python版本\nimport sys\nprint(sys.version)',
            exercise: {
              type: 'multiple_choice',
              question: '以下哪种方式可以检查Python版本？',
              options: [
                'python --version',
                'python version',
                'python -v',
                'python info'
              ],
              correct_answer: 'python --version'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '在Windows系统上，安装Python时应该勾选哪个选项？',
                  options: [
                    'Add Python to PATH',
                    'Install for all users',
                    'Install pip',
                    'All of the above'
                  ],
                  correct_answer: 'All of the above'
                },
                {
                  type: 'multiple_choice',
                  question: '在Mac系统上，推荐使用哪种方式安装Python？',
                  options: [
                    'Homebrew',
                    '官网下载安装包',
                    'MacPorts',
                    '从源码编译'
                  ],
                  correct_answer: 'Homebrew'
                }
              ]
            }
          }
        ]
      },
      {
        id: '2',
        title: 'Python基础语法',
        lessons: [
          {
            id: '3',
            title: '变量和数据类型',
            knowledge_points: [
              '变量的定义和命名规则',
              'Python的基本数据类型',
              '数据类型转换',
              '变量的赋值和引用'
            ],
            content: '学习Python的基本数据类型和变量声明。Python支持多种数据类型，包括整数、浮点数、字符串、布尔值等。变量是用来存储数据的容器，在Python中不需要声明变量类型，直接赋值即可。',
            code_example: '# 变量和数据类型\nname = "John"\nage = 25\nheight = 1.75\nis_student = True\nprint(name, age, height, is_student)',
            exercise: {
              type: 'coding',
              question: '创建一个变量存储你的名字，然后打印出来',
              hint: '使用赋值语句和print函数'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个不是Python的基本数据类型？',
                  options: [
                    'int',
                    'float',
                    'string',
                    'array'
                  ],
                  correct_answer: 'array'
                },
                {
                  type: 'coding',
                  question: '编写代码，将字符串"123"转换为整数并打印出来',
                  hint: '使用int()函数'
                }
              ]
            }
          },
          {
            id: '4',
            title: '控制流',
            knowledge_points: [
              '条件语句（if-elif-else）',
              '循环语句（for、while）',
              '循环控制（break、continue）',
              '条件表达式'
            ],
            content: '学习if语句、循环等控制流结构。Python的控制流语句包括if-elif-else、for循环和while循环。控制流语句用于根据条件执行不同的代码块，或者重复执行某些代码。',
            code_example: '# 控制流\nif age >= 18:\n    print("成年人")\nelse:\n    print("未成年人")\n\n# 循环\nfor i in range(5):\n    print(i)',
            exercise: {
              type: 'coding',
              question: '使用for循环打印1到10的数字',
              hint: '使用range函数'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个语句用于跳出整个循环？',
                  options: [
                    'break',
                    'continue',
                    'exit',
                    'return'
                  ],
                  correct_answer: 'break'
                },
                {
                  type: 'coding',
                  question: '使用while循环计算1到100的和',
                  hint: '使用计数器和累加器'
                }
              ]
            }
          }
        ]
      },
      {
        id: '3',
        title: 'Python函数',
        lessons: [
          {
            id: '5',
            title: '函数定义和调用',
            knowledge_points: [
              '函数的定义语法',
              '函数的调用方式',
              '函数的返回值',
              '函数的作用域'
            ],
            content: '学习如何定义和调用函数。函数是一段可重用的代码块，用于执行特定的任务。在Python中，使用def关键字定义函数。',
            code_example: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))',
            exercise: {
              type: 'coding',
              question: '编写一个函数，计算两个数的和并返回结果',
              hint: '使用def关键字定义函数'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个是函数定义的正确语法？',
                  options: [
                    'function greet(name):',
                    'def greet(name):',
                    'def greet = (name):',
                    'function greet = (name):'
                  ],
                  correct_answer: 'def greet(name):'
                }
              ]
            }
          },
          {
            id: '6',
            title: '函数参数',
            knowledge_points: [
              '位置参数',
              '关键字参数',
              '默认参数',
              '可变参数',
              '关键字可变参数'
            ],
            content: '学习函数的参数类型和使用方法。Python支持多种参数类型，包括位置参数、关键字参数、默认参数、可变参数和关键字可变参数。',
            code_example: 'def add(a, b=10):\n    return a + b\n\nprint(add(5))  # 使用默认参数\nprint(add(5, 20))  # 覆盖默认参数',
            exercise: {
              type: 'coding',
              question: '编写一个函数，接受任意数量的参数并返回它们的和',
              hint: '使用可变参数*args'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个是可变参数的正确表示？',
                  options: [
                    '*args',
                    'args*',
                    '**args',
                    'args**'
                  ],
                  correct_answer: '*args'
                }
              ]
            }
          }
        ]
      },
      {
        id: '4',
        title: 'Python训练项目',
        lessons: [
          {
            id: '7',
            title: '项目1：变量与数据类型诊所',
            knowledge_points: [
              '变量的定义与命名规则',
              '数据类型：int, float, str, bool',
              'type()函数查看类型',
              '简单的输入输出'
            ],
            content: '本项目主要训练变量和数据类型的使用，包括变量的定义、命名规则、数据类型的识别和转换，以及简单的输入输出操作。',
            code_example: 'def practice_1():\n    """\n    任务：\n    1. 创建变量name存储你的名字（字符串）\n    2. 创建变量age存储年龄（整数）\n    3. 创建变量height存储身高（浮点数，单位米）\n    4. 创建变量is_student存储是否为学员（布尔值）\n    5. 打印所有变量及其类型\n    """\n    name = "张三"\n    age = 25\n    height = 1.75\n    is_student = True\n    \n    print(f"姓名: {name}, 类型: {type(name)}")\n    print(f"年龄: {age}, 类型: {type(age)}")\n    print(f"身高: {height}, 类型: {type(height)}")\n    print(f"是否学员: {is_student}, 类型: {type(is_student)}")\n    \n    return name, age, height, is_student',
            exercise: {
              type: 'coding',
              question: '创建变量存储你的个人信息，包括姓名、年龄、身高和是否为学生，然后打印所有变量及其类型',
              hint: '使用不同类型的变量'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个是合法的变量名？（ ）',
                  options: [
                    '2var',
                    'my-name',
                    '_score',
                    'def'
                  ],
                  correct_answer: '_score'
                },
                {
                  type: 'multiple_choice',
                  question: '将字符串"3.14"转换为浮点数的代码是______',
                  options: [
                    'int("3.14")',
                    'float("3.14")',
                    'str("3.14")',
                    'bool("3.14")'
                  ],
                  correct_answer: 'float("3.14")'
                }
              ]
            }
          },
          {
            id: '8',
            title: '项目2：运算符计算器',
            knowledge_points: [
              '算术运算符：+ - * / // % **',
              '比较运算符：== != > < >= <=',
              '逻辑运算符：and or not',
              '赋值运算符：= += -= *= /='
            ],
            content: '本项目主要训练各种运算符的使用，包括算术运算符、比较运算符、逻辑运算符和赋值运算符。',
            code_example: 'def practice_2():\n    """\n    任务：\n    1. 计算(15 + 8) * 3 - 12 / 4的结果\n    2. 判断100是否能被3整除\n    3. 判断一个数是否同时大于10且小于50\n    4. 使用复合赋值运算符，将a初始化为10，依次加5、乘2、减3\n    """\n    # 任务1\n    result1 = (15 + 8) * 3 - 12 / 4\n    print(f"(15+8)*3-12/4 = {result1}")\n    \n    # 任务2\n    is_divisible = 100 % 3 == 0\n    print(f"100能被3整除: {is_divisible}")\n    \n    # 任务3\n    num = 30\n    is_in_range = num > 10 and num < 50\n    print(f"{num}在10-50之间: {is_in_range}")\n    \n    # 任务4\n    a = 10\n    a += 5  # a = 15\n    a *= 2  # a = 30\n    a -= 3  # a = 27\n    print(f"最终a = {a}")\n    \n    return result1, is_divisible, is_in_range, a',
            exercise: {
              type: 'coding',
              question: '计算(20 - 5) * 2 + 15 / 3的结果，并使用复合赋值运算符将变量x初始化为5，依次乘3、加2、减4',
              hint: '注意运算符优先级'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '表达式 17 % 5 的结果是（ ）',
                  options: [
                    '3',
                    '3.4',
                    '2',
                    '2.4'
                  ],
                  correct_answer: '2'
                },
                {
                  type: 'multiple_choice',
                  question: '以下哪个表达式的结果为True？（ ）',
                  options: [
                    '5 > 3 and 4 < 2',
                    'not 10 > 5',
                    '8 == 8 or 3 != 3',
                    '6 <= 6 and 7 > 9'
                  ],
                  correct_answer: '8 == 8 or 3 != 3'
                }
              ]
            }
          },
          {
            id: '9',
            title: '项目3：条件判断导航仪',
            knowledge_points: [
              'if语句的基本结构',
              'if-else双向分支',
              'if-elif-else多向分支',
              '嵌套条件判断',
              '三元表达式'
            ],
            content: '本项目主要训练条件判断语句的使用，包括if语句、if-else语句、if-elif-else语句、嵌套条件判断和三元表达式。',
            code_example: 'def practice_3():\n    """\n    任务：\n    1. 根据分数(0-100)评定等级：A(>=90)、B(>=75)、C(>=60)、D(<60)\n    2. 判断闰年：能被4整除但不能被100整除，或者能被400整除\n    3. 使用三元表达式找出两个数中的较大值\n    """\n    # 任务1：成绩评定\n    def get_grade(score):\n        if score >= 90:\n            return \'A\'\n        elif score >= 75:\n            return \'B\'\n        elif score >= 60:\n            return \'C\'\n        else:\n            return \'D\'\n    \n    print(f"85分等级: {get_grade(85)}")\n    print(f"92分等级: {get_grade(92)}")\n    \n    # 任务2：闰年判断\n    def is_leap_year(year):\n        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\n    \n    print(f"2024年是闰年: {is_leap_year(2024)}")\n    print(f"2100年是闰年: {is_leap_year(2100)}")\n    \n    # 任务3：三元表达式\n    a, b = 15, 20\n    max_value = a if a > b else b\n    print(f"{a}和{b}中较大的是: {max_value}")\n    \n    return get_grade, is_leap_year',
            exercise: {
              type: 'coding',
              question: '编写一个函数，根据输入的分数返回对应的等级，等级标准为：A(>=90)、B(>=75)、C(>=60)、D(<60)',
              hint: '使用if-elif-else语句'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下代码的输出结果是（ ）\n   x = 5\n   if x > 3:\n       if x < 7:\n           print("A")\n       else:\n           print("B")\n   else:\n       print("C")',
                  options: [
                    'A',
                    'B',
                    'C',
                    '无输出'
                  ],
                  correct_answer: 'A'
                },
                {
                  type: 'coding',
                  question: '使用三元表达式实现：取绝对值（如果num<0则取相反数，否则不变）',
                  hint: '使用条件表达式'
                }
              ]
            }
          },
          {
            id: '10',
            title: '项目4：循环工厂',
            knowledge_points: [
              'for循环遍历range、列表、字符串',
              'while循环条件控制',
              'break和continue语句',
              '循环嵌套',
              'enumerate()函数'
            ],
            content: '本项目主要训练循环语句的使用，包括for循环、while循环、break和continue语句、循环嵌套和enumerate()函数。',
            code_example: 'def practice_4():\n    """\n    任务：\n    1. 使用for循环计算1到100的和\n    2. 使用while循环打印斐波那契数列前20项\n    3. 遍历列表[\'a\',\'b\',\'c\',\'d\']，打印索引和元素\n    4. 打印9x9乘法表\n    """\n    # 任务1：1-100求和\n    sum_1_to_100 = sum(range(1, 101))\n    print(f"1-100的和: {sum_1_to_100}")\n    \n    # 任务2：斐波那契数列前20项\n    def fibonacci(n):\n        a, b = 0, 1\n        result = []\n        for _ in range(n):\n            result.append(a)\n            a, b = b, a + b\n        return result\n    \n    fib_20 = fibonacci(20)\n    print(f"斐波那契数列前20项: {fib_20}")\n    \n    # 任务3：遍历列表\n    letters = [\'a\', \'b\', \'c\', \'d\']\n    for index, value in enumerate(letters):\n        print(f"索引{index}: {value}")\n    \n    # 任务4：9x9乘法表\n    print("9x9乘法表:")\n    for i in range(1, 10):\n        row = [f"{i}×{j}={i*j:2d}" for j in range(1, i+1)]\n        print("  ".join(row))\n    \n    return sum_1_to_100, fib_20',
            exercise: {
              type: 'coding',
              question: '使用for循环计算1到100的和，使用while循环打印斐波那契数列前10项',
              hint: '使用range函数和while循环'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下代码运行后，输出结果中共有____个数字\n   for i in range(10):\n       if i % 2 == 0:\n           continue\n       print(i)',
                  options: [
                    '4',
                    '5',
                    '6',
                    '10'
                  ],
                  correct_answer: '5'
                },
                {
                  type: 'coding',
                  question: '编写代码：找出1-100之间所有能被7整除但不能被3整除的数',
                  hint: '使用for循环和条件判断'
                }
              ]
            }
          },
          {
            id: '11',
            title: '项目5：字符串处理工坊',
            knowledge_points: [
              '字符串索引和切片',
              '字符串方法：upper(), lower(), strip(), split(), join()',
              '字符串格式化：f-string, format(), %',
              '字符串查找和替换'
            ],
            content: '本项目主要训练字符串的处理方法，包括字符串索引和切片、字符串方法、字符串格式化和字符串查找替换。',
            code_example: 'def practice_5():\n    """\n    任务：\n    1. 提取邮箱的用户名和域名\n    2. 将句子中的单词首字母大写\n    3. 统计字符串中每个字符出现的次数\n    4. 判断字符串是否为回文\n    """\n    # 任务1：提取邮箱信息\n    email = "zhang.san@example.com"\n    username = email[:email.index(\'@\')]\n    domain = email[email.index(\'@\') + 1:]\n    print(f"用户名: {username}, 域名: {domain}")\n    \n    # 任务2：首字母大写\n    sentence = "hello world python programming"\n    title_case = sentence.title()\n    print(f"转换后: {title_case}")\n    \n    # 任务3：字符统计\n    def char_count(text):\n        count = {}\n        for char in text:\n            count[char] = count.get(char, 0) + 1\n        return count\n    \n    text = "hello"\n    print(f"字符统计: {char_count(text)}")\n    \n    # 任务4：回文判断\n    def is_palindrome(s):\n        s = s.lower().replace(" ", "")\n        return s == s[::-1]\n    \n    print(f"\'radar\'是回文: {is_palindrome(\'radar\')}")\n    print(f"\'python\'是回文: {is_palindrome(\'python\')}")\n    \n    return username, domain, title_case',
            exercise: {
              type: 'coding',
              question: '编写一个函数，统计字符串中每个字符出现的次数，并返回出现次数最多的字符',
              hint: '使用字典存储字符计数'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '将字符串" Python is awesome "两端的空格去除，并将所有字母转为大写，结果是______',
                  options: [
                    'PYTHON IS AWESOME',
                    'Python Is Awesome',
                    ' python is awesome ',
                    'PYTHON IS AWESOME '
                  ],
                  correct_answer: 'PYTHON IS AWESOME'
                },
                {
                  type: 'multiple_choice',
                  question: '将列表[\'apple\', \'banana\', \'orange\']用逗号连接成一个字符串，代码是______',
                  options: [
                    'join(",", [\'apple\', \'banana\', \'orange\'])',
                    '",".join([\'apple\', \'banana\', \'orange\'])',
                    'join([\'apple\', \'banana\', \'orange\'], ",")',
                    '[\'apple\', \'banana\', \'orange\'].join(",")'
                  ],
                  correct_answer: '",".join([\'apple\', \'banana\', \'orange\'])'
                }
              ]
            }
          },
          {
            id: '12',
            title: '项目6：列表数据仓库',
            knowledge_points: [
              '列表的创建和基本操作',
              '列表切片和复制',
              '列表方法：append, extend, insert, remove, pop, sort, reverse',
              '列表推导式'
            ],
            content: '本项目主要训练列表的操作方法，包括列表的创建、基本操作、切片和复制、列表方法和列表推导式。',
            code_example: 'def practice_6():\n    """\n    任务：\n    1. 合并两个列表并去重\n    2. 找出列表中的最大值、最小值、平均值\n    3. 使用列表推导式生成1-20的偶数平方\n    4. 将列表元素随机排序\n    """\n    # 任务1：合并去重\n    list1 = [1, 2, 3, 4, 5]\n    list2 = [4, 5, 6, 7, 8]\n    merged = list(set(list1 + list2))\n    print(f"合并去重后: {merged}")\n    \n    # 任务2：统计信息\n    numbers = [12, 45, 78, 23, 56, 89, 34, 67]\n    max_val = max(numbers)\n    min_val = min(numbers)\n    avg_val = sum(numbers) / len(numbers)\n    print(f"最大值: {max_val}, 最小值: {min_val}, 平均值: {avg_val:.2f}")\n    \n    # 任务3：列表推导式\n    even_squares = [i**2 for i in range(1, 21) if i % 2 == 0]\n    print(f"1-20的偶数平方: {even_squares}")\n    \n    # 任务4：随机排序\n    import random\n    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n    random.shuffle(items)\n    print(f"随机排序后: {items}")\n    \n    return merged, even_squares',
            exercise: {
              type: 'coding',
              question: '使用列表推导式生成1-50之间所有能被3或5整除的数',
              hint: '使用条件判断的列表推导式'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '列表[1,2,3,4,5]的切片[::2]的结果是______',
                  options: [
                    '[1, 3, 5]',
                    '[2, 4]',
                    '[1, 2, 3, 4, 5]',
                    '[]'
                  ],
                  correct_answer: '[1, 3, 5]'
                },
                {
                  type: 'multiple_choice',
                  question: '以下代码的输出结果是（ ）\n   a = [1,2,3]\n   b = a\n   b.append(4)\n   print(a)',
                  options: [
                    '[1,2,3]',
                    '[1,2,3,4]',
                    '[4]',
                    '报错'
                  ],
                  correct_answer: '[1,2,3,4]'
                }
              ]
            }
          },
          {
            id: '13',
            title: '项目7：字典映射系统',
            knowledge_points: [
              '字典的创建和访问',
              '字典方法：keys(), values(), items(), get(), update()',
              '字典推导式',
              '字典的排序'
            ],
            content: '本项目主要训练字典的操作方法，包括字典的创建和访问、字典方法、字典推导式和字典的排序。',
            code_example: 'def practice_7():\n    """\n    任务：\n    1. 创建学生成绩字典，实现增删改查\n    2. 统计词频\n    3. 合并两个字典\n    4. 按值排序字典\n    """\n    # 任务1：学生成绩管理\n    scores = {"张三": 85, "李四": 92, "王五": 78}\n    \n    # 添加新学生\n    scores["赵六"] = 88\n    # 修改成绩\n    scores["李四"] = 95\n    # 删除学生\n    del scores["王五"]\n    print(f"学生成绩: {scores}")\n    \n    # 任务2：词频统计\n    text = "hello world hello python world hello"\n    word_count = {}\n    for word in text.split():\n        word_count[word] = word_count.get(word, 0) + 1\n    print(f"词频统计: {word_count}")\n    \n    # 任务3：合并字典\n    dict1 = {"a": 1, "b": 2}\n    dict2 = {"c": 3, "d": 4}\n    merged = {**dict1, **dict2}\n    print(f"合并后: {merged}")\n    \n    # 任务4：按值排序\n    sorted_by_value = dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))\n    print(f"按成绩排序: {sorted_by_value}")\n    \n    return scores, word_count',
            exercise: {
              type: 'coding',
              question: '编写一个函数，统计字符串中每个单词出现的次数，并按出现次数降序排序',
              hint: '使用字典存储词频，然后排序'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '从字典d = {\'name\': \'Tom\', \'age\': 20, \'city\': \'Beijing\'}中安全获取\'score\'键的值（不存在时返回0），代码是______',
                  options: [
                    'd[\'score\']',
                    'd.get(\'score\')',
                    'd.get(\'score\', 0)',
                    'd.setdefault(\'score\', 0)'
                  ],
                  correct_answer: 'd.get(\'score\', 0)'
                },
                {
                  type: 'multiple_choice',
                  question: '将两个列表keys = [\'a\',\'b\',\'c\']和values = [1,2,3]转换为字典，代码是______',
                  options: [
                    'dict(zip(keys, values))',
                    'zip(dict(keys, values))',
                    'dict(keys, values)',
                    'zip(keys, values)'
                  ],
                  correct_answer: 'dict(zip(keys, values))'
                }
              ]
            }
          },
          {
            id: '14',
            title: '项目8：函数设计器',
            knowledge_points: [
              '函数定义和调用',
              '参数类型：位置参数、默认参数、关键字参数、可变参数',
              '返回值',
              'lambda表达式',
              '作用域'
            ],
            content: '本项目主要训练函数的设计和使用，包括函数定义和调用、参数类型、返回值、lambda表达式和作用域。',
            code_example: 'def practice_8():\n    """\n    任务：\n    1. 编写计算任意数量数字平均值的函数\n    2. 编写递归函数计算阶乘\n    3. 使用lambda表达式排序\n    4. 编写装饰器计算函数执行时间\n    """\n    # 任务1：可变参数求平均\n    def average(*args):\n        if not args:\n            return 0\n        return sum(args) / len(args)\n    \n    print(f"平均值: {average(1, 2, 3, 4, 5)}")\n    print(f"平均值: {average(10, 20)}")\n    \n    # 任务2：递归阶乘\n    def factorial(n):\n        if n <= 1:\n            return 1\n        return n * factorial(n - 1)\n    \n    print(f"5! = {factorial(5)}")\n    print(f"10! = {factorial(10)}")\n    \n    # 任务3：lambda排序\n    students = [("张三", 85), ("李四", 92), ("王五", 78)]\n    students.sort(key=lambda x: x[1], reverse=True)\n    print(f"按成绩排序: {students}")\n    \n    # 任务4：装饰器\n    import time\n    \n    def timer(func):\n        def wrapper(*args, **kwargs):\n            start = time.time()\n            result = func(*args, **kwargs)\n            end = time.time()\n            print(f"{func.__name__}执行时间: {end-start:.4f}秒")\n            return result\n        return wrapper\n    \n    @timer\n    def slow_function():\n        time.sleep(0.5)\n        return "完成"\n    \n    slow_function()\n    \n    return average, factorial',
            exercise: {
              type: 'coding',
              question: '编写一个函数is_prime(n)，判断一个数是否为质数',
              hint: '使用循环和条件判断'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '使用lambda表达式：将列表[(\'a\',3), (\'b\',1), (\'c\',2)]按第二个元素排序，代码是______',
                  options: [
                    'sorted(list, key=lambda x: x[0])',
                    'sorted(list, key=lambda x: x[1])',
                    'list.sort(key=lambda x: x[0])',
                    'list.sort(key=lambda x: x[1])'
                  ],
                  correct_answer: 'list.sort(key=lambda x: x[1])'
                }
              ]
            }
          },
          {
            id: '15',
            title: '项目9：文件与异常处理',
            knowledge_points: [
              '文件读写：open, read, write, with语句',
              '异常处理：try-except-else-finally',
              '自定义异常',
              'CSV文件处理'
            ],
            content: '本项目主要训练文件操作和异常处理，包括文件读写、异常处理、自定义异常和CSV文件处理。',
            code_example: 'def practice_9():\n    """\n    任务：\n    1. 写入并读取文本文件\n    2. 处理除零异常\n    3. 读取CSV文件内容\n    4. 自定义异常类\n    """\n    # 任务1：文件读写\n    with open("test.txt", "w", encoding="utf-8") as f:\n        f.write("Hello, Python!\n第二行内容")\n    \n    with open("test.txt", "r", encoding="utf-8") as f:\n        content = f.read()\n    print(f"文件内容: {content}")\n    \n    # 任务2：异常处理\n    def safe_divide(a, b):\n        try:\n            result = a / b\n        except ZeroDivisionError:\n            print("错误：除数不能为零")\n            return None\n        except TypeError:\n            print("错误：参数类型错误")\n            return None\n        else:\n            print(f"计算结果: {result}")\n            return result\n        finally:\n            print("除法运算结束")\n    \n    safe_divide(10, 2)\n    safe_divide(10, 0)\n    \n    # 任务3：CSV读取模拟\n    csv_data = """name,age,city\n张三,25,北京\n李四,30,上海\n王五,28,广州"""\n    \n    with open("data.csv", "w", encoding="utf-8") as f:\n        f.write(csv_data)\n    \n    import csv\n    with open("data.csv", "r", encoding="utf-8") as f:\n        reader = csv.DictReader(f)\n        for row in reader:\n            print(f"姓名: {row[\'name\']}, 年龄: {row[\'age\']}, 城市: {row[\'city\']}")\n    \n    # 任务4：自定义异常\n    class AgeError(Exception):\n        pass\n    \n    def check_age(age):\n        if age < 0:\n            raise AgeError("年龄不能为负数")\n        elif age > 150:\n            raise AgeError("年龄超出合理范围")\n        return True\n    \n    try:\n        check_age(-5)\n    except AgeError as e:\n        print(f"年龄验证错误: {e}")\n    \n    return content',
            exercise: {
              type: 'coding',
              question: '编写代码：尝试将用户输入的字符串转换为整数，如果转换失败则打印"输入无效"',
              hint: '使用try-except语句'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '使用with语句安全打开文件并读取所有行的代码是______',
                  options: [
                    'with open("file.txt", "r") as f: lines = f.readlines()',
                    'with open("file.txt") as f: lines = f.read()',
                    'with open("file.txt", "w") as f: lines = f.readlines()',
                    'open("file.txt", "r") as f: lines = f.readlines()'
                  ],
                  correct_answer: 'with open("file.txt", "r") as f: lines = f.readlines()'
                }
              ]
            }
          },
          {
            id: '16',
            title: '项目10：综合应用 - 学生成绩管理系统',
            knowledge_points: [
              '综合运用：数据类型、条件判断、循环、函数、文件操作、异常处理'
            ],
            content: '本项目是一个综合应用，开发完整的学生成绩管理系统，包括添加学生信息、查询学生成绩、计算班级平均分、成绩排名、保存数据到文件和从文件加载数据等功能。',
            code_example: 'def practice_10():\n    """\n    任务：开发完整的学生成绩管理系统\n    功能要求：\n    1. 添加学生信息（姓名、各科成绩）\n    2. 查询学生成绩\n    3. 计算班级平均分\n    4. 成绩排名\n    5. 保存数据到文件\n    6. 从文件加载数据\n    """\n    import json\n    import os\n    \n    class StudentManager:\n        def __init__(self, filename="students.json"):\n            self.filename = filename\n            self.students = self.load_data()\n        \n        def load_data(self):\n            """从文件加载数据"""\n            if os.path.exists(self.filename):\n                with open(self.filename, "r", encoding="utf-8") as f:\n                    return json.load(f)\n            return {}\n        \n        def save_data(self):\n            """保存数据到文件"""\n            with open(self.filename, "w", encoding="utf-8") as f:\n                json.dump(self.students, f, ensure_ascii=False, indent=2)\n        \n        def add_student(self, name, scores):\n            """添加学生"""\n            if name in self.students:\n                print(f"学生{name}已存在")\n                return False\n            self.students[name] = scores\n            self.save_data()\n            print(f"成功添加学生: {name}")\n            return True\n        \n        def get_student_score(self, name):\n            """查询学生成绩"""\n            if name not in self.students:\n                print(f"学生{name}不存在")\n                return None\n            scores = self.students[name]\n            avg_score = sum(scores.values()) / len(scores)\n            print(f"{name}的成绩: {scores}")\n            print(f"平均分: {avg_score:.2f}")\n            return scores\n        \n        def get_class_average(self):\n            """计算班级平均分"""\n            if not self.students:\n                return 0\n            all_scores = []\n            for scores in self.students.values():\n                all_scores.extend(scores.values())\n            avg = sum(all_scores) / len(all_scores)\n            print(f"班级平均分: {avg:.2f}")\n            return avg\n        \n        def get_ranking(self):\n            """成绩排名"""\n            rankings = []\n            for name, scores in self.students.items():\n                total = sum(scores.values())\n                rankings.append((name, total))\n            rankings.sort(key=lambda x: x[1], reverse=True)\n            print("\n成绩排名:")\n            for i, (name, total) in enumerate(rankings, 1):\n                print(f"{i}. {name}: {total}分")\n            return rankings\n    \n    # 运行系统\n    manager = StudentManager()\n    # manager.menu()  # 取消注释以运行交互式菜单\n    \n    # 演示示例\n    manager.add_student("张三", {"语文": 85, "数学": 90, "英语": 88})\n    manager.add_student("李四", {"语文": 78, "数学": 92, "英语": 85})\n    manager.get_student_score("张三")\n    manager.get_class_average()\n    manager.get_ranking()\n    \n    return manager',
            exercise: {
              type: 'coding',
              question: '编写一个简单的通讯录管理系统，使用字典存储联系人（姓名、电话、邮箱），实现添加、删除、查找、显示所有联系人的功能',
              hint: '使用字典和函数实现'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '在学生成绩管理系统中，如果要添加异常处理，应该在哪些地方添加？',
                  options: [
                    '文件读写操作',
                    '用户输入处理',
                    '除法运算',
                    '以上都是'
                  ],
                  correct_answer: '以上都是'
                }
              ]
            }
          },
          {
            id: '17',
            title: 'Python基础入门 - 结业考试',
            knowledge_points: [
              'Python基础知识综合测试'
            ],
            content: '本考试是Python基础入门课程的结业考试，测试学生对Python基础知识的掌握程度，包括变量和数据类型、运算符、条件判断、循环、函数、文件操作等内容。',
            code_example: '"""\nPython基础入门 - 结业考试\n总分：100分\n时间：90分钟\n"""\n\n# === 选择题（每题5分，共25分）===\n"""\n1. 以下哪个变量名是合法的？（ ）\n   A. 2var  B. my-name  C. _private  D. import\n\n2. 表达式 17 % 5 的结果是（ ）\n   A. 3  B. 3.4  C. 2  D. 2.4\n\n3. 以下代码的输出结果是（ ）\n   x = [1, 2, 3]\n   y = x\n   y.append(4)\n   print(x)\n   A. [1,2,3]  B. [1,2,3,4]  C. [4]  D. 报错\n\n4. 以下哪个不是Python的保留字？（ ）\n   A. lambda  B. yield  C. function  D. async\n\n5. 关于字典的描述，正确的是（ ）\n   A. 字典可以通过索引访问  B. 字典的键必须是字符串\n   C. 字典是无序的  D. 字典不能嵌套\n"""\n\n# === 填空题（每空5分，共25分）===\n"""\n1. 使用______语句可以安全地打开文件，无需手动关闭\n\n2. 定义一个空元组的代码是______\n\n3. 将字符串"123"转换为整数的代码是______\n\n4. 判断变量x是否为列表类型的代码是______\n\n5. 列表推导式 [i*2 for i in range(5)] 的结果是______\n"""\n\n# === 代码补全（每题10分，共20分）===\n"""\n1. 补全代码，计算斐波那契数列第n项\n   def fibonacci(n):\n       if n <= 1:\n           return ___\n       return ___\n\n2. 补全代码，使用lambda表达式对列表排序\n   students = [(\'张三\', 85), (\'李四\', 92), (\'王五\', 78)]\n   students.sort(key=lambda x: ___, reverse=True)\n"""\n\n# === 编程题（30分）===\n"""\n题目：编写一个简单的通讯录管理系统\n\n要求：\n1. 使用字典存储联系人（姓名、电话、邮箱）\n2. 实现添加、删除、查找、显示所有联系人的功能\n3. 使用异常处理防止程序崩溃\n4. 数据持久化保存到文件\n5. 代码要有适当的注释\n\n评分标准：\n- 功能完整性（15分）\n- 代码规范性（5分）\n- 异常处理（5分）\n- 代码注释（5分）\n"""',
            exercise: {
              type: 'coding',
              question: '编写一个简单的通讯录管理系统，使用字典存储联系人（姓名、电话、邮箱），实现添加、删除、查找、显示所有联系人的功能，使用异常处理防止程序崩溃，数据持久化保存到文件',
              hint: '综合使用字典、函数、文件操作和异常处理'
            },
            exam: {
              questions: [
                {
                  type: 'multiple_choice',
                  question: '以下哪个变量名是合法的？（ ）',
                  options: [
                    '2var',
                    'my-name',
                    '_private',
                    'import'
                  ],
                  correct_answer: '_private'
                },
                {
                  type: 'multiple_choice',
                  question: '表达式 17 % 5 的结果是（ ）',
                  options: [
                    '3',
                    '3.4',
                    '2',
                    '2.4'
                  ],
                  correct_answer: '2'
                },
                {
                  type: 'multiple_choice',
                  question: '以下代码的输出结果是（ ）\n   x = [1, 2, 3]\n   y = x\n   y.append(4)\n   print(x)',
                  options: [
                    '[1,2,3]',
                    '[1,2,3,4]',
                    '[4]',
                    '报错'
                  ],
                  correct_answer: '[1,2,3,4]'
                },
                {
                  type: 'multiple_choice',
                  question: '以下哪个不是Python的保留字？（ ）',
                  options: [
                    'lambda',
                    'yield',
                    'function',
                    'async'
                  ],
                  correct_answer: 'function'
                },
                {
                  type: 'multiple_choice',
                  question: '关于字典的描述，正确的是（ ）',
                  options: [
                    '字典可以通过索引访问',
                    '字典的键必须是字符串',
                    '字典是无序的',
                    '字典不能嵌套'
                  ],
                  correct_answer: '字典是无序的'
                }
              ]
            }
          }
        ]
      }
    ]
  };

  // 找到当前章节和课程
  const currentChapter = mockCourse.chapters.find(ch => ch.id === chapterId);
  const currentLesson = currentChapter?.lessons.find(les => les.id === lessonId);

  if (!currentChapter || !currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h1 className="text-2xl font-bold mb-4">课程内容不存在</h1>
            <button 
              onClick={() => navigate('/courses')}
              className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              返回课程列表
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleRunCode = () => {
    // 模拟代码运行
    setOutput(`执行结果:\n${code}`);
  };

  const handleMarkComplete = async () => {
    // 不需要登录也可以标记为完成
    if (user) {
      await updateProgress(currentLesson.id, true);
    }
    setCompleted(true);
  };

  const handleNextLesson = () => {
    const currentLessonIndex = currentChapter.lessons.findIndex(les => les.id === lessonId);
    if (currentLessonIndex < currentChapter.lessons.length - 1) {
      const nextLesson = currentChapter.lessons[currentLessonIndex + 1];
      navigate(`/learn/${courseId}/${chapterId}?lessonId=${nextLesson.id}`);
    } else {
      // 进入下一章
      const currentChapterIndex = mockCourse.chapters.findIndex(ch => ch.id === chapterId);
      if (currentChapterIndex < mockCourse.chapters.length - 1) {
        const nextChapter = mockCourse.chapters[currentChapterIndex + 1];
        navigate(`/learn/${courseId}/${nextChapter.id}?lessonId=${nextChapter.lessons[0].id}`);
      }
    }
  };

  const handlePrevLesson = () => {
    const currentLessonIndex = currentChapter.lessons.findIndex(les => les.id === lessonId);
    if (currentLessonIndex > 0) {
      const prevLesson = currentChapter.lessons[currentLessonIndex - 1];
      navigate(`/learn/${courseId}/${chapterId}?lessonId=${prevLesson.id}`);
    } else {
      // 进入上一章
      const currentChapterIndex = mockCourse.chapters.findIndex(ch => ch.id === chapterId);
      if (currentChapterIndex > 0) {
        const prevChapter = mockCourse.chapters[currentChapterIndex - 1];
        navigate(`/learn/${courseId}/${prevChapter.id}?lessonId=${prevChapter.lessons[prevChapter.lessons.length - 1].id}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <a href="/courses" className="text-primary hover:underline">课程中心</a>
          <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
          <a href={`/course/${courseId}`} className="text-primary hover:underline">{mockCourse.title}</a>
          <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
          <span className="text-neutral-600">{currentChapter.title}</span>
          <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
          <span className="text-primary font-medium">{currentLesson.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-4 text-primary">课程目录</h3>
              <div className="space-y-4">
                {mockCourse.chapters.map((chapter) => (
                  <div key={chapter.id}>
                    <h4 className="font-medium text-primary mb-2">{chapter.title}</h4>
                    <div className="pl-4 space-y-2">
                      {chapter.lessons.map((lesson) => (
                        <a
                          key={lesson.id}
                          href={`/learn/${courseId}/${chapter.id}?lessonId=${lesson.id}`}
                          className={`block py-2 px-3 rounded-md transition-colors ${lesson.id === lessonId ? 'bg-primary/10 text-primary' : 'hover:bg-neutral-100'}`}
                        >
                          {lesson.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Lesson Header */}
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold mb-2 text-primary">{currentLesson.title}</h1>
                <p className="text-neutral-600">{currentChapter.title}</p>
              </div>

              {/* Tabs */}
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('knowledge')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'knowledge' ? 'border-primary text-primary' : 'border-transparent hover:border-neutral-300'}`}
                  >
                    知识点
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'code' ? 'border-primary text-primary' : 'border-transparent hover:border-neutral-300'}`}
                  >
                    练习
                  </button>
                  <button
                    onClick={() => setActiveTab('exam')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'exam' ? 'border-primary text-primary' : 'border-transparent hover:border-neutral-300'}`}
                  >
                    考试
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'knowledge' && (
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-primary">核心知识点</h3>
                      <ul className="space-y-2">
                        {currentLesson.knowledge_points?.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-primary text-sm font-medium">{index + 1}</span>
                            </div>
                            <span className="text-neutral-800">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="prose max-w-none">
                      <p className="text-neutral-700">{currentLesson.content}</p>
                    </div>
                    {currentLesson.code_example && (
                      <div className="bg-neutral-900 rounded-lg p-4">
                        <pre className="text-accent font-mono text-sm">{currentLesson.code_example}</pre>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{currentLesson.exercise.question}</h3>
                    {currentLesson.exercise.type === 'multiple_choice' && 'options' in currentLesson.exercise && (
                      <div className="space-y-3">
                        {currentLesson.exercise.options.map((option, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="radio"
                              id={`option-${index}`}
                              name="exercise"
                              value={option}
                              className="mr-3"
                            />
                            <label htmlFor={`option-${index}`} className="text-neutral-700">{option}</label>
                          </div>
                        ))}
                        <div className="mt-6">
                          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                            提交答案
                          </button>
                        </div>
                      </div>
                    )}
                    {currentLesson.exercise.type === 'coding' && (
                      <div className="space-y-4">
                        <div className="bg-neutral-900 rounded-lg p-4">
                          <textarea
                            className="w-full h-48 bg-neutral-900 text-accent font-mono resize-none focus:outline-none"
                            placeholder="在此输入代码..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={handleRunCode}
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                          >
                            运行代码
                          </button>
                        </div>
                        {output && (
                          <div className="bg-neutral-100 rounded-lg p-4">
                            <pre className="font-mono text-sm text-neutral-800">{output}</pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'exam' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">章节测试</h3>
                    {currentLesson.exam?.questions.map((question, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200">
                        <p className="font-medium mb-3 text-neutral-800">{index + 1}. {question.question}</p>
                        {question.type === 'multiple_choice' && 'options' in question && (
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => (
                              <div key={optIndex} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`exam-option-${index}-${optIndex}`}
                                  name={`exam-question-${index}`}
                                  value={option}
                                  className="mr-3"
                                  onChange={() => setExamAnswers({...examAnswers, [`question-${index}`]: option})}
                                />
                                <label htmlFor={`exam-option-${index}-${optIndex}`} className="text-neutral-700">{option}</label>
                              </div>
                            ))}
                          </div>
                        )}
                        {question.type === 'coding' && (
                          <div className="mt-3">
                            <div className="bg-neutral-900 rounded-lg p-4">
                              <textarea
                                className="w-full h-48 bg-neutral-900 text-accent font-mono resize-none focus:outline-none"
                                placeholder="在此输入代码..."
                              ></textarea>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="mt-6 flex justify-end">
                      <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                        提交考试
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Lesson Actions */}
              <div className="p-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-4">
                  <button
                    onClick={handlePrevLesson}
                    className="flex items-center px-4 py-2 bg-neutral-200 rounded-md hover:bg-neutral-300 transition-colors text-neutral-700"
                  >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    上一课
                  </button>
                  <button
                    onClick={handleNextLesson}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    下一课
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
                <button
                  onClick={handleMarkComplete}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${completed ? 'bg-accent text-white' : 'bg-secondary text-white hover:bg-secondary/90'}`}
                >
                  {completed ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      已完成
                    </>
                  ) : (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      标记为完成
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;