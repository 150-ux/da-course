import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Training = () => {
  // 模拟训练数据
  const trainings = [
    {
      id: '1',
      title: 'Python编程训练营',
      description: '为期一周的Python编程密集训练',
      difficulty: '初级',
      duration: '5天',
      hours_per_day: 2,
      category: '编程基础',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20bootcamp%20icon&image_size=square',
      progress: 0
    },
    {
      id: '2',
      title: '数据分析实战训练',
      description: '使用真实数据集进行数据分析训练',
      difficulty: '中级',
      duration: '7天',
      hours_per_day: 3,
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20bootcamp%20icon&image_size=square',
      progress: 0
    },
    {
      id: '3',
      title: '商务智能训练',
      description: '学习商务数据分析和可视化技能',
      difficulty: '中级',
      duration: '10天',
      hours_per_day: 2.5,
      category: '商务分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20intelligence%20training%20icon&image_size=square',
      progress: 0
    },
    {
      id: '4',
      title: '机器学习项目训练',
      description: '从数据到模型的完整机器学习项目训练',
      difficulty: '高级',
      duration: '14天',
      hours_per_day: 4,
      category: '机器学习',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20training%20icon&image_size=square',
      progress: 0
    }
  ];

  const [filter, setFilter] = useState('全部');
  const [difficulty, setDifficulty] = useState('全部');

  const filteredTrainings = trainings.filter(training => {
    const categoryMatch = filter === '全部' || training.category === filter;
    const difficultyMatch = difficulty === '全部' || training.difficulty === difficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">训练项目</h1>

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
                <option value="商务分析">商务分析</option>
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

        {/* 训练列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainings.map((training) => (
            <div key={training.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={training.icon} 
                  alt={training.title} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold">{training.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm ${training.difficulty === '初级' ? 'bg-green-100 text-green-800' : training.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {training.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{training.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>训练周期: {training.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>每天时长: {training.hours_per_day} 小时</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>总时长: {training.hours_per_day * parseInt(training.duration)} 小时</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${training.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">进度: {training.progress}%</span>
                  <Link 
                    to={`/training/${training.id}`}
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    开始训练
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 训练详情和进度页面可以在单独的页面中实现 */}
      </div>
    </div>
  );
};

export default Training;
