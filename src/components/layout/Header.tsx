import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Prozess", href: "#prozess" },
    { label: "Galerie", href: "/galerie" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border/10">
      {/* Top Bar */}
      <div className="hidden md:block bg-dellen-dark py-2">
        <div className="container-narrow flex justify-between items-center text-sm text-secondary-foreground/80">
          <div className="flex items-center gap-6">
            <a href="tel:+491234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+49 123 456 7890</span>
            </a>
            <a href="mailto:info@dellenmann.de" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@dellenmann.de</span>
            </a>
          </div>
          <div className="text-secondary-foreground/60">
            Mo-Fr: 08:00 - 18:00 | Sa: 09:00 - 14:00
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-narrow py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="DellenMann Logo" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-secondary-foreground/90 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-secondary-foreground/90 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection("#kontakt")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold btn-glow-red"
            >
              Schaden melden
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-secondary-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-secondary-foreground/90 hover:text-primary font-medium transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-secondary-foreground/90 hover:text-primary font-medium transition-colors py-2 text-left"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button 
                onClick={() => scrollToSection("#kontakt")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
              >
                Schaden melden
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
