import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'CryptoRekt47',
    text: "I lost everything in crypto... Pumpa was my final $100. Now I’m holding $12K. Unbelievable.",
  },
  {
    name: 'LisaChains',
    text: "Pumpa isn’t just a token, it’s a story. The anime, the energy — I’m hooked.",
  },
  {
    name: 'DiamondSzn',
    text: "Nothing pumped like this. My portfolio’s glowing. Pumpa forever!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const t = testimonials[index];

  return (
    <section className="bg-black text-white py-16 px-4 animate-fade">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-8 glow-text">What People Are Saying</h2>

        <div className="border border-orange-500 p-6 rounded-xl shadow-glow bg-zinc-900 transition-all duration-500">
          <p className="text-lg text-gray-300 italic">"{t.text}"</p>
          <p className="mt-4 text-orange-300 font-semibold">— {t.name}</p>
        </div>
      </div>
    </section>
  );
}
