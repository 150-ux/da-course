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
  const [activeTab, setActiveTab] = useState('video');
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
            video_url: 'https://example.com/video1.mp4',
            content: 'Python是一种高级编程语言，以其简洁的语法和强大的功能而闻名。Python由Guido van Rossum于1989年创建，第一版发布于1991年。Python的设计哲学强调代码的可读性和简洁性，使用空格缩进代替大括号来划分代码块。',
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
            }
          },
          {
            id: '2',
            title: 'Python的安装',
            video_url: 'https://example.com/video2.mp4',
            content: '学习如何在不同操作系统上安装Python。Windows用户可以从Python官网下载安装程序，Mac用户可以使用Homebrew或从官网下载，Linux用户可以使用包管理器安装。',
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
            video_url: 'https://example.com/video3.mp4',
            content: '学习Python的基本数据类型和变量声明。Python支持多种数据类型，包括整数、浮点数、字符串、布尔值等。',
            code_example: '# 变量和数据类型\nname = "John"\nage = 25\nheight = 1.75\nis_student = True\nprint(name, age, height, is_student)',
            exercise: {
              type: 'coding',
              question: '创建一个变量存储你的名字，然后打印出来',
              hint: '使用赋值语句和print函数'
            }
          },
          {
            id: '4',
            title: '控制流',
            video_url: 'https://example.com/video4.mp4',
            content: '学习if语句、循环等控制流结构。Python的控制流语句包括if-elif-else、for循环和while循环。',
            code_example: '# 控制流\nif age >= 18:\n    print("成年人")\nelse:\n    print("未成年人")\n\n# 循环\nfor i in range(5):\n    print(i)',
            exercise: {
              type: 'coding',
              question: '使用for循环打印1到10的数字',
              hint: '使用range函数'
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
    if (user) {
      await updateProgress(currentLesson.id, true);
      setCompleted(true);
    }
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <a href="/courses" className="text-blue-900 hover:underline">课程中心</a>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <a href={`/course/${courseId}`} className="text-blue-900 hover:underline">{mockCourse.title}</a>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-600">{currentChapter.title}</span>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900 font-medium">{currentLesson.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-4">课程目录</h3>
              <div className="space-y-4">
                {mockCourse.chapters.map((chapter) => (
                  <div key={chapter.id}>
                    <h4 className="font-medium text-blue-900 mb-2">{chapter.title}</h4>
                    <div className="pl-4 space-y-2">
                      {chapter.lessons.map((lesson) => (
                        <a
                          key={lesson.id}
                          href={`/learn/${courseId}/${chapter.id}?lessonId=${lesson.id}`}
                          className={`block py-2 px-3 rounded-md transition-colors ${lesson.id === lessonId ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100'}`}
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
                <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
                <p className="text-gray-600">{currentChapter.title}</p>
              </div>

              {/* Tabs */}
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'video' ? 'border-blue-900 text-blue-900' : 'border-transparent hover:border-gray-300'}`}
                  >
                    视频学习
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'code' ? 'border-blue-900 text-blue-900' : 'border-transparent hover:border-gray-300'}`}
                  >
                    代码实践
                  </button>
                  <button
                    onClick={() => setActiveTab('exercise')}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors ${activeTab === 'exercise' ? 'border-blue-900 text-blue-900' : 'border-transparent hover:border-gray-300'}`}
                  >
                    交互式练习
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'video' && (
                  <div>
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-6">
                      <Play className="h-16 w-16 text-white" />
                      <span className="text-white ml-2">视频播放区域</span>
                    </div>
                    <div className="prose max-w-none">
                      <p>{currentLesson.content}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <textarea
                        className="w-full h-64 bg-gray-900 text-green-400 font-mono resize-none focus:outline-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleRunCode}
                        className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                      >
                        运行代码
                      </button>
                    </div>
                    {output && (
                      <div className="bg-gray-100 rounded-lg p-4">
                        <pre className="font-mono text-sm">{output}</pre>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'exercise' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{currentLesson.exercise.question}</h3>
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
                            <label htmlFor={`option-${index}`}>{option}</label>
                          </div>
                        ))}
                        <div className="mt-6">
                          <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                            提交答案
                          </button>
                        </div>
                      </div>
                    )}
                    {currentLesson.exercise.type === 'coding' && (
                      <div className="space-y-4">
                        <div className="bg-gray-900 rounded-lg p-4">
                          <textarea
                            className="w-full h-48 bg-gray-900 text-green-400 font-mono resize-none focus:outline-none"
                            placeholder="在此输入代码..."
                          ></textarea>
                        </div>
                        <div className="flex justify-end">
                          <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                            提交代码
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Lesson Actions */}
              <div className="p-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-4">
                  <button
                    onClick={handlePrevLesson}
                    className="flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    上一课
                  </button>
                  <button
                    onClick={handleNextLesson}
                    className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    下一课
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
                <button
                  onClick={handleMarkComplete}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${completed ? 'bg-green-500 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
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