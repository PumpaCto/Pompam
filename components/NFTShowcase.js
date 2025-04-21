import Image from 'next/image';

const nfts = [
  { id: 1, src: '/nft1.png', name: 'Pumpa OG #1' },
  { id: 2, src: '/nft2.png', name: 'Pumpa Samurai #12' },
  { id: 3, src: '/nft3.png', name: 'Pumpa Mecha #7' },
];

export default function NFTShowcase() {
  return (
    <section className="bg-black text-white py-20 px-4 animate-fade">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-10 glow-text">Pumpa NFT Showcase</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          A glimpse into the upcoming Pumpa NFT universe. Collect, flex, and empower your journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-zinc-900 border border-orange-500 rounded-xl overflow-hidden shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <Image src={nft.src} alt={nft.name} width={400} height={400} />
              <div className="p-4">
                <h3 className="text-lg font-bold text-orange-300">{nft.name}</h3>
                <p className="text-sm text-gray-400">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
