import { FaFile } from "react-icons/fa6";

interface FileProps {
  name: string;
  active?: boolean;
}

export default function File({ name, active = false }: FileProps) {
  return (
    <div
      className={`flex items-center justify-start gap-1.5 ${active ? "bg-mantle/60" : "bg-transparent"}`}
    >
      <FaFile className="text-text w-2.5" />
      <p className="text-text text-sm font-light">{name}</p>
    </div>
  );
}
