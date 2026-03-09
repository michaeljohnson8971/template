import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-mono text-sm tracking-[0.35em] uppercase mb-6">
              DABL_STUDIO
            </h3>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Economic development consultancy working with cities, nonprofits, and institutions to build stronger local economies.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-background/30">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-background/50 hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-background/50 hover:text-background transition-colors">About</Link>
              <Link to="/services" className="text-sm text-background/50 hover:text-background transition-colors">Work & Services</Link>
              <Link to="/services#contact" className="text-sm text-background/50 hover:text-background transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-background/30">
              Connect
            </h4>
            <p className="text-sm text-background/50 mb-3">
              <a href="mailto:hello@dablstudio.com" className="hover:text-background transition-colors">
                hello@dablstudio.com
              </a>
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-background/50 hover:text-background transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-background/10">
          <p className="text-xs text-background/20 font-mono tracking-wide">
            © {new Date().getFullYear()} DABL Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
