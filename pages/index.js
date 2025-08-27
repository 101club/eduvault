export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">首页</a>
          <a href="/stem" className="hover:text-blue-500">STEM</a>
          <a href="/language" className="hover:text-blue-500">语言学习</a>
          <a href="/business" className="hover:text-blue-500">商业管理</a>
          <a href="/arts" className="hover:text-blue-500">艺术与人文</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold mb-4">全球免费教育资源订阅导航</h2>
        <p className="text-gray-600">
          集合全球最优质的免费课程和知识，帮助你持续学习，订阅更新不掉队。
        </p>
      </section>

      {/* 分类模块 */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">资源分类</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "STEM", link: "/stem", desc: "科学、技术、工程与数学" },
            { name: "语言学习", link: "/language", desc: "多语言免费学习资源" },
            { name: "商业管理", link: "/business", desc: "创业、商业与管理课程" },
            { name: "艺术与人文", link: "/arts", desc: "历史、文学、艺术与哲学" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-600">{item.name}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 支持我们 */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-xl font-semibold mb-4">支持我们</h3>
        <p className="mb-4 text-gray-600">如果你觉得这个项目对你有帮助，可以请我喝杯咖啡 ☕</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://ko-fi.com/james25430"
            target="_blank"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
          >
            支持 Ko-fi
          </a>
          <a
            href="https://paypal.me/101club"
            target="_blank"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            支持 PayPal
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · 全球免费教育资源
      </footer>
    </div>
  );
}
