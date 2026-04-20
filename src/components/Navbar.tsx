import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Home, BookOpen, Award, UserCircle, Code, FileText, PlayCircle, FileCheck, Zap } from 'lucide-react';
import { useUserStore } from '../store';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useUserStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <Link to="/" className="text-xl font-bold">Python数据分析教育平台</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Home className="h-5 w-5" />
              <span>首页</span>
            </Link>
            <Link to="/courses" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>课程中心</span>
            </Link>
            <Link to="/syllabus" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Code className="h-5 w-5" />
              <span>学习大纲</span>
            </Link>
            <Link to="/document" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <FileText className="h-5 w-5" />
              <span>项目文档</span>
            </Link>
            <Link to="/practice" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <PlayCircle className="h-5 w-5" />
              <span>练习项目</span>
            </Link>
            <Link to="/exams" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <FileCheck className="h-5 w-5" />
              <span>考试测评</span>
            </Link>
            <Link to="/training" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
              <Zap className="h-5 w-5" />
              <span>训练项目</span>
            </Link>
            {user && (
              <>
                <Link to="/achievements" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                  <Award className="h-5 w-5" />
                  <span>成就系统</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                  <UserCircle className="h-5 w-5" />
                  <span>个人中心</span>
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 hover:text-orange-400 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>退出</span>
                </button>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
                  登录
                </Link>
                <Link to="/register" className="px-4 py-2 bg-white text-blue-900 rounded-md hover:bg-gray-100 transition-colors">
                  注册
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-orange-400 transition-colors">
              首页
            </Link>
            <Link to="/courses" className="block py-2 hover:text-orange-400 transition-colors">
                  课程中心
                </Link>
                <Link to="/syllabus" className="block py-2 hover:text-orange-400 transition-colors">
                  学习大纲
                </Link>
                <Link to="/document" className="block py-2 hover:text-orange-400 transition-colors">
                  项目文档
                </Link>
                <Link to="/practice" className="block py-2 hover:text-orange-400 transition-colors">
                  练习项目
                </Link>
                <Link to="/exams" className="block py-2 hover:text-orange-400 transition-colors">
                  考试测评
                </Link>
                <Link to="/training" className="block py-2 hover:text-orange-400 transition-colors">
                  训练项目
                </Link>
            {user && (
              <>
                <Link to="/achievements" className="block py-2 hover:text-orange-400 transition-colors">
                  成就系统
                </Link>
                <Link to="/profile" className="block py-2 hover:text-orange-400 transition-colors">
                  个人中心
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left py-2 hover:text-orange-400 transition-colors"
                >
                  退出
                </button>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="block py-2 hover:text-orange-400 transition-colors">
                  登录
                </Link>
                <Link to="/register" className="block py-2 hover:text-orange-400 transition-colors">
                  注册
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;