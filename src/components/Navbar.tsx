import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#1E1E1E]/80 backdrop-blur z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">Eike Konuma</Link>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/blog" className="hover:text-[#1DE9B6]">Blog</Link>
          </li>
          <li>
            <a href="/#sobre" className="hover:text-[#1DE9B6]">Sobre</a>
          </li>
          <li>
            <a href="/#projetos" className="hover:text-[#1DE9B6]">Projetos</a>
          </li>
          <li>
            <a href="/#skills" className="hover:text-[#1DE9B6]">Skills</a>
          </li>
          <li>
            <a href="/#contato" className="hover:text-[#1DE9B6]">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}