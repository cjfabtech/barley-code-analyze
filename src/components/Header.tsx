import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Amazing Barley</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
            <Button variant="hero" onClick={() => scrollToSection('products')}>
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Contact
              </button>
              <Button variant="hero" className="self-start" onClick={() => scrollToSection('products')}>
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;