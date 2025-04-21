import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image src="/pumpa-logo.png" alt="Pumpa Logo" width={40} height={40} className="rounded-full" />
          <span className="text-orange-400 font-bold text-xl glow-text">Pumpa Token</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://t.me/pumpatoken" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-telegram.svg" alt="Telegram" width={24} height={24} />
          </a>
          <a href="https://x.com/Pumpa_Cto" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@pumpa.token" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 Pumpa Token. All rights reserved.
      </div>
    </footer>
  );
}
