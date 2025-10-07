import { FaFolder, FaFolderOpen } from "react-icons/fa6";

interface FolderProps {
  name: string;
  open?: boolean;
}

export default function Folder({ name, open = false }: FolderProps) {
  const Folder = open ? FaFolderOpen : FaFolder;

  return (
    <div className="flex items-center justify-start gap-1.5">
      <Folder className="text-text w-3.5" />
      <p className="text-text text-sm font-light">{name}</p>
    </div>
  );
}
