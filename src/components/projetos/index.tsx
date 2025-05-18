import GridBackground from "../background";
import Body from "../body";
import Footer from "../footer";
import Main from "../main";
import Navbar from "../navbar";
import Card from "./card";

export default function Projects() {
  return (
    <Body>
      <GridBackground />
      <Navbar />
      <Main>
        <main className="h-full mx-4 lg:mx-0"> 
          <section className="pt-6 md:pt-11"> 
            <p className="text-[#607b96] inline-block max-w-[694px]">
              // Alguns de meus projetos
            </p>
            <p className="mt-2"> 
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-indigo-500">
                const
              </span>
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-yellow-400">
                Projetos
              </span>
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-white">
                =
              </span>
              <span className="font-medium text-xl md:text-3xl break-words text-indigo-500">
                Projects
              </span>
              <span className="font-medium text-xl md:text-3xl break-words text-white">[]</span>
            </p>
          </section>

          <div className="pt-12 md:pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-12 md:pb-20"> {/* Responsive grid, gap, and padding */}
            <Card index={0} link="/" name="Teste 1" />
            <Card index={1} link="/" name="Teste 2" />
            <Card index={2} link="/" name="Teste 3" />
            <Card index={3} link="/" name="Teste 4" />
            <Card index={4} link="/" name="Teste 5" />
            <Card index={5} link="/" name="Teste 6" />
            <Card index={6} link="/" name="Teste 7" />
          </div>
        </main>
      </Main>
      <Footer />
    </Body>
  );
}