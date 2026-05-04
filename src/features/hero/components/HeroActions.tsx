import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { HeroAction } from "../types"

interface HeroActionsProps {
  actions?: HeroAction[]
}

export function HeroActions({ actions }: HeroActionsProps) {
  if (!actions?.length) return null

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
      {actions.map((action, index) => {
        const Icon = action.icon

        return (
          <Button
            key={index}
            size="lg"
            variant={action.variant ?? "default"}
            asChild
            className={
              action.variant === "outline"
                ? "bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                : undefined
            }
          >
            <Link href={action.href} className="flex items-center gap-2">
              {Icon && <Icon className="h-5 w-5" />}
              {action.label}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}