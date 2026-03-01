import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  country: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Ready to place an order or need more information? Our export team is here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919712711305?text=Hello%2C%20I%20am%20interested%20in%20your%20PP%20Corrugated%20Sheets.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl p-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">+91 9712711305 — Quick Response</div>
              </div>
            </a>

            {/* Contact Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</div>
                  <a href="tel:+919712711305" className="text-white font-semibold hover:text-gold transition-colors">
                    +91 9712711305
                  </a>
                  <div className="text-white/50 text-xs mt-0.5">Mon–Sat, 9:00 AM – 6:00 PM IST</div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:sgexporters8@gmail.com" className="text-white font-semibold hover:text-gold transition-colors">
                    sgexporters8@gmail.com
                  </a>
                  <div className="text-white/50 text-xs mt-0.5">We respond within 24 hours</div>
                </div>
              </div>

              <div className="border-t border-white/10" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Address</div>
                  <div className="text-white font-semibold">SG Exporters</div>
                  <div className="text-white/70 text-sm">GIDC Industrial Area, Surat,</div>
                  <div className="text-white/70 text-sm">Gujarat – 395010, India</div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
              <iframe
                title="SG Exporters Location - Surat, Gujarat, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.9!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">Enquiry Sent!</h3>
                <p className="text-navy/60 text-sm mb-6">
                  Thank you for your interest. Our export team will contact you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-navy text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-navy-dark transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-navy font-bold text-xl mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy/70 text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-navy/70 text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy/70 text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+971 50 000 0000"
                        className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-navy/70 text-xs font-semibold uppercase tracking-wide mb-1.5">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-white"
                      >
                        <option value="">Select Country</option>
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>Oman</option>
                        <option>Qatar</option>
                        <option>Kuwait</option>
                        <option>Bahrain</option>
                        <option>Jordan</option>
                        <option>Egypt</option>
                        <option>Kenya</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy/70 text-xs font-semibold uppercase tracking-wide mb-1.5">
                      Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your requirements: product type, quantity, size, color, delivery timeline..."
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy text-white font-bold py-3 rounded-lg hover:bg-navy-dark transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-navy/40 text-xs text-center">
                    By submitting, you agree to be contacted by our export team.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
