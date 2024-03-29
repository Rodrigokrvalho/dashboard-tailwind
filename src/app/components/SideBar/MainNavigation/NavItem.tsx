import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface Props {
  title: string;
  icon: ElementType;
}

export function NavItem({ icon: Icon, title }: Props) {

  return (
    <a href="#" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-100 transition-colors duration-300">
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 transition-colors duration-300">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-500 transition-colors duration-300" />
    </a>
  );
}