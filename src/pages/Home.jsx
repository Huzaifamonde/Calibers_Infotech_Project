import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Phone, Shield, Palette, Cloud, Target, ChevronDown, Check } from 'lucide-react';
import { faqData } from '../data/faq';
import { servicesData } from '../data/services';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0); // Accordion state (first one open by default)

  const stats = [
    { number: '18+', label: 'Years Since Founding (2008)', icon: Laptop },
    { number: '6', label: 'Core Service Domains', icon: Shield },
    { number: '1', label: 'Team, End-to-End Delivery', icon: Palette },
    { number: '100%', label: 'Custom-Built, Not Templated', icon: Cloud },
  ];

  const whyChooseUs = [
    { num: '01', title: 'Business Growth', desc: 'Digital, software, and web work aimed at one outcome — measurable growth for your business, not just deliverables.' },
    { num: '02', title: 'Limitless Modifications', desc: 'We stay involved after launch. Practice makes better products, and we treat revisions as part of the job.' },
    { num: '03', title: 'Extreme Perfection', desc: 'We\'re known locally for accuracy and finish. Work that speaks for itself, not just for our pitch deck.' },
    { num: '04', title: 'Client-First Experience', desc: 'Every project is shaped around what the client actually needs, not what\'s easiest for us to reuse.' },
    { num: '05', title: 'On-Time Delivery', desc: 'We take timelines seriously — every project carefully tracked against agreed milestones and cutoffs.' },
    { num: '06', title: 'Reputed in Nashik', desc: 'A known IT name in the Nashik area, built on repeat work and referrals rather than one-off projects.' },
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Analysis', desc: 'We learn your business, your users, and what "done well" actually looks like for this project.' },
    { num: '02', title: 'Design & Planning', desc: 'Wireframes and technical specs tailored to your goals — agreed before a line of code is written.' },
    { num: '03', title: 'Development & Testing', desc: 'Agile builds with continuous testing, so issues get caught early, not after launch.' },
    { num: '04', title: 'Deployment', desc: 'Smooth go-live with minimal disruption, plus walkthroughs so your team knows how to use it.' },
    { num: '05', title: 'Ongoing Support', desc: 'We stay reachable after launch — fixes, tweaks, and support as your business keeps moving.' },
  ];

  const clients = [
    'Disha Computer Institute',
    'Maratha Industrial Org.',
    'Wings of Fire Olympiad',
  ];

  return (
    <div className="overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 border-b border-line dark:border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="eyebrow">
                A Real Time Innovation · Since 2008
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-ink dark:text-white">
                IT Solutions That Actually{' '}
                <span className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary dark:to-accent bg-clip-text text-transparent">
                  Move Your Business
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-ink-muted dark:text-white/70 max-w-xl leading-relaxed">
                Calibers InfoTech builds websites, apps, and digital systems for businesses and schools across Nashik and Maharashtra — from student assessment platforms to full e‑commerce builds, designed and shipped by one accountable team.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-br from-primary to-primary-dark text-white px-6 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold text-sm bg-white dark:bg-navy-soft text-ink dark:text-white border border-line dark:border-white/10 px-6 py-3.5 rounded-full shadow-sm hover:border-primary dark:hover:border-accent hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-full px-5 py-2.5 shadow-sm text-xs sm:text-sm text-ink-muted dark:text-white/80">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span>
                  Currently powering <b>Wings of Fire Olympiad</b> — our ed‑tech initiative for Classes 3–12.
                </span>
              </div>
            </div>

            {/* Right Column Rocket visual */}
            <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] flex items-center justify-center">
              
              {/* Rocket Core */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-radial from-violet-100 to-violet-300 dark:from-navy-soft dark:to-primary/20 flex items-center justify-center shadow-lg relative">
                <div className="absolute inset-[-14px] rounded-full border border-dashed border-primary/30 dark:border-accent/30 animate-spin-slow"></div>
                <svg className="w-24 h-24 sm:w-28 sm:h-28 animate-floaty" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 5 6 9 6 13C6 16.3 8.7 19 12 19C15.3 19 18 16.3 18 13C18 9 16 5 12 2Z" fill="#7C5CFF" />
                  <circle cx="12" cy="11" r="2.4" fill="#fff" />
                  <path d="M9 18L7 22M15 18L17 22" stroke="#7C5CFF" stroke-width="1.6" stroke-linecap="round" />
                </svg>
              </div>

              {/* Floating Orbit Cards */}
              <div className="absolute top-[8%] left-0 bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink dark:text-white flex items-center gap-2 shadow-soft animate-float-1">
                <span className="w-2 h-2 rounded-full bg-[#FF6B6B]"></span> Web Dev
              </div>
              <div className="absolute top-[18%] right-0 bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink dark:text-white flex items-center gap-2 shadow-soft animate-float-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Mobile Apps
              </div>
              <div className="absolute bottom-[12%] left-[4%] bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink dark:text-white flex items-center gap-2 shadow-soft animate-float-2">
                <span className="w-2 h-2 rounded-full bg-[#2FCB7B]"></span> E-Commerce
              </div>
              <div className="absolute bottom-[4%] right-[6%] bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink dark:text-white flex items-center gap-2 shadow-soft animate-float-1">
                <span className="w-2 h-2 rounded-full bg-[#F59300]"></span> Student Corner
              </div>
            </div>

          </div>

          {/* Trust Row */}
          <div className="mt-16 pt-8 border-t border-line dark:border-white/10 text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted dark:text-white/60">
              Trusted by schools & businesses across Maharashtra
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 items-center">
              {clients.map((client, idx) => (
                <span key={idx} className="font-sora font-bold text-base md:text-lg text-ink-muted dark:text-white/40 hover:text-primary dark:hover:text-accent transition-colors duration-200">
                  {client}
                </span>
              ))}
              <span className="font-sora text-sm text-primary dark:text-accent font-semibold">
                + growing every month
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white dark:bg-navy-soft border border-line dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-soft-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center sm:border-r border-line last:border-0 dark:border-white/10 sm:last:border-0 md:px-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary dark:text-accent mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-primary-dark dark:text-accent font-sora">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-ink-muted dark:text-white/70 mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-black/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Our Solutions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              Domain Expertise We Have
            </h2>
            <p className="mt-4 text-ink-muted dark:text-white/70">
              Six areas we\'ve built real depth in — not a generic everything-shop, but a focused set of services we can stand behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] hover:border-primary/20 dark:hover:border-accent/20 rounded-3xl p-8 hover:-translate-y-1.5 transition-all duration-300 shadow-soft hover:shadow-soft-lg group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white mb-6 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-ink dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-white/70">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono font-semibold px-3 py-1 bg-bg dark:bg-navy rounded-full text-ink-muted dark:text-white/60 border border-line dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-line/50 dark:border-white/5">
                    <Link
                      to={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 font-bold text-sm text-primary dark:text-accent hover:gap-3 transition-all duration-200 cursor-pointer"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Select Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Why Select Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              Built On Follow-Through, Not Just Pitches
            </h2>
            <p className="mt-4 text-ink-muted dark:text-white/70">
              The commitments and operational standards that make our clients return project after project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] rounded-2xl p-6 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-xs font-mono font-bold text-primary dark:text-accent mb-4">
                    {item.num}
                  </div>
                  <h4 className="text-lg font-bold text-ink dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-ink-muted dark:text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Section (Contrast Dark) */}
      <section className="py-24 bg-navy dark:bg-black/60 text-white relative overflow-hidden">
        
        {/* Absolute Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,92,255,0.15),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(180,255,57,0.1),transparent_40%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow border-white/20 bg-white/5 text-purple-200">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">
              How We Deliver, Start to Finish
            </h2>
            <p className="mt-4 text-white/70">
              A standard five-stage execution pipeline applied to all project sizes to guarantee clarity and alignment.
            </p>
          </div>

          {/* Horizontal / Vertical Timeline Container */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            
            {/* Connecting line (Desktop Only) */}
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-[1px] bg-white/10"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start text-left group">
                <div className="w-10 h-10 rounded-xl bg-navy-soft border border-white/10 flex items-center justify-center font-mono text-sm text-accent mb-6 z-10 group-hover:border-accent transition-colors duration-200">
                  {step.num}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-accent transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-black/15">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] rounded-3xl shadow-soft overflow-hidden">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b last:border-0 border-line dark:border-white/10">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left flex justify-between items-center py-6 px-6 sm:px-8 font-sora font-semibold text-[15px] sm:text-base text-ink dark:text-white hover:text-primary dark:hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-primary dark:text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 max-h-0 ${isOpen ? 'max-h-[300px]' : ''}`}
                  >
                    <p className="px-6 sm:px-8 pb-6 text-sm sm:text-[14.5px] leading-relaxed text-ink-muted dark:text-white/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-soft-lg">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-white/5 -top-24 -right-16 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Want to Grow Your Business?
              </h2>
              <p className="mt-4 text-white/80 text-sm sm:text-base">
                Tell us what you\'re building — we\'ll compile a straightforward proposal, clear timelines, and direct follow-through. No jargon, no overselling.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-dark hover:bg-slate-50 font-bold px-6 py-3 rounded-full shadow-md active:scale-95 transition-all text-sm cursor-pointer"
                >
                  Book a Free Demo →
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-white/40 hover:border-white font-semibold px-6 py-3 rounded-full text-sm active:scale-95 transition-all cursor-pointer"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
