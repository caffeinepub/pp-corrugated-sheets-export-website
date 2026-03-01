import { Ship, Package, FileText, Anchor, Globe2, Clock } from 'lucide-react';

const ports = [
  {
    name: 'Mundra Port',
    location: 'Kutch, Gujarat',
    description: "India's largest commercial port, offering direct container shipping to Middle East, Africa, and Europe.",
  },
  {
    name: 'Nhava Sheva Port',
    location: 'Mumbai, Maharashtra',
    description: 'JNPT — India\'s busiest container port with extensive global shipping routes and excellent connectivity.',
  },
];

const logisticsFeatures = [
  {
    icon: Package,
    title: 'Secure Packaging',
    description: 'Export-grade packaging with moisture barriers, stretch wrap, and wooden pallets to ensure safe delivery.',
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete export documentation: Bill of Lading, Certificate of Origin, Packing List, Commercial Invoice, and more.',
  },
  {
    icon: Globe2,
    title: 'Global Freight Network',
    description: 'Partnerships with leading freight forwarders for competitive shipping rates to all major global destinations.',
  },
  {
    icon: Clock,
    title: 'Lead Time',
    description: 'Standard orders: 7–15 working days. Express production available for urgent requirements.',
  },
];

export default function ExportLogistics() {
  return (
    <section id="logistics" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Shipping & Logistics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            Export &amp; Logistics
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto">
            Seamless export operations from India's premier ports to your doorstep, backed by comprehensive documentation and logistics support.
          </p>
        </div>

        {/* Ports Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="w-5 h-5 text-gold" />
            <h3 className="text-xl font-bold text-navy">Shipping Ports</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ports.map((port) => (
              <div
                key={port.name}
                className="flex gap-5 bg-navy rounded-2xl p-6 border border-navy/10"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ship className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{port.name}</h4>
                  <p className="text-gold text-xs font-medium mb-2">{port.location}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{port.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logistics Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {logisticsFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-navy-light rounded-2xl p-6 border border-navy/10 hover:border-gold/30 transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-navy font-bold mb-2">{feature.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Incoterms Banner */}
        <div className="mt-10 bg-gold/10 border border-gold/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
            <Globe2 className="w-6 h-6 text-navy" />
          </div>
          <div>
            <h4 className="text-navy font-bold mb-1">Flexible Incoterms</h4>
            <p className="text-navy/70 text-sm">
              We support all major trade terms: <strong>FOB, CIF, CFR, EXW, DDP</strong> — tailored to your import requirements and country regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
