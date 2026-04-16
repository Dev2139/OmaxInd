import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 9662512628
            </span>
            <span className="hidden sm:inline">omaxind123@gmail.com</span>
          </div>
          <span className="hidden md:inline">www.omaxind.com</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">OI</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-foreground text-lg tracking-tight">Omax</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Industries</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="accent" asChild>
            <Link to="/contact">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="accent" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Request Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
