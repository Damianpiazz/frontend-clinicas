interface HeroHeadingProps {
  title: string
  subtitle?: string
  description?: string
}

export function HeroHeading({
  title,
  subtitle,
  description,
}: HeroHeadingProps) {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4">
        {title}
      </h1>

      {subtitle && (
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-2">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </>
  )
}