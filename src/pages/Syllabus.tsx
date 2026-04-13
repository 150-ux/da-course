import { ChevronRight, BookOpen, BarChart3, Code, Award, Globe, Briefcase, CheckCircle } from 'lucide-react';

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">数据分析专业学习大纲</h1>
          <p className="text-gray-600 text-lg">基于现代AI与AI编程发展</p>
        </div>

        {/* 核心学习方向 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-3 text-blue-900" />
            一、核心学习方向
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '基础数据处理与分析',
                icon: <BarChart3 className="h-8 w-8 text-green-600" />,
                core: '数据获取、清洗、转换、可视化、描述性统计与探索性分析（EDA）。',
                modern: '自动化数据管道（如pandas、PySpark）、交互式可视化（Plotly、Dash）、低代码/自动化EDA工具。'
              },
              {
                title: '统计建模与机器学习',
                icon: <Code className="h-8 w-8 text-blue-600" />,
                core: '应用统计模型和机器学习算法进行预测、分类与聚类。',
                modern: '集成学习、自动化机器学习（AutoML）、可解释AI（XAI）、scikit-learn生态。'
              },
              {
                title: '深度学习与AI应用',
                icon: <Award className="h-8 w-8 text-purple-600" />,
                core: '处理图像、文本、序列等非结构化数据，构建复杂预测模型。',
                modern: '神经网络（CNN、RNN、Transformer）、预训练模型、迁移学习、生成式AI（如LLM应用）。'
              },
              {
                title: '大数据与云原生分析',
                icon: <Globe className="h-8 w-8 text-orange-600" />,
                core: '处理海量数据，构建可扩展、分布式的数据分析系统。',
                modern: '云计算平台（AWS、GCP、Azure）、分布式计算框架（Spark、Dask）、大数据湖仓一体。'
              },
              {
                title: '领域业务与工程化',
                icon: <Briefcase className="h-8 w-8 text-red-600" />,
                core: '将分析结果转化为业务决策，并部署为稳定、可维护的生产系统。',
                modern: 'MLOps/LLMOps（模型部署、监控、迭代）、A/B测试、数据产品开发、业务指标体系建设。'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">核心描述</h4>
                  <p className="text-gray-600 text-sm">{item.core}</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">现代演进</h4>
                  <p className="text-gray-600 text-sm">{item.modern}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 核心知识点与技能体系 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Code className="h-6 w-6 mr-3 text-blue-900" />
            二、核心知识点与技能体系
          </h2>
          <div className="space-y-8">
            {[
              {
                title: '1. 编程与开发环境',
                content: (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">核心语言</h4>
                      <p className="text-gray-600">Python（首选）、SQL（必备），辅修R。</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">开发环境</h4>
                      <p className="text-gray-600">Jupyter Notebook/Lab、VS Code、PyCharm；Git版本控制。</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">关键Python库</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-1">数据处理</h5>
                          <p className="text-sm text-gray-600">pandas、NumPy</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-1">可视化</h5>
                          <p className="text-sm text-gray-600">matplotlib、seaborn、plotly</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-1">机器学习</h5>
                          <p className="text-sm text-gray-600">scikit-learn、XGBoost/LightGBM</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-1">深度学习</h5>
                          <p className="text-sm text-gray-600">TensorFlow/PyTorch、Keras</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: '2. 数学与统计基础',
                content: (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">线性代数</h5>
                        <p className="text-sm text-gray-600">向量、矩阵、张量运算。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">概率与统计</h5>
                        <p className="text-sm text-gray-600">概率分布、假设检验、回归分析、贝叶斯方法。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">微积分</h5>
                        <p className="text-sm text-gray-600">梯度、导数，理解优化算法核心。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">信息论（进阶）</h5>
                        <p className="text-sm text-gray-600">用于特征选择、模型评估。</p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: '3. 数据处理与可视化',
                content: (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">数据获取</h5>
                        <p className="text-sm text-gray-600">文件、数据库、API、网络爬虫。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">数据清洗</h5>
                        <p className="text-sm text-gray-600">缺失值、异常值、重复值处理。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">数据转换</h5>
                        <p className="text-sm text-gray-600">特征工程、数据聚合、透视表。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">数据可视化</h5>
                        <p className="text-sm text-gray-600">统计图表绘制，探索数据模式与趋势。</p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: '4. 机器学习与建模',
                content: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">核心概念</h4>
                      <p className="text-gray-600">监督/无监督学习、过拟合与欠拟合、偏差-方差权衡、交叉验证。</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">监督学习算法</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">回归</h5>
                          <p className="text-sm text-gray-600">线性回归、岭回归、Lasso回归。</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">分类</h5>
                          <p className="text-sm text-gray-600">逻辑回归、决策树、随机森林、支持向量机（SVM）、K近邻（KNN）。</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">无监督学习算法</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">聚类</h5>
                          <p className="text-sm text-gray-600">K-Means、层次聚类、DBSCAN。</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">降维</h5>
                          <p className="text-sm text-gray-600">主成分分析（PCA）、t-SNE。</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">模型评估</h4>
                      <p className="text-gray-600">准确率、精确率、召回率、F1分数、ROC-AUC、均方误差（MSE）等。</p>
                    </div>
                  </div>
                )
              },
              {
                title: '5. 深度学习与AI（进阶）',
                content: (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">神经网络基础</h4>
                      <p className="text-gray-600">感知机、激活函数、损失函数、反向传播。</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">核心架构</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">卷积神经网络（CNN）</h5>
                          <p className="text-sm text-gray-600">图像识别、计算机视觉。</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">循环神经网络（RNN）</h5>
                          <p className="text-sm text-gray-600">及变体（LSTM/GRU）：时间序列、自然语言处理。</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h5 className="font-medium text-blue-900 mb-2">Transformer</h5>
                          <p className="text-sm text-gray-600">现代NLP和视觉任务的基石。</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">现代实践</h4>
                      <p className="text-gray-600">预训练模型、迁移学习、微调、注意力机制。</p>
                    </div>
                  </div>
                )
              },
              {
                title: '6. 大数据与工程化能力',
                content: (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">大数据技术</h5>
                        <p className="text-sm text-gray-600">Hadoop/Spark生态系统基础。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">数据库</h5>
                        <p className="text-sm text-gray-600">SQL（熟练），了解NoSQL（如MongoDB）。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">云服务</h5>
                        <p className="text-sm text-gray-600">熟悉至少一家主流云平台的数据分析服务。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">部署与运维（MLOps）</h5>
                        <p className="text-sm text-gray-600">模型打包（Docker）、API服务、CI/CD、模型监控。</p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: '7. 业务与软技能',
                content: (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">业务理解</h5>
                        <p className="text-sm text-gray-600">将业务问题转化为数据问题，定义关键指标。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">沟通与可视化</h5>
                        <p className="text-sm text-gray-600">用数据讲故事，向非技术人员传达洞察。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h5 className="font-medium text-blue-900 mb-2">问题解决</h5>
                        <p className="text-sm text-gray-600">系统性思维，拆解复杂问题并设计分析流程。</p>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
                {section.content}
              </div>
            ))}
          </div>
        </section>

        {/* 推荐学习路径 */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="h-6 w-6 mr-3 text-blue-900" />
            三、推荐学习路径
          </h2>
          <div className="space-y-6">
            {[
              {
                phase: '第一阶段：基础奠基',
                items: [
                  '掌握Python编程基础、pandas、NumPy数据处理。',
                  '学习统计学基础与数据可视化。',
                  '使用SQL进行数据查询。'
                ]
              },
              {
                phase: '第二阶段：核心建模',
                items: [
                  '系统学习scikit-learn，掌握主流机器学习算法。',
                  '深入理解模型评估与特征工程。',
                  '参与实战项目（如Kaggle入门竞赛）。'
                ]
              },
              {
                phase: '第三阶段：深化与拓展',
                items: [
                  '方向选择：根据兴趣向深度学习或大数据/工程化方向深入。',
                  '学习深度学习框架（TensorFlow/PyTorch）或大数据工具（Spark）。',
                  '了解云平台和MLOps基础。'
                ]
              },
              {
                phase: '持续实践',
                items: [
                  '通过个人项目、开源项目、竞赛持续积累经验。',
                  '关注领域最新论文、博客和工具（如AI编程新范式）。'
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Syllabus;