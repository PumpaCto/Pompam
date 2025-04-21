import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Pumpa Token</title>
        <meta name="description" content="Learn about the mission, vision, and future of Pumpa Token — the final hope in the crypto world." />
      </Head>

      <section className="min-h-screen bg-black text-white px-4 pt-32 pb-20 animate-fade">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-6 glow-text">
            About Pumpa Token
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Pumpa Token is not just a memecoin. It’s a movement — a symbol of rebirth for those who’ve suffered in the volatile world of crypto. Created from the ashes of financial despair, Pumpa gives everyone one last real shot — to rise again.
          </p>

          <h2 className="text-2xl text-pumpaCyan font-semibold mb-2">Vision</h2>
          <p className="text-gray-400 mb-6">
            To build a cultural and financial powerhouse through community-powered storytelling, anime, NFTs, and gamefi experiences.
          </p>

          <h2 className="text-2xl text-pumpaCyan font-semibold mb-2">Mission</h2>
          <p className="text-gray-400">
            Our mission is to empower the broken — to turn the last $100 into a legend, through a brand, ecosystem and token they believe in.
          </p>
        </div>
      </section>
    </>
  );
}
