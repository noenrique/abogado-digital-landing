import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Briefcase, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Consultoría Legal",
      description: "Asesoramiento estratégico integral para empresas y particulares en todas las áreas del derecho. Nuestros expertos realizan análisis exhaustivos de riesgos legales, aseguran el cumplimiento normativo completo y desarrollan estrategias de planificación legal a largo plazo. Ofrecemos soluciones preventivas que protegen sus intereses, minimizan riesgos y optimizan la toma de decisiones empresariales con total respaldo jurídico."
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Representación especializada en todos los aspectos del derecho laboral, tanto para trabajadores como para empleadores. Gestionamos conflictos laborales, negociamos y redactamos contratos de trabajo, asesoramos en procesos de despido y reestructuración, y defendemos activamente los derechos de nuestros clientes ante tribunales laborales. Nuestro enfoque busca soluciones equilibradas que protejan los intereses legales y promuevan relaciones laborales justas y sostenibles."
    },
    {
      icon: Home,
      title: "Derecho Civil",
      description: "Asistencia legal completa en todas las materias del derecho civil con un enfoque personalizado y cercano. Ofrecemos asesoramiento en redacción y revisión de contratos, gestión de herencias y sucesiones, asuntos de derecho de familia incluyendo divorcios y custodias, transacciones de propiedad inmobiliaria, y resolución efectiva de disputas civiles mediante negociación, mediación o litigio. Cada caso recibe atención individualizada para garantizar los mejores resultados."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:scale-105 transition-transform duration-300 border-border">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
