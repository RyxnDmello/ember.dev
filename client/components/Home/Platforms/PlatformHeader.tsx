interface PlatformHeaderProps {
  title: string;
  command: string;
}

export default function PlatformHeader({
  title,
  command,
}: PlatformHeaderProps) {
  return (
    <div className="grid grid-cols-1 items-center justify-start gap-1.5">
      <p className="text-xl font-light text-white/50">
        <span className="text-[#e7c59a]">emberx</span> {command}
      </p>

      <h2 className="text-gradient-faded text-5xl font-medium">{title}</h2>
    </div>
  );
}
