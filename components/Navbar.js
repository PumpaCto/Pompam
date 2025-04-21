import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/pumpa-logo.png" width={40} height={40} alt="Pumpa Logo" className="rounded-full" />
            <span className="text-orange-600 font-bold text-xl">Pumpa</span>
          </div>
        </Link>
        <div className="space-x-4 hidden sm:flex">
          <Link href="/" className="text-gray-700 hover:text-orange-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600">About</Link>
          <Link href="/roadmap" className="text-gray-700 hover:text-orange-600">Roadmap</Link>
          <Link href="/community" className="text-gray-700 hover:text-orange-600">Community</Link>
          <a href="https://pump.fun" target="_blank" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">Buy Now</a>
        </div>
      </div>
    </nav>
  );
}
