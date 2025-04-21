import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token</title>
        <meta name="description" content="Pumpa Token - Your Last Chance, Your Real Chance" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans flex flex-col items-center justify-center px-4 pt-32 pb-12">
        <div className="text-center animate-fade-in">
          <Image
            src="/pumpa-logo.png"
            alt="Pumpa Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full shadow-lg shadow-cyan-500/30"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-500 to-cyan-400 bg-clip-text text-transparent mb-4 drop-shadow-md">
            Pumpa Token
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10">
            Your Last Chance. Your Real Chance.  
            Join the crypto-anime revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://pump.fun" target="_blank"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105"
            >
              Buy Now
            </a>
            <a
              href="/community"
              className="px-6 py-3 border border-cyan-400 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-900/30 transition-all hover:scale-105"
            >
              Join Community
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
