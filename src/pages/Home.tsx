import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart3, Code, Award, ChevronRight } from 'lucide-react';
import { useUserStore, useCourseStore, useProgressStore } from '../store';

const Home = () => {
  const { user, getUser } = useUserStore();
  const { courses, fetchCourses } = useCourseStore();
  const { progress, fetchProgress } = useProgressStore();

  useEffect(() => {
    getUser();
    fetchCourses();
    if (user) {
      fetchProgress();
    }
  }, [user]);

  // 模拟课程数据
  const mockCourses = [
    {
      id: '1',
      title: 'Python基础入门',
      description: 'Python编程语言的基础知识，包括语法、数据类型、控制流等',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20course%20cover%20with%20code%20and%20computer&image_size=landscape_16_9',
      difficulty: 'beginner',
      category: '编程基础',
      duration: 10
    },
    {
      id: '2',
      title: '数据分析入门',
      description: '使用Python进行数据分析的基本方法，包括NumPy、Pandas等库的使用',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20course%20cover%20with%20charts%20and%20data&image_size=landscape_16_9',
      difficulty: 'beginner',
      category: '数据分析',
      duration: 15
    },
    {
      id: '3',
      title: '商务数据分析',
      description: '针对商务场景的数据分析方法，包括市场分析、客户分析等',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%20with%20business%20charts&image_size=landscape_16_9',
      difficulty: 'intermediate',
      category: '商务分析',
      duration: 20
    },
    {
      id: '4',
      title: '数据可视化',
      description: '使用Python进行数据可视化，包括Matplotlib、Seaborn等库的使用',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%20with%20colorful%20charts&image_size=landscape_16_9',
      difficulty: 'intermediate',
      category: '数据可视化',
      duration: 12
    }
  ];

  // 课程分类
  const categories = [
    { name: '编程基础', icon: <Code className="h-6 w-6" />, color: 'bg-blue-500' },
    { name: '数据分析', icon: <BarChart3 className="h-6 w-6" />, color: 'bg-green-500' },
    { name: '数据分析与应用', icon: <BookOpen className="h-6 w-6" />, color: 'bg-purple-500' },
    { name: '商务分析', icon: <Award className="h-6 w-6" />, color: 'bg-yellow-500' },
    { name: '数据可视化', icon: <BarChart3 className="h-6 w-6" />, color: 'bg-orange-500' }
  ];

  // 计算学习进度
  const completedLessons = progress.filter(p => p.completed).length;
  const totalLessons = 20; // 模拟总课程数
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              掌握Python数据分析，开启商务智能之旅
            </h1>
            <p className="text-xl mb-8">
              专为商务数据分析与应用专业学生设计的在线教育平台，提供完整的课程体系、互动式学习模块和成就激励系统
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors text-center font-medium">
                浏览课程
              </Link>
              <Link to="/register" className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-100 transition-colors text-center font-medium">
                免费注册
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to="/courses" 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">探索相关课程</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">推荐课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(courses.length > 0 ? courses : mockCourses).map((course) => (
              <Link 
                key={course.id} 
                to={`/course/${course.id}`} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.cover_image_url} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {course.difficulty === 'beginner' ? '初级' : course.difficulty === 'intermediate' ? '中级' : '高级'}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 text-sm">{course.duration} 小时</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{course.category}</span>
                    <ChevronRight className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* User Progress */}
      {user && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">我的学习进度</h2>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">已完成课程</span>
                  <span>{completedLessons}/{totalLessons}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">{completedLessons}</div>
                  <div className="text-gray-600">已完成课程</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">{progressPercentage}%</div>
                  <div className="text-gray-600">总体进度</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">10</div>
                  <div className="text-gray-600">学习小时</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">3</div>
                  <div className="text-gray-600">获得徽章</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;