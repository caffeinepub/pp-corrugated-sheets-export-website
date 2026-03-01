import { Package2 } from 'lucide-react';
import { SiLinkedin, SiWhatsapp } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Export & Logistics', href: '#logistics' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact Us', href: '#contact' },
];

const exportCountries = [
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
  'Ethiopia',
  'South Africa',
];

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'sg-exporters');

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold rounded flex items-center justify-center">
                <Package2 className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">SG EXPORTERS</div>
                <div className="text-gold text-xs leading-tight tracking-widest">SURAT · INDIA</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Leading manufacturer and exporter of premium PP Corrugated Sheets from Surat, India. Serving global markets with quality and reliability since 2009.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold hover:text-navy rounded-lg flex items-center justify-center transition-colors duration-200 text-white"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919712711305"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200 text-white"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
            {/* Made in India Badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-xs font-bold px-3 py-1.5 rounded-full">
              🇮🇳 Proudly Made in India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Countries */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Export Destinations
            </h4>
            <ul className="space-y-2">
              {exportCountries.map((country) => (
                <li key={country} className="text-white/50 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-gold/40 rounded-full" />
                  {country}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Address</div>
                <p className="text-white/50 leading-relaxed">
                  GIDC Industrial Area,<br />
                  Surat, Gujarat – 395010,<br />
                  India
                </p>
              </div>
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Phone</div>
                <a href="tel:+919712711305" className="text-white/70 hover:text-gold transition-colors">
                  +91 9712711305
                </a>
              </div>
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Email</div>
                <a href="mailto:sgexporters8@gmail.com" className="text-white/70 hover:text-gold transition-colors">
                  sgexporters8@gmail.com
                </a>
              </div>
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">WhatsApp</div>
                <a
                  href="https://wa.me/919712711305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  +91 9712711305
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} SG Exporters. All rights reserved. | Surat, Gujarat, India
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Built with <span className="text-gold">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
