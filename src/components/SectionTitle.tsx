interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block w-12 h-[2px] bg-primary mb-4" />
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
