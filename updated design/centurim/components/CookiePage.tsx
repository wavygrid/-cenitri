import React from 'react';
import { ViewState } from '../App';
import { Button } from './ui/Button';
import { Cookie, Settings } from 'lucide-react';

interface CookiePageProps {
  onNavigate?: (view: ViewState) => void;
}

const CookiePage: React.FC<CookiePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-2 text-zinc-600 mb-4 font-mono text-xs uppercase tracking-widest">
            <Cookie size={14} /> Tracking Policy
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Cookie Policy</h1>
          <p className="text-zinc-500">Effective Date: January 1, 2024</p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-10">
          
          <p className="text-lg leading-relaxed">
            Centurin uses cookies and similar technologies to secure your session, analyze platform performance, and ensure the integrity of the intake process.
          </p>

          <div>
             <h3 className="text-xl font-bold text-zinc-900 mb-4">1. Strict Necessity</h3>
             <p className="mb-4">
                These cookies are essential for the operation of the platform. They cannot be disabled.
             </p>
             <div className="overflow-x-auto">
               <table className="min-w-full text-sm text-left border border-zinc-200 rounded-lg">
                 <thead className="bg-zinc-50 text-zinc-900 font-bold">
                   <tr>
                     <th className="px-4 py-3">Name</th>
                     <th className="px-4 py-3">Purpose</th>
                     <th className="px-4 py-3">Duration</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-zinc-200">
                   <tr>
                     <td className="px-4 py-3 font-mono">__session_id</td>
                     <td className="px-4 py-3">Maintains your authenticated session state.</td>
                     <td className="px-4 py-3">Session</td>
                   </tr>
                   <tr>
                     <td className="px-4 py-3 font-mono">csrf_token</td>
                     <td className="px-4 py-3">Prevents Cross-Site Request Forgery attacks.</td>
                     <td className="px-4 py-3">Session</td>
                   </tr>
                   <tr>
                     <td className="px-4 py-3 font-mono">region_pref</td>
                     <td className="px-4 py-3">Stores your selected data residency zone.</td>
                     <td className="px-4 py-3">Persistent</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>

          <div>
             <h3 className="text-xl font-bold text-zinc-900 mb-4">2. Performance & Analytics</h3>
             <p className="mb-4">
                We use these to understand how users interact with the intake wizard to improve conversion rates. Data is anonymized.
             </p>
             <ul className="list-disc pl-6 space-y-2">
                <li>Load time metrics</li>
                <li>Error rate logging</li>
                <li>User flow drop-off analysis</li>
             </ul>
          </div>

          <div>
             <h3 className="text-xl font-bold text-zinc-900 mb-4">3. Managing Preferences</h3>
             <p className="mb-4">
                You can control cookies through your browser settings. However, disabling strict cookies will prevent you from logging into the Centurin Dashboard.
             </p>
             <Button variant="ghost" className="text-zinc-900 pl-0 hover:bg-transparent hover:underline flex items-center gap-2">
                <Settings size={16}/> Open Cookie Preferences
             </Button>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200">
           <Button onClick={() => onNavigate?.('home')} variant="outline">
              Return Home
           </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;