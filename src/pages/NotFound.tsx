import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-5">Page Not Found</p>
        <h1 className="font-display text-7xl md:text-9xl text-foreground/8 mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">
          This page doesn't exist
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
          The page you're looking for may have been moved or removed. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:bg-navy-light transition-all shadow-soft"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            to="/services#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:bg-background transition-all"
          >
            <ArrowLeft size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
