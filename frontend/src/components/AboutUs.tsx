import { MapPin, Globe, Award, CheckCircle } from 'lucide-react';

const exportMarkets = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Oman',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Jordan',
  'Egypt',
  'Kenya',
  'Tanzania',
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            About Our Company
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-2 text-navy/60 text-sm mb-4">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Surat, Gujarat, India</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              SG Exporters — Your Trusted PP Corrugated Sheet Partner
            </h3>
            <p className="text-navy/70 leading-relaxed mb-4">
              Established in Surat, India — the textile and industrial hub of Gujarat — SG Exporters has grown into a leading manufacturer and exporter of premium PP Corrugated Sheets. With over 15 years of industry experience, we have built a reputation for delivering world-class packaging solutions to clients across the Middle East and beyond.
            </p>
            <p className="text-navy/70 leading-relaxed mb-6">
              Our state-of-the-art manufacturing facility is equipped with advanced machinery to produce PP corrugated sheets that meet the highest international quality standards. We are committed to timely delivery, competitive pricing, and unmatched customer service — making us the preferred export partner for businesses worldwide.
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {[
                'ISO Certified Manufacturing Facility',
                'Adherence to International Quality Standards',
                'Timely Delivery with Reliable Logistics',
                'Custom Sizes, Colors & Printing Available',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-navy/80 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-navy text-white text-xs font-bold px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-gold" />
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2 bg-gold text-navy text-xs font-bold px-4 py-2 rounded-full">
                🇮🇳 Made in India
              </div>
              <div className="flex items-center gap-2 bg-navy/10 text-navy text-xs font-bold px-4 py-2 rounded-full border border-navy/20">
                <Globe className="w-4 h-4 text-navy" />
                Global Exporter
              </div>
            </div>
          </div>

          {/* Right: Export Markets */}
          <div className="bg-navy rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-gold" />
              <h4 className="text-xl font-bold">Our Export Markets</h4>
            </div>
            <p className="text-white/60 text-sm mb-6">
              We proudly serve clients across the Middle East and international markets, delivering quality packaging solutions to:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {exportMarkets.map((market) => (
                <div
                  key={market}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5"
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/80">{market}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/50 text-xs text-center">
                + Many more countries across Africa, Europe & Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
