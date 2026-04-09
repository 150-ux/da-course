import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Search, Filter } from 'lucide-react';
import { useCourseStore } from '../store';

const Courses = () => {
  const { courses, fetchCourses, isLoading } = useCourseStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  useEffect(() => {
    fetchCourses();
  }, []);

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
    },
    {
      id: '5',
      title: '机器学习基础',
      description: '机器学习的基本概念和算法，包括监督学习、无监督学习等',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20course%20cover%20with%20AI%20and%20data&image_size=landscape_16_9',
      difficulty: 'advanced',
      category: '机器学习',
      duration: 25
    },
    {
      id: '6',
      title: 'Python高级编程',
      description: 'Python高级特性，包括装饰器、生成器、上下文管理器等',
      cover_image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20Python%20programming%20course%20cover&image_size=landscape_16_9',
      difficulty: 'advanced',
      category: '编程基础',
      duration: 18
    }
  ];

  const allCourses = courses.length > 0 ? courses : mockCourses;

  // 筛选课程
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || course.category === category;
    const matchesDifficulty = difficulty === 'all' || course.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // 课程分类
  const categories = ['all', '编程基础', '数据分析', '商务分析', '数据可视化', '机器学习'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">课程中心</h1>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索课程..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? '全部' : cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">难度</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="all">全部</option>
                  <option value="beginner">初级</option>
                  <option value="intermediate">中级</option>
                  <option value="advanced">高级</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
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
        )}

        {/* No Results */}
        {!isLoading && filteredCourses.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">未找到课程</h3>
            <p className="text-gray-600">尝试调整搜索条件或筛选选项</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;