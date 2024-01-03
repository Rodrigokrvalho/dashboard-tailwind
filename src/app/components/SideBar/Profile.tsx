import { LogOut } from "lucide-react";

interface Props {

}

export function Profile({}: Props) {

  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://github.com/rodrigokrvalho.png" alt="Rodrigo" />
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-zinc-700">Rodrigo Carvalho</span>
        <span className="text-sm text-zinc-500 truncate">rodrigos-carvalho@hotmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-200 rounded-md">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}