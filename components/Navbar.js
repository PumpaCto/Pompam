import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-orange-500 shadow-lg shadow-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" onClick={closeMenu}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src="/pumpa-logo.png" alt="Pumpa Logo" width={36} height={36} className="rounded-full" />
            <span className="text-orange-400 font-bold text-xl glow-text">Pumpa</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/roadmap" className="hover:text-orange-400 transition">Roadmap</Link>
          <Link href="/community" className="hover:text-orange-400 transition">Community</Link>
          <a href="https://pump.fun" target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-xl shadow-md">Buy Now</a>
          <a href="https://t.me/pumpatoken" target="_blank"><Image src="/icon-telegram.svg" alt="Telegram" width={24} height={24} /></a>
          <a href="https://x.com/Pumpa_Cto" target="_blank"><Image src="/icon-twitter.svg" alt="Twitter" width={24} height={24} /></a>
          <a href="https://www.tiktok.com/@pumpa.token" target="_blank"><Image src="/icon-tiktok.svg" alt="TikTok" width={24} height={24} /></a>
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
          <a href="https://pump.fun" target="_blank" onClick={closeMenu} className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl mt-2">Buy Now</a>
        </div>
      )}
    </nav>
  );
}
