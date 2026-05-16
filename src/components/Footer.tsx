import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png`}
                alt="3x0Tech Solutions"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold tracking-tight font-display">
                3x0Tech Solutions Ltd<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Software that works. Built in Nigeria, made for businesses everywhere.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/PrinceAdedapo6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-muted hover:border-primary/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://ng.linkedin.com/in/ismail-adedapo-7b84a7190"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-muted hover:border-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://www.facebook.com/p/3x0Tech-Solutions-100089180495872/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-muted hover:border-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Github className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', path: '/about' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-3">
              {[
                'PYE — AI Assistant',
                'Orbityx — HR Suite',
                'Quicksum — Accounting',
                'Step-Code — Learning',
                'CampusCafe — Printing',
              ].map(product => (
                <li key={product}>
                  <span className="text-sm text-muted-foreground">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">info@3x0techsolutionsltd.com.ng</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">+234 816 443 5695</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">22 Charity Avenue, Sango Ota, Ogun State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} 3x0Tech Solutions Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with care in Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;