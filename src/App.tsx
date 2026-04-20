import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Learn from './pages/Learn';
import Achievements from './pages/Achievements';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Syllabus from './pages/Syllabus';
import Document from './pages/Document';
import Practice from './pages/Practice';
import Exams from './pages/Exams';
import Training from './pages/Training';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/learn/:courseId/:chapterId" element={<Learn />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/document" element={<Document />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:id" element={<Practice />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exam/:id" element={<Exams />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/:id" element={<Training />} />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Python数据分析教育平台</h3>
                <p className="text-blue-200">专为商务数据分析与应用专业学生设计的在线教育平台</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">快速链接</h4>
                  <ul className="space-y-2">
                    <li><a href="/" className="text-blue-200 hover:text-white transition-colors">首页</a></li>
                    <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">课程中心</a></li>
                    <li><a href="/syllabus" className="text-blue-200 hover:text-white transition-colors">学习大纲</a></li>
                    <li><a href="/achievements" className="text-blue-200 hover:text-white transition-colors">成就系统</a></li>
                    <li><a href="/profile" className="text-blue-200 hover:text-white transition-colors">个人中心</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">课程分类</h4>
                  <ul className="space-y-2">
                    <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">编程基础</a></li>
                    <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">数据分析</a></li>
                    <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">商务分析</a></li>
                    <li><a href="/courses" className="text-blue-200 hover:text-white transition-colors">数据可视化</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">联系我们</h4>
                  <ul className="space-y-2">
                    <li className="text-blue-200">邮箱：contact@example.com</li>
                    <li className="text-blue-200">电话：123-456-7890</li>
                    <li className="text-blue-200">地址：北京市海淀区</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>© 2026 Python数据分析教育平台. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;