import HeaderButton from "./Header/HeaderButton";

import GridBackground from "../Common/Background/GridBackground";

export default function Header() {
  return (
    <GridBackground className="z-0 grid grid-cols-1 items-center justify-center">
      <div className="relative z-10 mx-auto grid w-fit grid-cols-1 items-center justify-center gap-8">
        <div className="grid grid-cols-1 items-center justify-center">
          <h1 className="text-gradient-faded text-center text-7xl font-extrabold tracking-tight">
            THE TERMINAL TOOLKIT
          </h1>

          <h1 className="text-gradient-faded text-center text-7xl font-extrabold tracking-tight">
            FOR DEVELOPERS
          </h1>
        </div>

        <p className="text-center text-2xl font-light tracking-tight text-[#ffffff60]">
          A{" "}
          <span className="text-white opacity-80">Command Line Interface</span>{" "}
          designed for developer productivity. <br />
          Experience a Code Editor and API Testing Suite directly in your
          terminal.
        </p>

        <div className="flex items-center justify-center gap-3">
          <HeaderButton
            className="border-foreground bg-foreground text-background border"
            href="/docs"
            label="Documentation"
          />

          <HeaderButton
            className="border-foreground/15 bg-background text-foreground border"
            href="/docs"
            label="Download Ember"
          />
        </div>
      </div>
    </GridBackground>
  );
}
