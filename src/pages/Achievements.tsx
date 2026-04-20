import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, Star, Users, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { useUserStore, useAchievementStore, useProgressStore } from '../store';

const Achievements = () => {
  const { user, getUser } = useUserStore();
  const { achievements, fetchAchievements } = useAchievementStore();
  const { progress, fetchProgress } = useProgressStore();

  useEffect(() => {
    getUser();
    if (user) {
      fetchAchievements();
      fetchProgress();
    }
  }, [user]);

  // 模拟成就数据
  const mockAchievements = [
    {
      id: '1',
      type: 'course_completion',
      name: 'Python新手',
      description: '完成Python基础入门课程',
      earned_at: '2026-04-01T10:00:00Z'
    },
    {
      id: '2',
      type: 'learning_hours',
      name: '学习达人',
      description: '累计学习时长超过10小时',
      earned_at: '2026-04-05T15:30:00Z'
    },
    {
      id: '3',
      type: 'quiz_score',
      name: '测试能手',
      description: '测评成绩平均超过80分',
      earned_at: '2026-04-08T09:15:00Z'
    }
  ];

  // 模拟徽章数据
  const mockBadges = [
    {
      id: '1',
      name: 'Python新手',
      description: '完成Python基础入门课程',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20beginner%20badge%20icon&image_size=square',
      earned: true
    },
    {
      id: '2',
      name: '数据分析入门',
      description: '完成数据分析入门课程',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20beginner%20badge%20icon&image_size=square',
      earned: true
    },
    {
      id: '3',
      name: '商务分析师',
      description: '完成商务数据分析课程',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20analyst%20badge%20icon&image_size=square',
      earned: false
    },
    {
      id: '4',
      name: '数据可视化专家',
      description: '完成数据可视化课程',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20expert%20badge%20icon&image_size=square',
      earned: false
    },
    {
      id: '5',
      name: '机器学习爱好者',
      description: '完成机器学习基础课程',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20enthusiast%20badge%20icon&image_size=square',
      earned: false
    },
    {
      id: '6',
      name: '学习达人',
      description: '累计学习时长超过100小时',
      icon_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Learning%20master%20badge%20icon&image_size=square',
      earned: false
    }
  ];

  // 模拟排行榜数据
  const mockLeaderboard = [
    {
      rank: 1,
      name: '张三',
      score: 1200,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20avatar%201&image_size=square'
    },
    {
      rank: 2,
      name: '李四',
      score: 980,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20avatar%202&image_size=square'
    },
    {
      rank: 3,
      name: '王五',
      score: 850,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20avatar%203&image_size=square'
    },
    {
      rank: 4,
      name: '赵六',
      score: 720,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20avatar%204&image_size=square'
    },
    {
      rank: 5,
      name: '孙七',
      score: 650,
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20avatar%205&image_size=square'
    }
  ];

  // 计算学习统计数据
  const completedLessons = progress.filter(p => p.completed).length;
  const totalLessons = 20; // 模拟总课程数
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
  const learningHours = 15; // 模拟学习小时数
  const earnedBadges = mockBadges.filter(b => b.earned).length;
  const totalBadges = mockBadges.length;

  const userAchievements = achievements.length > 0 ? achievements : mockAchievements;

  // 不需要登录也可以访问成就系统
  // 使用模拟数据展示

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">成就系统</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-900" />
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">{completedLessons}/{totalLessons}</div>
            <div className="text-gray-600">已完成课程</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-900" />
            </div>
            <div className="text-3xl font-bold text-green-900 mb-2">{learningHours}</div>
            <div className="text-gray-600">学习小时</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-900" />
            </div>
            <div className="text-3xl font-bold text-yellow-900 mb-2">{earnedBadges}/{totalBadges}</div>
            <div className="text-gray-600">获得徽章</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-purple-900" />
            </div>
            <div className="text-3xl font-bold text-purple-900 mb-2">{userAchievements.length}</div>
            <div className="text-gray-600">获得成就</div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">学习进度</h2>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium">总体进度</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium mb-2">课程完成</h3>
              <div className="text-lg font-semibold">{completedLessons}/{totalLessons} 课程</div>
            </div>
            <div>
              <h3 className="font-medium mb-2">学习时长</h3>
              <div className="text-lg font-semibold">{learningHours} 小时</div>
            </div>
            <div>
              <h3 className="font-medium mb-2">连续学习</h3>
              <div className="text-lg font-semibold">7 天</div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">我的徽章</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {mockBadges.map((badge) => (
              <div 
                key={badge.id}
                className={`rounded-lg p-4 text-center transition-all ${badge.earned ? 'bg-white shadow-md hover:shadow-lg' : 'bg-gray-100 opacity-50'}`}
              >
                <div className="w-16 h-16 mx-auto mb-3">
                  <img 
                    src={badge.icon_url} 
                    alt={badge.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium mb-1">{badge.name}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">我的成就</h2>
          <div className="space-y-4">
            {userAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center p-4 rounded-md hover:bg-gray-50 transition-colors">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(achievement.earned_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">排行榜</h2>
          <div className="space-y-3">
            {mockLeaderboard.map((user) => (
              <div key={user.rank} className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold ${user.rank === 1 ? 'bg-yellow-400 text-white' : user.rank === 2 ? 'bg-gray-300 text-white' : user.rank === 3 ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {user.rank}
                </div>
                <div className="w-10 h-10 rounded-full mr-4">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{user.name}</h3>
                </div>
                <div className="font-semibold">{user.score} 分</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="#" className="inline-flex items-center text-blue-900 hover:underline">
              查看完整排行榜
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;