import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground">
          Contacto
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-foreground">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <Card className="border-border">
                  <CardContent className="flex items-center gap-4 py-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+34 912 345 678</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-center gap-4 py-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@bufetelegal.es</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="flex items-center gap-4 py-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">
                        Calle Gran Vía 45, 3º<br />
                        28013 Madrid, España
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-muted-foreground">
              <p className="mb-2">Horario de atención:</p>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6 text-foreground">
              Envíenos un Mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
