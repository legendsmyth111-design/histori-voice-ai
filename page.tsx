import Navbar from '@/app/components/Navbar';
import { Library, Book } from 'lucide-react';

export default function BooksPage() {
  const books = [
    { title: 'Tareekh-e-Farishta', author: 'Muhammad Qasim Farishta', era: '16th Century', desc: 'Comprehensive history of Islamic rule in India.' },
    { title: 'Ain-i-Akbari', author: 'Abu'l-Fazl ibn Mubarak', era: 'Mughal Period', desc: 'Detailed document recording the administration of Emperor Akbar.' },
    { title: 'Asar-us-Sanadid', author: 'Sir Syed Ahmed Khan', era: '1847', desc: 'Monumental work on the historical monuments and figures of Delhi.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Library className="text-indigo-400" /> Authentic Book Library
          </h1>
          <p className="text-sm text-slate-400">Curated archive of historical literature & rare manuscripts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((b, i) => (
            <div key={i} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg w-fit">
                <Book className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white">{b.title}</h3>
              <p className="text-xs text-indigo-400">Author: {b.author} ({b.era})</p>
              <p className="text-xs text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}