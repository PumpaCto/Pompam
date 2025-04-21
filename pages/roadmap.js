import Head from 'next/head';

export default function Roadmap() {
  const steps = [
    {
      quarter: 'Q2 2025',
      title: 'Token Launch',
      desc: 'Deploy Pumpa Token on mainnet. Initial marketing campaign begins. Community formation starts.',
    },
    {
      quarter: 'Q3 2025',
      title: 'Community Growth & Listings',
      desc: 'Community voting, meme contests, first DEX/CEX listings, 10K+ holders target.',
    },
    {
      quarter: 'Q4 2025',
      title: 'Game Development & NFTs',
      desc: 'Launch of story-based web game prototype. First collection of animated NFTs tied to lore.',
    },
    {
      quarter: 'Q1 2026',
      title: 'Merch, Anime & Expansion',
      desc: 'Official Pumpa merch drop. Animated short series pilot. More exchange listings and global expansion.',
    },
  ];

  return (
    <>
      <Head>
        <title>Pumpa Token Roadmap</title>
        <meta name="description" content="Explore Pumpa Token’s roadmap from token launch to NFT gaming, anime, and community expansion." />
      </Head>

      <section className="min-h-screen bg-black text-white px-4 pt-32 pb-20 animate-fade">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-400 text-center mb-12 glow-text">
            Roadmap
          </h1>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-6 relative group">
                <div className="absolute left-[-10px] top-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                <h2 className="text-2xl font-semibold text-pumpaCyan">{step.quarter}</h2>
                <h3 className="text-xl font-bold mt-1 mb-1 text-orange-300">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
