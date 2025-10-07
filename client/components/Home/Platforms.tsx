import {
  Code,
  Shield,
  Folder,
  Server,
  Folders,
  Terminal,
  GitBranch,
  FlaskConical,
} from "lucide-react";

import Blaze from "./Platforms/Blaze";
import Flame from "./Platforms/Flame";
import PlatformHeader from "./Platforms/PlatformHeader";
import PlatformFeature from "./Platforms/PlatformFeature";

export default function Platforms() {
  return (
    <section className="grid grid-cols-1 items-center justify-stretch gap-16 py-20">
      <div className="mx-auto grid w-[1000px] grid-cols-1 items-center justify-center gap-10">
        <PlatformHeader title="Build. Commit. Ship." command="run blaze" />

        <Blaze />

        <div className="relative grid grid-cols-2 place-items-center items-center justify-center justify-items-center">
          <PlatformFeature
            className="border border-t-2 border-l-2 border-white/5"
            icon={Folder}
            title="Project Explorer"
            description="Navigate your project tree with ease. Create, delete, and organize files directly in your terminal."
          />

          <PlatformFeature
            className="border border-t-2 border-r-2 border-white/5"
            icon={Code}
            title="Inspect, Edit, Save"
            description="Stay focused with a clean editor and syntax-aware preview panel, designed for speed and clarity."
          />

          <PlatformFeature
            className="border border-b-2 border-l-2 border-white/5"
            icon={GitBranch}
            title="Git Integration"
            description="Version control, simplified. Stage, commit, and review changes seamlessly."
          />

          <PlatformFeature
            className="border border-r-2 border-b-2 border-white/5"
            icon={Terminal}
            title="Command-Line"
            description="A powerful in-editor command line lets you run tasks, initialize projects, and stay focused."
          />

          <div className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      <div className="mx-auto grid w-[1000px] grid-cols-1 items-center justify-center gap-10">
        <PlatformHeader title="Fast. Precise. Reliable." command="run flame" />

        <Flame />

        <div className="relative grid grid-cols-2 place-items-center items-center justify-center justify-items-center">
          <PlatformFeature
            className="border border-t-2 border-l-2 border-white/5"
            icon={Folders}
            title="Organized Collections"
            description="Group your APIs into collections to keep related endpoints together and streamline your workflow."
          />

          <PlatformFeature
            className="border border-t-2 border-r-2 border-white/5"
            icon={Server}
            title="Flexible Request Builder"
            description="Create and configure HTTP requests with custom headers, bodies, and query parameters."
          />

          <PlatformFeature
            className="border border-b-2 border-l-2 border-white/5"
            icon={FlaskConical}
            title="Instant Testing & Feedback"
            description="Inspect responses in real time, including status codes, headers, and bodies for quick debugging."
          />

          <PlatformFeature
            className="border border-r-2 border-b-2 border-white/5"
            icon={Shield}
            title="Complete Control"
            description="Handle every aspect of your API requests, from authentication to parameters, ensuring full control."
          />

          <div className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
