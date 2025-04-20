import Head from 'next/head';

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap – Pumpa Token</title>
        <meta name="description" content="Pumpa Token development roadmap" />
      </Head>
      <main className="min-h-screen p-8 bg-gray-100 text-gray-800 font-sans">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Pumpa Token – Roadmap
        </h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Q2 2025 – Launch & Community</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Token launch via Pump.fun</li>
              <li>Initial community building and viral marketing</li>
              <li>Animated crypto story goes live</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Q3 2025 – Expansion</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Exchange listings</li>
              <li>Merchandise store (limited edition)</li>
              <li>Start development of anime-style crypto game</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Q4 2025 – Web Game & NFT Series</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Launch of web-based crypto adventure game</li>
              <li>NFT character collection drop</li>
              <li>Story expansion with new animations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Q1 2026 – Ecosystem Evolution</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>DAO launch for community governance</li>
              <li>More exchange listings</li>
              <li>Road to a full anime series + major collabs</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
    }
