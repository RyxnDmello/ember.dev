import NavbarLogo from "./Navbar/NavbarLogo";
import NavbarLink from "./Navbar/NavbarLink";
import NavbarButton from "./Navbar/NavbarButton";
import NavbarSearch from "./Navbar/NavbarSearch";

interface NavbarProps {
  onTerminal: () => void;
}

export default function Navbar({ onTerminal }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between border-b border-b-white/5 p-4">
      <NavbarLogo />

      <div className="flex items-center justify-center gap-5">
        <NavbarLink href="/" label="Tools" />
        <NavbarLink href="/" label="Features" />
        <NavbarLink href="/" label="Development" />
        <NavbarLink href="/" label="Contributions" />
      </div>

      <div className="flex items-center justify-center gap-2.5">
        <NavbarSearch label="Open Terminal" shortcut="~" onClick={onTerminal} />
        <NavbarButton href="/" label="GITHUB" />
      </div>
    </nav>
  );
}
