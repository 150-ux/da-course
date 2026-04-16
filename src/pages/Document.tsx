import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Document = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // 由于我们无法直接读取本地文件，这里使用模拟数据
    // 在实际项目中，你可以从API或静态资源加载Markdown文件
    const content = `# Python数据分析AI训练平台（Cloudflare免费版）实现方案

## 项目概述

这是一个基于React 18 + TypeScript + Tailwind CSS的Python数据分析在线教育平台，专为商务数据分析与应用专业学生设计。

## 技术栈

- React 18 + TypeScript
- Tailwind CSS for styling
- Vite as build tool
- Supabase for authentication and data storage
- Zustand for state management
- React Router for routing
- Lucide React for icons
- Recharts for data visualization

## 核心功能

1. 完整的课程体系
2. 互动式的学习模块
3. 包含学、练习、测评
4. 成就激励系统

## 部署方案

- Cloudflare Pages for hosting
- GitHub for version control

## 项目结构

- src/
  - components/ - 可复用组件
  - pages/ - 页面组件
  - store/ - 状态管理
  - utils/ - 工具函数
  - App.tsx - 主应用组件
  - main.tsx - 入口文件

## 开发流程

1. 本地开发：npm run dev
2. 构建：npm run build
3. 部署：自动部署到Cloudflare Pages

## 未来规划

- 添加更多课程内容
- 实现社区功能
- 增强AI辅助学习功能
- 支持更多数据分析工具和库
`;

    setMarkdownContent(content);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">项目文档</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Document;
