import NavbarLogo from "./Navbar/NavbarLogo";
import NavbarLink from "./Navbar/NavbarLink";
import NavbarButton from "./Navbar/NavbarButton";
import NavbarSearch from "./Navbar/NavbarSearch";

export default function Navbar() {
  return (
    <nav className="bg-background fixed top-0 z-[100] flex w-full items-center justify-between overflow-hidden border-b border-b-white/5 p-4">
      <div className="flex items-center justify-center gap-10">
        <NavbarLogo />

        <div className="flex items-center justify-center gap-5">
          <NavbarLink href="/" label="Tools" />
          <NavbarLink href="/" label="Features" />
          <NavbarLink href="/" label="Development" />
          <NavbarLink href="/" label="Contributions" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5">
        <NavbarSearch href="/" label="Open Terminal" shortcut="~" />
        <NavbarButton href="/" label="GITHUB" />
      </div>
    </nav>
  );
}
