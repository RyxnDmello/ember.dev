import { LucideIcon } from "lucide-react";

interface PlatformFeatureProps {
  title: string;
  icon: LucideIcon;
  className?: string;
  description: string;
}

export default function PlatformFeature({
  title,
  className,
  icon: Icon,
  description,
}: PlatformFeatureProps) {
  return (
    <div
      className={`${className} grid grid-cols-1 items-center justify-start gap-4 bg-[#0e0e0e] p-10 px-8`}
    >
      <Icon className="h-6 w-6 text-[#e7c59a]" />

      <div className="grid grid-cols-1 items-center justify-start gap-2">
        <h3 className="text-xl font-light tracking-wide">{title}</h3>

        <p className="text-lg leading-tight font-light tracking-wide text-white/55">
          {description}
        </p>
      </div>
    </div>
  );
}
