import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="text-sm">Calle 148 Nº 1531 - Berazategui (1884)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span className="text-sm">Turnos al Tel.: 11-4256-1035</span>
            </div>
          </div>
          <div className="text-xs text-primary-foreground/80">
            © Copyright 2026 ® - Todos los derechos reservados - Desarrollado por Alejandro Burchiski
          </div>
        </div>
      </div>
    </footer>
  )
}