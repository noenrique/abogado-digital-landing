import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-accent" />
            <span className="font-serif font-bold">Bufete Legal</span>
          </div>
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Bufete Legal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
