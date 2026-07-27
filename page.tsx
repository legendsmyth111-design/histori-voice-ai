import Navbar from '@/app/components/Navbar';
import { Info, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Info className="text-indigo-400" /> About HistoryVoice AI
          </h1>
          <p className="text-sm text-slate-400">Project details and technical summary for evaluation.</p>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 text-sm text-slate-300">
          <p>
            HistoryVoice AI is built as a complete digital historical platform. It empowers students and researchers to access rare literature, ask complex questions, and interact using AI voice technology.
          </p>

          <h3 className="font-semibold text-white text-base pt-2">Key Accomplishments</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" /> Direct access without mandatory login flow.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" /> Powered by Gemini 2.5 Flash for smart history responses.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" /> Integrated web speech synthesis for voice reading functionality.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}