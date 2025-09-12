import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  label: string;
}

export default function NavbarLink({ href, label }: NavbarLinkProps) {
  return (
    <Link
      className="text-sm font-light tracking-wide text-white/50 transition-colors duration-200 hover:text-white"
      href={href}
    >
      {label}
    </Link>
  );
}
