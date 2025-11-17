const About = () => {
  return (
    <section id="nosotros" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
          Sobre Nosotros
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Somos un bufete legal con más de dos décadas de trayectoria, comprometidos 
          con la excelencia y la defensa de los derechos de nuestros clientes.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Nuestro equipo de abogados especializados combina experiencia, conocimiento 
          actualizado y un trato cercano para brindar soluciones legales efectivas y 
          personalizadas en cada caso.
        </p>
      </div>
    </section>
  );
};

export default About;
