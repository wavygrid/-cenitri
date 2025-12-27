import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 7000 },
  { name: 'Thu', revenue: 5400 },
  { name: 'Fri', revenue: 9800 },
  { name: 'Sat', revenue: 11000 },
  { name: 'Sun', revenue: 8000 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard-preview" className="py-24 lg:py-32 bg-stone-50" aria-labelledby="dashboard-preview-heading">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-stone-100">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                   <h2 id="dashboard-preview-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">Performance</h2>
                   <p className="text-slate-700 mt-1">Your business health at a glance.</p>
                </div>
                <div className="flex bg-stone-100 p-1 rounded-xl">
                   <button className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm leading-normal font-semibold text-slate-900">Week</button>
                   <button className="px-4 py-2 text-sm leading-normal font-medium text-slate-600 hover:text-slate-900">Month</button>
                   <button className="px-4 py-2 text-sm leading-normal font-medium text-slate-600 hover:text-slate-900">Year</button>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Stats */}
                <div className="lg:col-span-1 space-y-6">
                   <div className="p-6 rounded-2xl border border-stone-100 hover:border-brand-200 transition-colors cursor-default">
                      <p className="text-sm leading-normal font-medium text-slate-600 mb-2">Total Revenue</p>
                      <p className="text-3xl font-bold text-slate-900">$48,200</p>
                   </div>
                   <div className="p-6 rounded-2xl border border-stone-100 hover:border-brand-200 transition-colors cursor-default">
                      <p className="text-sm leading-normal font-medium text-slate-600 mb-2">Jobs Completed</p>
                      <p className="text-3xl font-bold text-slate-900">142</p>
                   </div>
                   <div className="p-6 rounded-2xl border border-stone-100 hover:border-brand-200 transition-colors cursor-default">
                      <p className="text-sm leading-normal font-medium text-slate-600 mb-2">Avg. Review</p>
                      <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold text-slate-900">4.98</p>
                        <span className="text-yellow-400">★</span>
                      </div>
                   </div>
                </div>

                {/* Chart */}
                <div className="lg:col-span-3 bg-stone-50 rounded-2xl p-6 h-[400px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                         <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                               <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                         <Tooltip
                            contentStyle={{backgroundColor: '#1c1917', border: 'none', borderRadius: '12px', color: '#fff'}}
                            itemStyle={{color: '#fff'}}
                            cursor={{stroke: '#e7e5e4', strokeWidth: 1}}
                         />
                         <Area type="monotone" dataKey="revenue" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
