import Navbar from '@/app/components/Navbar';
import { Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExplorePage() {
  const topics = [
    { title: 'Indus Valley Civilization', desc: 'Explore Mohenjo-daro & Harappa urban planning and trade.', category: 'Ancient' },
    { title: 'Mughal Empire Era', desc: 'Architecture, administration, and decline of Mughal rule.', category: 'Medieval' },
    { title: 'Independence Movement 1947', desc: 'Key historical events leading to the creation of Pakistan.', category: 'Modern' },
    { title: 'Subcontinent Literature & Manuscripts', desc: 'Authentic historical literature and rare manuscripts research.', category: 'Literature' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Compass className="text-indigo-400" /> Explore Historical Topics
          </h1>
          <p className="text-sm text-slate-400">Browse key historical modules and research prompts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((t, index) => (
            <div key={index} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500 transition space-y-3">
              <span className="text-xs px-2.5 py-1 bg-indigo-950 text-indigo-400 rounded-md font-mono">{t.category}</span>
              <h3 className="font-semibold text-lg text-white">{t.title}</h3>
              <p className="text-sm text-slate-400">{t.desc}</p>
              <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                Ask AI about this <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}