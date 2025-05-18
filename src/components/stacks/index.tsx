import GridBackground from "../background";
import Body from "../body";
import Footer from "../footer";
import Main from "../main";
import Navbar from "../navbar";
import Card from "./card";

import { getIcon } from "@/assets/icons/icons";

export default function Stacks() {
  return (
    <Body>
      <GridBackground />
      <Navbar />
      <Main>
        <main className="h-full mx-4 lg:mx-0">
          <section className="pt-6 md:pt-11">
            <p className="text-[#607b96] inline-block max-w-[694px]">
              // Minhas principais tecnologias e ferramentas
            </p>
            <p className="mt-2">
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-indigo-500">
                const
              </span>
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-yellow-400">
                Habilidades
              </span>
              <span className="font-medium text-xl md:text-3xl break-words pr-2 text-white">
                =
              </span>
              <span className="font-medium text-xl md:text-3xl break-words text-indigo-500">
                Stacks
              </span>
              <span className="font-medium text-xl md:text-3xl break-words text-white">[]</span>
            </p>
          </section>

          {/* Placeholder for Stacks content - you can replace this with your actual stack items */}
          <div className="pt-12 md:pt-20 pb-12 md:pb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card name="Java" icon={getIcon("java")} description="Linguagem robusta e multiplataforma para aplicações diversas." />
                <Card name="Spring Boot" icon={getIcon("springboot")} description="Framework Java para criação de APIs e microsserviços." />
                <Card name="COBOL" icon={getIcon("cobol")} description="Linguagem tradicional para sistemas bancários e corporativos." />
                <Card name="Node.js" icon={getIcon("nodejs")} description="Ambiente de execução JavaScript server-side." />
                <Card name="TypeScript" icon={getIcon("typescript")} description="Superset do JavaScript que adiciona tipagem." />
                <Card name="JavaScript" icon={getIcon("javascript")} description="Linguagem de programação para web e servidores." />
                <Card name="Go" icon={getIcon("go")} description="Linguagem eficiente e concorrente desenvolvida pelo Google." />
                <Card name="Tailwind CSS" icon={getIcon("tailwind")} description="Framework utilitário para estilização rápida e responsiva." />
                <Card name="CSS3" icon={getIcon("css3")} description="Estilização avançada para interfaces web." />
              </div>
          </div>
        </main>
      </Main>
      <Footer /> {/* Added Footer component */}
    </Body>
  );
}