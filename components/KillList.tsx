import React from 'react';
import { Check, X } from 'lucide-react';

export const KillList: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50" aria-labelledby="kill-list-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 id="kill-list-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">The "Kill List"</h2>
            <p className="text-lg leading-relaxed text-slate-700 mt-2">Tools you can cancel once you switch to Centurim.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-slate-100 border-b border-slate-200">
                    <tr>
                        <th className="p-4 text-sm leading-normal font-semibold text-slate-700 uppercase w-1/2">Tool Category</th>
                        <th className="p-4 text-sm leading-normal font-semibold text-slate-700 uppercase">Avg. Cost</th>
                        <th className="p-4 text-sm leading-normal font-semibold text-slate-700 uppercase">With Centurim</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Website Hosting (Wix/SquareSpace)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$29/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Booking Software (Calendly)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$15/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Email Marketing (Mailchimp)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$60/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Reputation Mgmt (Podium)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$189/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Link-in-Bio (Linktree)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$9/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-base leading-normal text-slate-900 font-medium">Form Builder (Typeform)</td>
                        <td className="p-4 text-base leading-normal text-slate-700">$35/mo</td>
                        <td className="p-4 text-base leading-normal text-green-600 font-bold"><Check className="h-5 w-5" /> Included</td>
                    </tr>
                    <tr className="bg-slate-50">
                        <td className="p-4 text-base leading-normal text-slate-900 font-bold">TOTAL MONTHLY COST</td>
                        <td className="p-4 text-base leading-normal text-red-600 font-bold line-through">~$337/mo</td>
                        <td className="p-4 text-base leading-normal text-slate-900 font-bold">$199/mo</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="text-center text-xs leading-normal text-slate-700 mt-6">*Prices based on standard tier subscriptions of listed services.</p>
      </div>
    </section>
  );
};