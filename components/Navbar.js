import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-orange-400 shadow-lg shadow-cyan-400/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
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
        <div className="space-x-4 hidden sm:flex">
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
      </div>
    </nav>
  );
}
