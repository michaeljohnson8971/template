import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work & Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 py-6">
        <Link to="/" className="group">
          <span className="font-mono text-sm tracking-[0.35em] uppercase text-foreground group-hover:text-muted-foreground transition-colors">
            DABL_STUDIO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-foreground ${
                location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/services#contact"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-8 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-4 font-mono text-xs uppercase tracking-[0.2em] border-b border-border/50 ${
                location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/services#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block text-center font-mono text-xs uppercase tracking-[0.2em] text-foreground border border-foreground px-6 py-3"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
