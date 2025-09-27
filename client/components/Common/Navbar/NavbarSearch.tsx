import Link from "next/link";

interface NavbarSearchProps {
  href: string;
  label: string;
  shortcut: string;
}

export default function NavbarSearch({
  href,
  label,
  shortcut,
}: NavbarSearchProps) {
  return (
    <Link
      className="relative flex w-[250px] cursor-pointer items-center justify-between rounded border border-white/10 py-1.5 pr-2 pl-2.5"
      href={href}
    >
      <p className="text-sm font-light tracking-wide text-white/50">{label}</p>

      <p className="rounded border-1 border-white/10 px-2 text-sm font-light tracking-wide text-white/50">
        {shortcut}
      </p>
    </Link>
  );
}
