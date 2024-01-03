import { Cog, LifeBuoy, Search } from 'lucide-react';
import { Logo } from "../Logo";
import { MainNavigation } from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import { Profile } from './Profile';
import { UsedSpaceWidget } from './UsedSpaceWidget';

export function SideBar() {

  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />

      <div className="flex gap-2 w-full items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500" />
        <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none" placeholder="Search" />
      </div>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className='space-y-0.5'>
          <NavItem title='Support' icon={LifeBuoy} />
          <NavItem title='Settings' icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}