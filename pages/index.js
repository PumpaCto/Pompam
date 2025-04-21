import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import ScrollQuote from '../components/ScrollQuote';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token | Home</title>
        <meta name="description" content="Where the broken find hope. Pumpa Token is your last chance to rise again." />
      </Head>

      <main className="bg-black text-white">
        {/* HERO SECTION */}
        <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col items-center justify-center text-center px-4 pt-32 animate-fade">
          <Image
            src="/pumpa-logo.png"
            width={100}
            height={100}
            alt="Pumpa Logo"
            className="rounded-full mb-6 shadow-glow"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-400 glow-text mb-4">
            Pumpa Token
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Where the broken find hope. Where Pumpa begins.
          </p>

          <Link
            href="https://pump.fun"
            target="_blank"
            className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-glow text-lg transition-all"
          >
            Buy Now
          </Link>
        </section>

        {/* SCROLL QUOTE */}
        <ScrollQuote />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* STATS */}
        <Stats />
      </main>
    </>
  );
}
