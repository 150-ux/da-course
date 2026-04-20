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