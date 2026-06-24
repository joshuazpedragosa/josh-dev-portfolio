const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Josh|<span className="text-cyan-400">Dev</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}