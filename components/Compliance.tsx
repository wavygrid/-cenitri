import React from 'react';
import { Badge } from './ui/Badge';
import { CheckCircle2, Shield, Lock, Database } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200" id="compliance">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Enterprise Grade Data Sovereignty</h2>
            <p className="text-zinc-500">Security isn't a feature. It's the foundation.</p>
          </div>
          <Badge variant="outline" className="px-4 py-1 text-sm border-blue-200 text-blue-700 bg-blue-50">
            Audit Ready Infrastructure
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Shield, 
              title: "SOC 2 Type II", 
              desc: "Annually audited security controls." 
            },
            { 
              icon: Lock, 
              title: "GDPR Compliant", 
              desc: "Full data portability and right-to-erasure." 
            },
            { 
              icon: Database, 
              title: "Zero Retention AI", 
              desc: "Models do not train on client PII." 
            },
            { 
              icon: CheckCircle2, 
              title: "Row Level Security", 
              desc: "Tenant isolation at the database level." 
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <item.icon className="text-zinc-400" size={24} />
              <div>
                <h4 className="text-lg font-semibold text-zinc-900 mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;