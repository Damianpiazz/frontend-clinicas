import { HeroHeading } from "./HeroHeading"
import { HeroActions } from "./HeroActions"
import { HeroInfo } from "./HeroInfo"
import type { HeroSectionProps } from "../types"

export function HeroSection({
  title,
  subtitle,
  description,
  actions,
  infoText,
  infoIcon,
}: HeroSectionProps) {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <HeroHeading
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <HeroActions actions={actions} />

        <HeroInfo text={infoText} icon={infoIcon} />
      </div>
    </section>
  )
}