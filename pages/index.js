export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="#resources" className="hover:text-blue-500">资源</a>
          <a href="#about" className="hover:text-blue-500">关于</a>
          <a href="#subscribe" className="hover:text-blue-500">订阅</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold mb-4">全球免费教育资源导航</h2>
        <p className="text-lg text-gray-600 mb-6">
          由 AI 自动更新，帮你发现世界上最优质的免费学习资料。
        </p>
        <a
          href="#subscribe"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700"
        >
          立即订阅
        </a>
      </section>

      {/* Daily Picks */}
      <section id="resources" className="px-6 py-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">今日推荐</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "MIT 深度学习公开课",
              link: "https://ocw.mit.edu",
              desc: "来自麻省理工的人工智能入门课程。"
            },
            {
              title: "Khan Academy 数学课程",
              link: "https://www.khanacademy.org",
              desc: "完全免费的数学与科学学习资源。"
            },
            {
              title: "Harvard CS50 计算机科学",
              link: "https://cs50.harvard.edu",
              desc: "全球最受欢迎的计算机科学入门课程。"
            }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section id="subscribe" className="bg-blue-50 px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">为什么要订阅？</h3>
        <ul className="max-w-xl mx-auto text-left text-gray-700 space-y-3 mb-8">
          <li>✔ 免费用户每天仅可访问 3 个推荐</li>
          <li>✔ 订阅用户解锁完整数据库</li>
          <li>✔ 个性化学习路径推荐</li>
          <li>✔ 每周邮件推送精选资源</li>
        </ul>
        <a
          href="https://ko-fi.com/james25430"
          target="_blank"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 mr-4"
        >
          通过 Ko‑fi 支持
        </a>
        <a
          href="https://paypal.me/101club"
          target="_blank"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700"
        >
          通过 PayPal 订阅
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · 全球免费教育资源导航
      </footer>
    </div>
  );
}
