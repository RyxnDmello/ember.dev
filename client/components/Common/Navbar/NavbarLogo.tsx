import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/">
      <Image
        className="h-full w-5 object-cover"
        alt="logo"
        width={10000}
        height={10000}
        src="/logo/white.svg"
      />
    </Link>
  );
}
