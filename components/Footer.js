import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-orange-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo + Slogan */}
        <div className="flex items-center space-x-3">
          <Image src="/pumpa-logo.png" width={40} height={40} alt="Pumpa Logo" className="rounded-full" />
          <span className="text-orange-400 font-bold text-lg">Pumpa Token</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="https://t.me/pumpatoken" target="_blank" className="hover:text-white">Telegram</a>
          <a href="https://x.com/Pumpa_Cto" target="_blank" className="hover:text-white">Twitter</a>
          <a href="https://www.tiktok.com/@pumpa.token" target="_blank" className="hover:text-white">TikTok</a>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-600">
        ©2025 Pumpa Token. All rights reserved.
      </div>
    </footer>
  );
}
