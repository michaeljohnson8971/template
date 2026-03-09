import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Work & Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between h-18 px-6 lg:px-8 py-4">
        <Link to="/home" className="flex items-baseline gap-1 group">
          <span className="font-display text-2xl tracking-[0.04em] text-foreground group-hover:text-terracotta transition-colors">
            DABL
          </span>
          <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                location.pathname === item.path ? "text-terracotta" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/services#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-navy-light transition-all shadow-soft"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/60 px-6 pb-6 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3.5 text-base font-medium border-b border-border/30 ${
                location.pathname === item.path ? "text-terracotta" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/services#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block text-center text-sm font-medium bg-primary text-primary-foreground px-5 py-3 rounded-full"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
