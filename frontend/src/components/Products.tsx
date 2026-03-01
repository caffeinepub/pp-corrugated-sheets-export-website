const products = [
  {
    id: 1,
    name: 'PP Corrugated Sheets',
    image: '/assets/generated/product-pp-sheets.dim_800x600.png',
    description:
      'Our flagship product — high-quality polypropylene corrugated sheets offering excellent strength-to-weight ratio, moisture resistance, and durability for industrial and commercial packaging.',
    specs: [
      { label: 'Thickness', value: '2mm – 10mm' },
      { label: 'GSM', value: '400 – 2000 GSM' },
      { label: 'Size', value: 'Standard & Custom Sizes' },
      { label: 'Colors', value: 'White, Black, Blue, Yellow, Green, Custom' },
    ],
  },
  {
    id: 2,
    name: 'Custom Printed Sheets',
    image: '/assets/generated/product-custom-printed.dim_800x600.png',
    description:
      'Enhance your brand with our custom printed PP corrugated sheets. Available in full-color printing with your logo, branding, and product information for professional packaging presentation.',
    specs: [
      { label: 'Thickness', value: '3mm – 8mm' },
      { label: 'GSM', value: '600 – 1800 GSM' },
      { label: 'Size', value: 'As per requirement' },
      { label: 'Colors', value: 'Full CMYK Printing, Pantone Match' },
    ],
  },
  {
    id: 3,
    name: 'Packaging Solutions',
    image: '/assets/generated/product-packaging-solutions.dim_800x600.png',
    description:
      'Complete packaging solutions including corrugated boxes, dividers, layer pads, and custom-cut sheets designed for safe transit of goods across international shipping routes.',
    specs: [
      { label: 'Thickness', value: '4mm – 12mm' },
      { label: 'GSM', value: '800 – 2500 GSM' },
      { label: 'Size', value: 'Custom Die-Cut Available' },
      { label: 'Colors', value: 'Natural, White, Custom Colors' },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            Our Products
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto">
            Premium PP corrugated products engineered for durability, customized to your specifications, and exported worldwide.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{product.name}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-5">{product.description}</p>

                {/* Specs Table */}
                <div className="border border-navy/10 rounded-xl overflow-hidden">
                  <div className="bg-navy px-4 py-2">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">Specifications</span>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map((spec, idx) => (
                        <tr
                          key={spec.label}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-navy/3'}
                        >
                          <td className="px-4 py-2.5 font-semibold text-navy/70 border-b border-navy/5 w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-4 py-2.5 text-navy/80 border-b border-navy/5">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-5 w-full bg-navy text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-navy-dark transition-colors duration-200 border border-transparent hover:border-gold/30"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
