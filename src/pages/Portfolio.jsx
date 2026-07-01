import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Websites' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'erp', label: 'ERP Systems' },
    { value: 'ecommerce', label: 'E-Commerce' },
    { value: 'uiux', label: 'UI/UX Design' },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left max-w-2xl mb-12">
          <span className="eyebrow">Project Portfolio</span>
          <h1 className="mt-4 text-4xl font-extrabold text-ink dark:text-white">Our Case Studies</h1>
          <p className="mt-4 text-ink-muted dark:text-white/70">
            A selection of software and web systems we\'ve delivered for educational institutions and regional businesses.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === cat.value
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-navy-soft border border-line dark:border-white/10 text-ink-muted dark:text-white/70 hover:border-primary dark:hover:border-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-navy-soft border border-line dark:border-white/[0.08] rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b border-line dark:border-white/5"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary dark:text-accent uppercase tracking-widest block mb-1">
                    {project.industry} · {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-ink dark:text-white font-sora">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted dark:text-white/70 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line dark:border-white/10 flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-bg dark:bg-navy px-2 py-0.5 rounded text-ink-muted dark:text-white/60 border border-line dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
