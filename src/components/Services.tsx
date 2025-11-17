import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Briefcase, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Consultoría Legal",
      description: "Asesoramiento estratégico para empresas y particulares. Análisis de riesgos, cumplimiento normativo y planificación legal integral."
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description: "Representación en conflictos laborales, negociación de contratos, despidos y defensa de derechos de trabajadores y empleadores."
    },
    {
      icon: Home,
      title: "Derecho Civil",
      description: "Asistencia en contratos, herencias, derecho de familia, propiedad y resolución de disputas civiles con enfoque personalizado."
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
