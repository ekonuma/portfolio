import Link from 'next/link';
import { useState } from 'react'; // Import useState

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="fixed top-0 w-full bg-[#1E1E1E]/80 backdrop-blur z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">EKONUMA</Link>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-[#1DE9B6] hover:border-[#1DE9B6]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Desktop menu - hidden on mobile, visible on medium screens and up */}
        <ul className="hidden md:flex gap-4 text-sm">
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

        {/* Mobile menu - visible only when isOpen is true and on mobile screens */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#1E1E1E] shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-2 text-base">
              <li>
                <Link href="/blog" className="block px-4 py-2 hover:text-[#1DE9B6]" onClick={() => setIsOpen(false)}>Blog</Link>
              </li>
              <li>
                <Link href="/#sobre" className="block px-4 py-2 hover:text-[#1DE9B6]" onClick={() => setIsOpen(false)}>Sobre</Link>
              </li>
              <li>
                <Link href="/#projetos" className="block px-4 py-2 hover:text-[#1DE9B6]" onClick={() => setIsOpen(false)}>Projetos</Link>
              </li>
              <li>
                <Link href="/#skills" className="block px-4 py-2 hover:text-[#1DE9B6]" onClick={() => setIsOpen(false)}>Skills</Link>
              </li>
              <li>
                <Link href="/#contato" className="block px-4 py-2 hover:text-[#1DE9B6]" onClick={() => setIsOpen(false)}>Contato</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
