import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Head */}
        <div className="text-left max-w-3xl mb-16">
          <span className="eyebrow">Services Portfolio</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-ink dark:text-white leading-tight">
            Comprehensive IT Solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary dark:to-accent bg-clip-text text-transparent">
              Businesses & Schools
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink-muted dark:text-white/70 leading-relaxed">
            We provide structured, high-quality development, hosting, and marketing solutions. Each service category is delivered by dedicated specialists and backed by transparent SLA timelines.
          </p>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-soft-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`}
              >
                
                {/* Visual / Title Block */}
                <div className={`lg:col-span-5 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-accent mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-ink-muted dark:text-white/70 leading-relaxed">
                    {service.details.overview}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-semibold px-3 py-1 bg-bg dark:bg-navy rounded-full text-ink-muted dark:text-white/60 border border-line dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope of Deliverables Block */}
                <div className={`lg:col-span-7 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'} h-full justify-between`}>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-accent font-mono mb-4">
                      Core Features & Deliverables
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-ink-muted dark:text-white/80">
                          <Check className="w-4 h-4 text-[#2FCB7B] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Segment */}
                    <div className="mt-8">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-muted dark:text-white/50 font-mono mb-3">
                        Tech Stack & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.details.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-3 py-1.5 bg-slate-50 dark:bg-navy border border-line dark:border-white/10 rounded-lg text-ink dark:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Consultation prompt */}
                  <div className="mt-8 pt-6 border-t border-line dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-ink-muted dark:text-white/60">
                      Need custom specifications for {service.title}? Let\'s build the roadmap.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-bold text-sm bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                      Book a consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
