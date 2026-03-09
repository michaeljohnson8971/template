import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">
              DABL Studio
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Economic development consultancy working with cities, nonprofits, and institutions to build stronger local economies.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-primary-foreground/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors">Work & Services</Link>
              <Link to="/services#contact" className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-primary-foreground/40">
              Connect
            </h4>
            <p className="text-sm text-primary-foreground/60 mb-3">
               <a href="mailto:hello@dablstudio.com" className="hover:text-terracotta transition-colors">
                hello@dablstudio.com
              </a>
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/60 hover:text-terracotta transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/30 text-center sm:text-left">
            © {new Date().getFullYear()} DABL Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
