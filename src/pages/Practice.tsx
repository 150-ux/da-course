import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, FileText, CheckCircle, Clock, Award, ChevronRight } from 'lucide-react';

const Practice = () => {
  // 模拟练习项目数据
  const practiceProjects = [
    {
      id: '1',
      title: 'Python基础练习',
      description: '通过实际编程练习巩固Python基础知识',
      difficulty: '初级',
      duration: '30分钟',
      category: '编程基础',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20basic%20practice%20icon&image_size=square',
      progress: 0
    },
    {
      id: '2',
      title: '数据分析实战',
      description: '使用pandas和NumPy进行实际数据分析',
      difficulty: '中级',
      duration: '1小时',
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20practice%20icon&image_size=square',
      progress: 0
    },
    {
      id: '3',
      title: '商务数据可视化',
      description: '使用Matplotlib和Seaborn创建商务数据可视化',
      difficulty: '中级',
      duration: '45分钟',
      category: '数据可视化',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20visualization%20icon&image_size=square',
      progress: 0
    },
    {
      id: '4',
      title: '机器学习入门练习',
      description: '使用scikit-learn构建简单的机器学习模型',
      difficulty: '高级',
      duration: '1.5小时',
      category: '机器学习',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20practice%20icon&image_size=square',
      progress: 0
    }
  ];

  const [filter, setFilter] = useState('全部');
  const [difficulty, setDifficulty] = useState('全部');

  const filteredProjects = practiceProjects.filter(project => {
    const categoryMatch = filter === '全部' || project.category === filter;
    const difficultyMatch = difficulty === '全部' || project.difficulty === difficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">练习项目</h1>

        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="全部">全部</option>
                <option value="编程基础">编程基础</option>
                <option value="数据分析">数据分析</option>
                <option value="数据可视化">数据可视化</option>
                <option value="机器学习">机器学习</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">难度</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="全部">全部</option>
                <option value="初级">初级</option>
                <option value="中级">中级</option>
                <option value="高级">高级</option>
              </select>
            </div>
          </div>
        </div>

        {/* 练习项目列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.icon} 
                  alt={project.title} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm ${project.difficulty === '初级' ? 'bg-green-100 text-green-800' : project.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{project.duration}</span>
                  <span className="mx-2">•</span>
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{project.category}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">进度: {project.progress}%</span>
                  <Link 
                    to={`/practice/${project.id}`}
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    开始练习
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 练习项目详情模态框可以在单独的页面中实现 */}
      </div>
    </div>
  );
};

export default Practice;
