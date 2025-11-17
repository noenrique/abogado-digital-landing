import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. María González",
      position: "Socia Fundadora - Derecho Civil",
      bio: "Especialista en derecho civil con más de 15 años de experiencia. Graduada con honores de la Universidad Nacional, ha liderado casos complejos de familia y propiedad.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Carlos Mendoza",
      position: "Socio - Derecho Laboral",
      bio: "Experto en derecho laboral y conflictos empresariales. Con amplia trayectoria defendiendo tanto a trabajadores como empresas en casos de alta complejidad.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
    },
    {
      name: "Dra. Ana Martínez",
      position: "Abogada Senior - Consultoría Legal",
      bio: "Especializada en asesoramiento estratégico y cumplimiento normativo. Asesora a empresas nacionales e internacionales en planificación legal y gestión de riesgos.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Roberto Campos",
      position: "Abogado - Derecho Civil y Familia",
      bio: "Comprometido con la defensa de los derechos familiares y la resolución pacífica de conflictos. Enfoque empático y resultados orientados al bienestar de sus clientes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="equipo" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Nuestro Equipo Legal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales altamente calificados con años de experiencia comprometidos con la excelencia y el servicio personalizado
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-shadow hover:scale-105 transition-transform duration-300 border-border overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <h3 className="font-serif text-xl text-foreground">{member.name}</h3>
                <p className="text-sm text-accent font-medium">{member.position}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
