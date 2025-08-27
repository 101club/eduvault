export default function Language() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">首页</a>
          <a href="/stem" className="hover:text-blue-500">STEM</a>
          <a href="/language" className="hover:text-blue-500 font-semibold">语言学习</a>
          <a href="/business" className="hover:text-blue-500">商业管理</a>
          <a href="/arts" className="hover:text-blue-500">艺术与人文</a>
        </nav>
      </header>

      <section className="text-center py-16 bg-gradient-to-r from-green-50 to-green-100">
        <h2 className="text-3xl font-bold mb-4">语言学习资源</h2>
        <p className="text-gray-600">精选全球免费的语言学习网站和课程。</p>
      </section>

      <section className="px-6 py-12 grid md:grid-cols-2 gap-6">
        {[
          { title: "Duolingo", link: "https://www.duolingo.com", desc: "趣味化的免费语言学习应用。" },
          { title: "BBC Languages", link: "http://www.bbc.co.uk/languages", desc: "BBC 提供的语言学习资源。" },
          { title: "Open Culture Language Courses", link: "https://www.openculture.com/freelanguagelessons", desc: "各类免费语言课程合集。" },
          { title: "Memrise", link: "https://www.memrise.com", desc: "多语言学习平台，部分免费内容。" }
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </a>
        ))}
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · 语言学习专题
      </footer>
    </div>
  );
}
