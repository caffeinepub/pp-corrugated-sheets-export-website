import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const stats = [
  { value: 30, suffix: '+', label: 'Countries Served', description: 'Active export destinations worldwide' },
  { value: 15, suffix: '+', label: 'Years in Business', description: 'Decades of manufacturing excellence' },
  { value: 500, suffix: '+', label: 'Happy Clients', description: 'Satisfied international buyers' },
  { value: 10000, suffix: '+', label: 'Tons Exported', description: 'Total PP sheets exported annually' },
];

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    country: 'UAE',
    flag: '🇦🇪',
    company: 'Al-Rashidi Packaging LLC',
    quote:
      'Shree Exports has been our trusted supplier for over 5 years. Their PP corrugated sheets are consistently high quality, and their export documentation is always perfect. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Qahtani',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    company: 'Gulf Packaging Solutions',
    quote:
      'We import large volumes of PP sheets from Shree Exports for our packaging operations. Their competitive pricing, on-time delivery, and excellent customer support make them our #1 choice.',
    rating: 5,
  },
  {
    name: 'Khalid Al-Balushi',
    country: 'Oman',
    flag: '🇴🇲',
    company: 'Muscat Industrial Supplies',
    quote:
      'The quality of their custom printed sheets is outstanding. Our clients love the branding quality. Shree Exports understands international business requirements perfectly.',
    rating: 5,
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-extrabold text-gold">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function TrustStats() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            Numbers That Speak
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy rounded-2xl p-6 text-center border border-navy/10"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-white font-bold mt-2 mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Client Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-navy-light rounded-2xl p-7 border border-navy/10 hover:border-gold/30 transition-colors duration-300 relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-navy/70 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-navy/10">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-lg">
                  {testimonial.flag}
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">{testimonial.name}</div>
                  <div className="text-navy/50 text-xs">{testimonial.company}</div>
                  <div className="text-gold text-xs font-medium">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
