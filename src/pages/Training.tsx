import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Training = () => {
  // 10个训练项目数据
  const trainings = [
    {
      id: '1',
      title: 'Python编程基础训练',
      description: '为期7天的Python编程密集训练，从基础语法到函数编程',
      difficulty: '初级',
      duration: '7天',
      hours_per_day: 2,
      category: '编程基础',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basic%20training%20icon&image_size=square',
      progress: 0
    },
    {
      id: '2',
      title: '数据分析实战项目',
      description: '使用真实数据集进行数据分析，包括数据清洗、转换和可视化',
      difficulty: '中级',
      duration: '10天',
      hours_per_day: 3,
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20project%20icon&image_size=square',
      progress: 0
    },
    {
      id: '3',
      title: '商务智能分析训练',
      description: '学习商务数据分析和可视化技能，掌握商业决策支持工具',
      difficulty: '中级',
      duration: '12天',
      hours_per_day: 2.5,
      category: '商务分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20intelligence%20analysis%20icon&image_size=square',
      progress: 0
    },
    {
      id: '4',
      title: '机器学习入门项目',
      description: '从数据到模型的完整机器学习项目训练，包括分类和回归任务',
      difficulty: '高级',
      duration: '14天',
      hours_per_day: 4,
      category: '机器学习',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20beginner%20project%20icon&image_size=square',
      progress: 0
    },
    {
      id: '5',
      title: '数据可视化高级训练',
      description: '掌握Matplotlib、Seaborn等库，创建专业的数据可视化图表',
      difficulty: '中级',
      duration: '8天',
      hours_per_day: 3,
      category: '数据可视化',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20advanced%20training%20icon&image_size=square',
      progress: 0
    },
    {
      id: '6',
      title: 'Python自动化办公项目',
      description: '使用Python自动化处理Excel、Word等办公文档，提高工作效率',
      difficulty: '中级',
      duration: '9天',
      hours_per_day: 2.5,
      category: '编程基础',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20automation%20office%20project%20icon&image_size=square',
      progress: 0
    },
    {
      id: '7',
      title: '时间序列分析训练',
      description: '学习时间序列数据的分析方法，预测未来趋势',
      difficulty: '高级',
      duration: '10天',
      hours_per_day: 3.5,
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Time%20series%20analysis%20training%20icon&image_size=square',
      progress: 0
    },
    {
      id: '8',
      title: '自然语言处理项目',
      description: '使用Python进行文本分析、情感分析等自然语言处理任务',
      difficulty: '高级',
      duration: '12天',
      hours_per_day: 4,
      category: '机器学习',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Natural%20language%20processing%20project%20icon&image_size=square',
      progress: 0
    },
    {
      id: '9',
      title: '数据挖掘实战训练',
      description: '学习数据挖掘技术，从海量数据中发现有价值的信息',
      difficulty: '高级',
      duration: '14天',
      hours_per_day: 3.5,
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20mining%20practical%20training%20icon&image_size=square',
      progress: 0
    },
    {
      id: '10',
      title: '综合数据分析项目',
      description: '整合所学技能，完成一个完整的数据分析项目，包括从数据获取到报告生成',
      difficulty: '高级',
      duration: '15天',
      hours_per_day: 4,
      category: '综合',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Comprehensive%20data%20analysis%20project%20icon&image_size=square',
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
                <option value="数据可视化">数据可视化</option>
                <option value="综合">综合</option>
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
