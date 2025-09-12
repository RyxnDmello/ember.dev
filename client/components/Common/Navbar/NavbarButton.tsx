import Link from "next/link";

interface NavbarButtonProps {
  href: string;
  label: string;
}

export default function NavbarButton({ href, label }: NavbarButtonProps) {
  return (
    <Link
      className="font-orbitron relative rounded-sm bg-white px-3 py-1.5 text-sm font-medium tracking-wide text-black"
      href={href}
    >
      {label}
    </Link>
  );
}
