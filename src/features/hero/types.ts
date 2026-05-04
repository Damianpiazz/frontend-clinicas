import type { LucideIcon } from "lucide-react"

export type HeroAction = {
  label: string
  href: string
  icon?: LucideIcon
  variant?: "default" | "secondary" | "outline"
}

export interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  actions?: HeroAction[]
  infoText?: string
  infoIcon?: LucideIcon
}