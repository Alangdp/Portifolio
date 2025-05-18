import { cn } from "@/lib/utils";

export default function Navbar() {
  const path = window.location.pathname;

  console.log(path)

  return (
    <header className="w-full font-bold">
      <nav className="flex items-center justify-between container mx-auto h-[56px] w-full">
        <a
          href="/"
          className="ml-4 md:ml-0 font-semibold text-2xl hover:opacity-60 duration-300 text-white"
        >
          Á
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/"
            className={cn('text-lg hover:opacity-60 duration-300 text-white font-w450', path === "/" ? 'font-semibold flex gap-1 before:content-["["] before:text-yellow-400 after:content-["]"] after:text-yellow-400' : '')}
          >
            {path === "/" ? 'Home' : '_Home'}
          </a>
          <a
            href="/projetos"
            className={cn('text-lg hover:opacity-60 duration-300 text-white font-w450', path === "/projetos" ? 'font-semibold flex gap-1 before:content-["["] before:text-yellow-400 after:content-["]"] after:text-yellow-400' : '')}
          >
            {path === "/projetos" ? 'Projetos' : '_Projetos'}
          </a>
          <a
            href="/stacks"
            className={cn('text-lg hover:opacity-60 duration-300 text-white font-w450', path === "/stacks" ? 'font-semibold flex gap-1 before:content-["["] before:text-yellow-400 after:content-["]"] after:text-yellow-400' : '')}
          >
            {path === "/stacks" ? 'Stack' : '_Stack'}
          </a>
        </div>
      </nav>
    </header>
  );
}
