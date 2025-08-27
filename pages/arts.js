export default function Arts() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">首页</a>
          <a href="/stem" className="hover:text-blue-500">STEM</a>
          <a href="/language" className="hover:text-blue-500">语言学习</a>
          <a href="/business" className="hover:text-blue-500">商业管理</a>
          <a href="/arts" className="hover:text-blue-500 font-semibold">艺术与人文</a>
        </nav>
      </header>

      <section className="text-center py-16 bg-gradient-to-r from-red-50 to-red-100">
        <h2 className="text-3xl font-bold mb-4">艺术与人文资源</h2>
        <p className="text-gray-600">探索人类文明、文学、艺术与哲学的免费资源。</p>
      </section>

      <section className="px-6 py-12 grid md:grid-cols-2 gap-6">
        {[
          { title: "Yale Open Courses (Philosophy, History)", link: "https://oyc.yale.edu", desc: "耶鲁大学免费人文学科课程。" },
          { title: "Khan Academy Arts & Humanities", link: "https://www.khanacademy.org/humanities", desc: "艺术、历史、哲学的学习资源。" },
          { title: "Open Culture Free eBooks", link: "https://www.openculture.com/free_ebooks", desc: "免费文学经典电子书。" },
          { title: "MoMA Online Free Resources", link: "https://www.moma.org/research-and-learning", desc: "纽约现代艺术博物馆的教育资源。" }
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block">
            <h3 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </a>
        ))}
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · 艺术与人文专题
      </footer>
    </div>
  );
}
