import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-navy dark:bg-black/40 text-white/80 border-t border-white/[0.05] pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info & Newsletter */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold text-lg">
                C
              </div>
              <div>
                <span className="font-sora font-extrabold text-base text-white tracking-tight leading-none block">
                  Calibers InfoTech
                </span>
                <span className="font-mono text-[9.5px] font-medium tracking-wider text-white/50 uppercase leading-none block mt-0.5">
                  Real-Time IT Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              A Real-Time Innovation. Building websites, applications, and enterprise systems optimized for business growth and operational follow-through since 2008.
            </p>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono mb-3">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/[0.06] border border-white/[0.12] rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent w-full transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-accent mt-2 animate-pulse">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/services#web-development" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  Web Development <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/services#mobile-app-development" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  Mobile Apps <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/services#software-development" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  Software Development <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/services#ui-ux-design" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  UI/UX Design <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/services#cloud-services" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  Cloud Deployments <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-white hover:underline transition-all">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white hover:underline transition-all">
                  Product Showcase
                </Link>
              </li>
              <li>
                <Link to="/student-corner" className="hover:text-white hover:underline transition-all">
                  Student Corner
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white hover:underline transition-all">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono mb-1">Corporate Office</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>
                  Nashik Road, Nashik,<br />Maharashtra, India - 422101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919422274325" className="hover:text-white transition-colors">
                  +91 94222 74325
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@calibersinfotech.com" className="hover:text-white transition-colors">
                  info@calibersinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
          <span>© 2026 Calibers InfoTech. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
