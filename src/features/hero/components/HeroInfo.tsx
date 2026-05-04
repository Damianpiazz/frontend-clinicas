import type { LucideIcon } from "lucide-react"

interface HeroInfoProps {
  text?: string
  icon?: LucideIcon
}

export function HeroInfo({ text, icon: Icon }: HeroInfoProps) {
  if (!text) return null

  return (
    <div className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 bg-primary-foreground/10 px-4 py-2 rounded-full">
      {Icon && <Icon className="h-4 w-4" />}
      <span>{text}</span>
    </div>
  )
}