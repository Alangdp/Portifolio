
interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <div className="flex-1 h-full lg:px-12 xl:container xl:px-60 min-h-[88vh]">
      <main className="h-full">
        {children}
      </main>
    </div>
  );
}
