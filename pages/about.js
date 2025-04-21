import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Pumpa Token</title>
      </Head>

      <section className="min-h-screen bg-black text-white px-4 pt-32 pb-20 animate-fade">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-6 glow-text">About Pumpa Token</h1>
          <p className="text-lg text-gray-300 mb-8">Pumpa Token is not just a memecoin. It’s a movement, a symbol of rebirth...</p>
        </div>
      </section>
    </>
  );
}
