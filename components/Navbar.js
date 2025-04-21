import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-orange-400 shadow-lg shadow-cyan-400/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/pumpa-logo.png"
              width={40}
              height={40}
              alt="Pumpa Logo"
              className="rounded-full drop-shadow-md"
            />
            <span className="text-orange-400 font-bold text-xl glow-text">
              Pumpa
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/roadmap" className="hover:text-orange-400 transition">Roadmap</Link>
          <Link href="/community" className="hover:text-orange-400 transition">Community</Link>
          <a
            href="https://pump.fun"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-xl shadow-md transition-all"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-orange-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-center bg-black/90 backdrop-blur">
          <Link href="/" onClick={closeMenu} className="block text-orange-300 hover:text-white">Home</Link>
          <Link href="/about" onClick={closeMenu} className="block text-orange-300 hover:text-white">About</Link>
          <Link href="/roadmap" onClick={closeMenu} className="block text-orange-300 hover:text-white">Roadmap</Link>
          <Link href="/community" onClick={closeMenu} className="block text-orange-300 hover:text-white">Community</Link>
          <a
            href="https://pump.fun"
            target="_blank"
            onClick={closeMenu}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl mt-2"
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
}
