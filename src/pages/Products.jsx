import { productsData } from '../data/products';
import { Check, ShieldAlert, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header segment */}
        <div className="text-left max-w-3xl mb-16">
          <span className="eyebrow">Product Suite</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-ink dark:text-white leading-tight">
            Ready-to-Deploy{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary dark:to-accent bg-clip-text text-transparent">
              Enterprise Platforms
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink-muted dark:text-white/70 leading-relaxed">
            Discover our proprietary software systems built specifically to optimize school workflows, talent examinations, and retail business operations in India.
          </p>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 gap-12">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Product Cover Screenshot */}
              <div className="lg:col-span-5 relative bg-slate-100 dark:bg-navy/40 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-line dark:border-white/10 min-h-[260px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover object-center border border-line dark:border-white/5"
                />
                {product.id === 'wings-of-fire-olympiad' && (
                  <span className="absolute top-4 left-4 bg-accent text-navy text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                    Initiative
                  </span>
                )}
              </div>

              {/* Product Info Block */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-ink dark:text-white font-sora">
                    {product.title}
                  </h2>
                  <p className="text-primary dark:text-accent font-medium text-sm mt-1">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-ink-muted dark:text-white/70 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Split grid for features and benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary dark:text-accent font-mono mb-3">
                        Key Features
                      </h3>
                      <ul className="flex flex-col gap-2 text-xs sm:text-sm text-ink-muted dark:text-white/80">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Zap className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#2FCB7B] font-mono mb-3">
                        Business Benefits
                      </h3>
                      <ul className="flex flex-col gap-2 text-xs sm:text-sm text-ink-muted dark:text-white/80">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#2FCB7B] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer specs / CTA */}
                <div className="mt-8 pt-6 border-t border-line dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {product.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-bg dark:bg-navy text-ink-muted dark:text-white/60 border border-line dark:border-white/5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    Request Live Demo
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
