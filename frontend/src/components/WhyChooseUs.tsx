import { Shield, DollarSign, Factory, Truck, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'High Durability',
    description:
      'Our PP corrugated sheets are engineered for maximum strength and longevity, withstanding harsh conditions during international transit.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description:
      'Direct manufacturer pricing with no middlemen. We offer the best value for bulk orders without compromising on quality.',
  },
  {
    icon: Factory,
    title: 'Bulk Production Capacity',
    description:
      'Our large-scale manufacturing facility can handle high-volume orders with consistent quality and quick turnaround times.',
  },
  {
    icon: Truck,
    title: 'On-Time Export Shipping',
    description:
      'Reliable logistics partnerships ensure your orders are shipped on schedule via major Indian ports with full tracking.',
  },
  {
    icon: FlaskConical,
    title: 'Quality Testing',
    description:
      'Every batch undergoes rigorous quality control testing — tensile strength, thickness uniformity, and dimensional accuracy checks.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Advantages</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            We combine manufacturing excellence with export expertise to deliver unmatched value to our global clients.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
