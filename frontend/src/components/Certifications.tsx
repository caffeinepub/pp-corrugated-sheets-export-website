import { BadgeCheck, ShieldCheck, Star, Award } from 'lucide-react';

const certifications = [
  {
    icon: BadgeCheck,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description:
      'Our manufacturing processes are certified under ISO 9001:2015, ensuring consistent quality management and continuous improvement across all production stages.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    description:
      'We are committed to sustainable manufacturing practices, certified under ISO 14001:2015 for responsible environmental management.',
  },
  {
    icon: Star,
    title: 'BIS Certified',
    subtitle: 'Bureau of Indian Standards',
    description:
      'Our products comply with Bureau of Indian Standards specifications, ensuring they meet national quality benchmarks for export.',
  },
  {
    icon: Award,
    title: 'Export Excellence',
    subtitle: 'FIEO Recognized Exporter',
    description:
      'Recognized by the Federation of Indian Export Organisations (FIEO) for consistent export performance and quality standards.',
  },
];

const qualityPoints = [
  'Raw material inspection at source',
  'In-process quality checks at every stage',
  'Final product testing before dispatch',
  'Dimensional accuracy verification',
  'Tensile strength & load testing',
  'UV resistance & weatherability tests',
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Standards & Compliance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            Certifications &amp; Quality
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto">
            Our commitment to quality is backed by internationally recognized certifications and rigorous quality control processes.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-navy/8 hover:shadow-md hover:border-gold/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-dark transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-navy font-extrabold text-xl mb-1">{cert.title}</h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-3">{cert.subtitle}</p>
                <p className="text-navy/60 text-sm leading-relaxed">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quality Compliance */}
        <div className="bg-navy rounded-2xl p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Quality Compliance Process
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Every product that leaves our facility undergoes a comprehensive multi-stage quality assurance process. We believe quality is not just a standard — it's our promise to every customer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualityPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                    <span className="text-white/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-gold font-bold text-4xl mb-1">100%</div>
                <div className="text-white/70 text-sm">Products Quality Checked Before Export</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-gold font-bold text-4xl mb-1">Zero</div>
                <div className="text-white/70 text-sm">Tolerance for Defective Products in Export Shipments</div>
              </div>
              <div className="bg-gold/20 border border-gold/30 rounded-xl p-5">
                <div className="text-gold font-bold text-lg mb-1">International Standards</div>
                <div className="text-white/70 text-sm">Compliant with ASTM, DIN, and ISO international material standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
