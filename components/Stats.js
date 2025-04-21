import { useEffect, useState } from 'react';

const statList = [
  { label: 'Pumpa Army', target: 9200 },
  { label: 'Token Growth %', target: 1000000 },
  { label: 'Exchanges Targeted', target: 3 },
];

export default function Stats() {
  const [counts, setCounts] = useState(statList.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) =>
          count < statList[i].target
            ? Math.min(count + Math.ceil(statList[i].target / 40), statList[i].target)
            : count
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 animate-fade">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-12 glow-text">Pumpa Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statList.map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-orange-500 p-6 rounded-xl shadow-glow">
              <p className="text-4xl font-bold text-orange-300">{counts[i].toLocaleString()}</p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
