import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#1E1E1E]/80 backdrop-blur z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">EKONUMA</Link>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/blog" className="hover:text-[#1DE9B6]">Blog</Link>
          </li>
          <li>
            <Link href="/#sobre" className="hover:text-[#1DE9B6]">Sobre</Link>
          </li>
          <li>
            <Link href="/#projetos" className="hover:text-[#1DE9B6]">Projetos</Link>
          </li>
          <li>
            <Link href="/#skills" className="hover:text-[#1DE9B6]">Skills</Link>
          </li>
          <li>
            <Link href="/#contato" className="hover:text-[#1DE9B6]">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}