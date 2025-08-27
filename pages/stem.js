export default function STEM() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600">EduVault</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-500">首页</a>
          <a href="/stem" className="hover:text-blue-500 font-semibold">STEM</a>
          <a href="/language" className="hover:text-blue-500">语言学习</a>
          <a href="/business" className="hover:text-blue-500">商业管理</a>
          <a href="/arts" className="hover:text-blue-500">艺术与人文</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <h2 className="text-3xl font-bold mb-4">STEM 资源精选</h2>
        <p className="text-gray-600">
          精选全球科学、技术、工程和数学的免费学习资料。
        </p>
      </section>

      {/* Resource List */}
      <section className="px-6 py-12 grid md:grid-cols-2 gap-6">
        {[
          {
            title: "MIT OpenCourseWare",
            link: "https://ocw.mit.edu",
            desc: "麻省理工公开课，涵盖数学、物理、计算机等。"
          },
          {
            title: "Khan Academy - STEM",
            link: "https://www.khanacademy.org",
            desc: "数学、物理、化学、生物的免费互动课程。"
          },
          {
            title: "NASA Open Learning",
            link: "https://www.nasa.gov/learning-resources",
            desc: "美国航天局提供的太空与科学教育资源。"
          },
          {
            title: "Coursera Free STEM Courses",
            link: "https://www.coursera.org/courses?query=free%20stem",
            desc: "全球高校的免费 STEM 在线课程。"
          }
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg block"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t">
        © {new Date().getFullYear()} EduVault · STEM 专题
      </footer>
    </div>
  );
}
