import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Exams = () => {
  // 模拟考试数据
  const exams = [
    {
      id: '1',
      title: 'Python基础测试',
      description: '测试Python基础语法和编程能力',
      difficulty: '初级',
      duration: '30分钟',
      questions: 20,
      passing_score: 60,
      category: '编程基础',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20basic%20exam%20icon&image_size=square',
      taken: false,
      score: null
    },
    {
      id: '2',
      title: '数据分析能力测评',
      description: '测试数据分析和处理能力',
      difficulty: '中级',
      duration: '45分钟',
      questions: 15,
      passing_score: 65,
      category: '数据分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20exam%20icon&image_size=square',
      taken: false,
      score: null
    },
    {
      id: '3',
      title: '商务数据分析考试',
      description: '测试商务数据分析和决策能力',
      difficulty: '中级',
      duration: '60分钟',
      questions: 25,
      passing_score: 70,
      category: '商务分析',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20exam%20icon&image_size=square',
      taken: false,
      score: null
    },
    {
      id: '4',
      title: '机器学习基础测试',
      description: '测试机器学习基础知识和应用能力',
      difficulty: '高级',
      duration: '90分钟',
      questions: 30,
      passing_score: 75,
      category: '机器学习',
      icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20exam%20icon&image_size=square',
      taken: false,
      score: null
    }
  ];

  const [filter, setFilter] = useState('全部');
  const [difficulty, setDifficulty] = useState('全部');

  const filteredExams = exams.filter(exam => {
    const categoryMatch = filter === '全部' || exam.category === filter;
    const difficultyMatch = difficulty === '全部' || exam.difficulty === difficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">考试测评</h1>

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

        {/* 考试列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div key={exam.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={exam.icon} 
                  alt={exam.title} 
                  className="h-32 w-32 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold">{exam.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm ${exam.difficulty === '初级' ? 'bg-green-100 text-green-800' : exam.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {exam.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exam.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>时长: {exam.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>题目数量: {exam.questions} 题</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="h-4 w-4 mr-1" />
                    <span>及格分数: {exam.passing_score}%</span>
                  </div>
                </div>
                {exam.taken ? (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">上次得分</span>
                      <span className={`font-bold ${exam.score >= exam.passing_score ? 'text-green-600' : 'text-red-600'}`}>
                        {exam.score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${exam.score >= exam.passing_score ? 'bg-green-600' : 'bg-red-600'}`}
                        style={{ width: `${exam.score}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 text-sm text-gray-600">
                    未参加考试
                  </div>
                )}
                <Link 
                  to={`/exam/${exam.id}`}
                  className="w-full block text-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  {exam.taken ? '重新考试' : '开始考试'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 考试详情和答题页面可以在单独的页面中实现 */}
      </div>
    </div>
  );
};

export default Exams;
