import Head from 'next/head';
import Image from 'next/image';

export default function Community() {
  return (
    <>
      <Head>
        <title>Join the Pumpa Community</title>
        <meta name="description" content="Connect with the Pumpa community on Telegram, Twitter, and TikTok. Be part of the movement." />
      </Head>

      <section className="min-h-screen bg-black text-white px-4 pt-32 pb-20 animate-fade">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-6 glow-text">
            Join the Pumpa Community
          </h1>

          <p className="text-lg text-gray-300 mb-10">
            Be part of something bigger. The Pumpa movement is just getting started.  
            Engage, meme, trade, build — together.
          </p>

          <div className="flex justify-center flex-wrap gap-6">
            <a href="https://t.me/pumpatoken" target="_blank" className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-telegram.svg" width={24} height={24} alt="Telegram" />
              Telegram
            </a>

            <a href="https://x.com/Pumpa_Cto" target="_blank" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-twitter.svg" width={24} height={24} alt="Twitter" />
              Twitter
            </a>

            <a href="https://www.tiktok.com/@pumpa.token" target="_blank" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-tiktok.svg" width={24} height={24} alt="TikTok" />
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
