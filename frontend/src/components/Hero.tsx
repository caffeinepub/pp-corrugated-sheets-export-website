import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const handleRequestQuote = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCatalogue = () => {
    alert('Catalogue download will be available soon. Please contact us for more information.');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-industrial.dim_1920x1080.png')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60" />
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Trusted Global Exporter from India
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Global Exporter of{' '}
            <span className="text-gold">High-Quality</span>{' '}
            PP Corrugated Sheets from India
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Supplying Durable, Lightweight &amp; Custom Packaging Solutions Worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleRequestQuote}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-base px-8 py-4 rounded hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-gold/30 hover:shadow-xl"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleDownloadCatalogue}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-base px-8 py-4 rounded hover:bg-white hover:text-navy transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download Catalogue
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '30+', label: 'Countries Served' },
              { value: '500+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
