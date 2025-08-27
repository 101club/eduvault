export default function Business() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">首页</a>
          <a href="/stem" className="hover:text-blue-500">STEM</a>
          <a href="/language" className="hover:text-blue-500">语言学习</a>
          <a href="/business" className="hover:text-blue-500 font-semibold">商业管理</a>
          <a href="/arts" className="hover:text-blue-500">艺术与人文</a>
        </nav>
      </header>

      <section className="text-center py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <h2 className="text-3xl font-bold mb-4">商业与管理资源</h2>
        <p className="text-gray-600">精选创业、经济学和管理的免费资源。</p>
      </section>

      <section className="px-6 py-12 grid md:grid-cols-2 gap-6">
        {[
          { title: "MIT Sloan Free Courses", link: "https://ocw.mit.edu/courses/sloan-school-of-management/", desc: "麻省理工斯隆商学院公开课。" },
          { title: "Harvard Business School Online Free", link: "https://online.hbs.edu", desc: "哈佛商学院部分免费课程。" },
          { title: "OpenLearn Business", link: "https://www.open.edu/openlearn/money-business", desc: "英国 Open University 的商科课程。" },
          { title: "Coursera Free Business Courses", link: "https://www.coursera.org/courses?query=free%20business", desc: "全球知名商学院免费课程。" }
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </a>
        ))}
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · 商业与管理专题
      </footer>
    </div>
  );
}
