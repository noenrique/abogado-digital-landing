import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-accent" />
          <span className="text-xl font-serif font-bold text-foreground">
            Bufete Legal
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Nosotros
          </button>
          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground gold-glow"
          >
            Contacto
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
