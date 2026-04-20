import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, BookOpen, Award, LogOut, Edit, ChevronRight } from 'lucide-react';
import { useUserStore, useProgressStore, useAchievementStore } from '../store';

const Profile = () => {
  const { user, signOut, getUser } = useUserStore();
  const { progress, fetchProgress } = useProgressStore();
  const { achievements, fetchAchievements } = useAchievementStore();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    if (user) {
      setName(user.user_metadata?.name || '');
      setEmail(user.email || '');
      fetchProgress();
      fetchAchievements();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSave = () => {
    // 模拟保存用户信息
    setEditMode(false);
  };

  // 模拟学习历史数据
  const mockLearningHistory = [
    {
      id: '1',
      course_title: 'Python基础入门',
      completed_at: '2026-04-01T10:00:00Z',
      progress: 100
    },
    {
      id: '2',
      course_title: '数据分析入门',
      completed_at: '2026-04-05T15:30:00Z',
      progress: 100
    },
    {
      id: '3',
      course_title: '商务数据分析',
      completed_at: null,
      progress: 60
    }
  ];

  // 不需要登录也可以访问个人中心
  // 使用模拟数据展示
  const isLoggedIn = !!user;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">个人中心</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-blue-900" />
                </div>
                <h2 className="text-xl font-semibold">{user?.user_metadata?.name || '访客用户'}</h2>
                <p className="text-gray-600">{user?.email || 'guest@example.com'}</p>
              </div>
              <div className="space-y-2">
                <Link to="/profile" className="flex items-center p-3 rounded-md bg-blue-50 text-blue-900">
                  <User className="h-5 w-5 mr-3" />
                  <span>个人信息</span>
                </Link>
                <Link to="/achievements" className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Award className="h-5 w-5 mr-3" />
                  <span>我的成就</span>
                </Link>
                <Link to="/courses" className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors">
                  <BookOpen className="h-5 w-5 mr-3" />
                  <span>我的课程</span>
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors text-red-600"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>退出登录</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">个人信息</h2>
                {!editMode && (
                  <button 
                    onClick={() => setEditMode(true)}
                    className="flex items-center text-blue-900 hover:underline"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    编辑
                  </button>
                )}
              </div>
              {editMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      保存
                    </button>
                    <button 
                      onClick={() => setEditMode(false)}
                      className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-1/3 font-medium">姓名</div>
                    <div className="w-2/3">{user?.user_metadata?.name || '未设置'}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium">邮箱</div>
                    <div className="w-2/3">{user?.email || '未设置'}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium">注册时间</div>
                    <div className="w-2/3">{user?.created_at ? new Date(user.created_at).toLocaleDateString() : '未设置'}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 font-medium">用户类型</div>
                    <div className="w-2/3">{user ? '免费用户' : '访客'}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Learning History */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">学习历史</h2>
              <div className="space-y-4">
                {mockLearningHistory.map((course) => (
                  <div key={course.id} className="flex items-center p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-blue-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{course.course_title}</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                    </div>
                    {course.completed_at ? (
                      <span className="text-sm text-gray-500">{new Date(course.completed_at).toLocaleDateString()}</span>
                    ) : (
                      <Link to="/courses" className="text-blue-900 hover:underline">
                        继续学习
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/courses" className="inline-flex items-center text-blue-900 hover:underline">
                  查看全部课程
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">最近成就</h2>
              <div className="space-y-4">
                {achievements.slice(0, 3).map((achievement) => (
                  <div key={achievement.id} className="flex items-center p-4 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="bg-yellow-100 rounded-full p-3 mr-4">
                      <Award className="h-6 w-6 text-yellow-900" />
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
              <div className="mt-6 text-center">
                <Link to="/achievements" className="inline-flex items-center text-blue-900 hover:underline">
                  查看全部成就
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;