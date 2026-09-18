const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b-4 border-[#2a180e] bg-[#3a2417]/95 shadow-[0_4px_0_#1c1009] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-black uppercase tracking-[0.2em]"
        >
          <span className="text-[#f6d78b] transition group-hover:text-[#fff1bd]">
            Josh
          </span>
          <span className="text-[#9b6b3d]">|</span>
          <span className="text-[#d49a55] transition group-hover:text-[#f6d78b]">
            Dev
          </span>
        </a>
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className=" group relative flex items-center gap-2 border-2 border-transparent px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.15em] text-[#e8c987] transition-all duration-150 hover:border-[#8b5e34] hover:bg-[#5a3821] hover:text-[#fff1bd] hover:shadow-[3px_3px_0_#24140b] "
              >
                <span>{item}</span>
                <span className=" absolute bottom-0 left-0 h-[2px] w-0 bg-[#d49a55] transition-all duration-200 group-hover:w-full " />{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
