import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Empresaria",
      content: "Excelente atención y profesionalismo. Resolvieron mi caso laboral de manera rápida y efectiva. Totalmente recomendados."
    },
    {
      name: "Carlos Rodríguez",
      role: "Particular",
      content: "El equipo demostró un conocimiento profundo del derecho civil. Me guiaron en cada paso del proceso de herencia con claridad y paciencia."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow border-border">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
