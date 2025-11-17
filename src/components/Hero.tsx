import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient text-primary-foreground pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fade-in">
          Experiencia Legal de Confianza
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Protegemos sus derechos con profesionalismo y dedicación. 
          Más de 20 años de experiencia brindando soluciones legales efectivas.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground gold-glow text-lg px-8"
        >
          Consulta Gratuita
        </Button>
      </div>
    </section>
  );
};

export default Hero;
