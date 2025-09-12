"use client";

interface NavbarSearchProps {
  label: string;
  shortcut: string;
  onClick: () => void;
}

export default function NavbarSearch({
  label,
  shortcut,
  onClick,
}: NavbarSearchProps) {
  return (
    <button
      className="relative flex w-[250px] cursor-pointer items-center justify-between rounded border border-white/10 py-1.5 pr-2 pl-2.5"
      type="button"
      onClick={onClick}
    >
      <p className="text-sm font-light tracking-wide text-white/50">{label}</p>

      <p className="rounded border-1 border-white/10 px-2 text-sm font-light tracking-wide text-white/50">
        {shortcut}
      </p>
    </button>
  );
}
