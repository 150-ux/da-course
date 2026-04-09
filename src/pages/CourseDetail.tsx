import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Play, Check, ChevronRight, Clock, Award, Users } from 'lucide-react';
import { useCourseStore, useProgressStore, useUserStore } from '../store';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentCourse, fetchCourseById, isLoading } = useCourseStore();
  const { progress, fetchProgress, updateProgress } = useProgressStore();
  const { user, getUser } = useUserStore();
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    getUser();
    if (id) {
      fetchCourseById(id);
    }
    if (user) {
      fetchProgress();
    }
  }, [id, user]);

  // 模拟课程数据
  const mockCourse = {
    id: id || '1',
    title: 'Python基础入门',
    description: 'Python编程语言的基础知识，包括语法、数据类型、控制流等。本课程适合零基础的学生，通过理论学习和实践练习，掌握Python编程的核心概念和基本技能。',
    cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20course%20cover%20with%20code%20and%20computer&image_size=landscape_16_9',
    difficulty: 'beginner',
    category: '编程基础',
    duration: 10,
    chapters: [
      {
        id: '1',
        title: 'Python简介',
        lessons: [
          {
            id: '1',
            title: '什么是Python',
            video_url: 'https://example.com/video1.mp4',
            content: 'Python是一种高级编程语言，以其简洁的语法和强大的功能而闻名。'
          },
          {
            id: '2',
            title: 'Python的安装',
            video_url: 'https://example.com/video2.mp4',
            content: '学习如何在不同操作系统上安装Python。'
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
            content: '学习Python的基本数据类型和变量声明。'
          },
          {
            id: '4',
            title: '控制流',
            video_url: 'https://example.com/video4.mp4',
            content: '学习if语句、循环等控制流结构。'
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
            video_url: 'https://example.com/video5.mp4',
            content: '学习如何定义和调用函数。'
          },
          {
            id: '6',
            title: '函数参数',
            video_url: 'https://example.com/video6.mp4',
            content: '学习函数的参数类型和使用方法。'
          }
        ]
      }
    ]
  };

  const course = currentCourse || mockCourse;

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setEnrolled(true);
  };

  const handleStartLearning = (chapterId: string, lessonId: string) => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate(`/learn/${course.id}/${chapterId}?lessonId=${lessonId}`);
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.some(p => p.lesson_id === lessonId && p.completed);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <>
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={course.cover_image_url} 
                    alt={course.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '高级'}
                    </span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="text-gray-600">{course.category}</span>
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-900 mr-2" />
                      <span>{course.duration} 小时</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-900 mr-2" />
                      <span>{course.chapters?.length || 0} 章节</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-900 mr-2" />
                      <span>120 名学生</span>
                    </div>
                  </div>
                  {!enrolled ? (
                    <button 
                      onClick={handleEnroll}
                      className="px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors font-medium"
                    >
                      立即报名
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleStartLearning(course.chapters[0].id, course.chapters[0].lessons[0].id)}
                      className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-medium"
                    >
                      开始学习
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Course Chapters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">课程章节</h2>
              {course.chapters?.map((chapter, chapterIndex) => (
                <div key={chapter.id} className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">第 {chapterIndex + 1} 章：{chapter.title}</h3>
                  <div className="space-y-3">
                    {chapter.lessons?.map((lesson, lessonIndex) => (
                      <div 
                        key={lesson.id}
                        className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <div className="mr-4">
                          {isLessonCompleted(lesson.id) ? (
                            <Check className="h-6 w-6 text-green-500" />
                          ) : (
                            <Play className="h-6 w-6 text-blue-900" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{lessonIndex + 1}. {lesson.title}</h4>
                        </div>
                        <button 
                          onClick={() => handleStartLearning(chapter.id, lesson.id)}
                          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors text-sm"
                        >
                          学习
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">课程特色</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <BookOpen className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">完整的课程体系</h3>
                    <p className="text-gray-600">从基础到进阶，系统学习Python数据分析技能</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Play className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">互动式学习</h3>
                    <p className="text-gray-600">视频讲解结合代码实践，提高学习效果</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">成就激励系统</h3>
                    <p className="text-gray-600">通过完成课程和测评获得徽章和成就</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">专业支持</h3>
                    <p className="text-gray-600">商务数据分析与应用专业的教学团队支持</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;