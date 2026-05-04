import { Phone, Clock } from "lucide-react"
import { HeroSection } from "@/features/hero/components/HeroSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title="Policlínica Privada Tiscornia"
        subtitle="Centermed S.A."
        description="Centro médico con más de 30 especialidades y estudios de alta complejidad en Berazategui."
        actions={[
          {
            label: "Sacar Turno",
            href: "/turnos",
            variant: "secondary",
          },
          {
            label: "Cómo Llegar",
            href: "/ubicacion",
            variant: "secondary",
          },
          {
            label: "Login",
            href: "/login",
            variant: "secondary",
          },
        ]}
        infoText="Lunes a Viernes 8 a 20hs | Sábados 8 a 16hs"
        infoIcon={Clock}
      />
    </main>
  )
}