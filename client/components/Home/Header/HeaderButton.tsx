import Link from "next/link";

interface HeaderButtonProps {
  href: string;
  label: string;
  className?: string;
}

export default function HeaderButton({
  href,
  label,
  className,
}: HeaderButtonProps) {
  return (
    <Link
      className={`${className} rounded-md px-4 py-2.5`}
      href={href}
    >
      {label}
    </Link>
  );
}
