import { useEffect } from "react";
import SvgComponent from "../svh";
import GridBackground from "../background";
import Navbar from "../navbar";
import Body from "../body";
import Main from "../main";
import Footer from "../footer";
import { WebsiteEmbedWrapper } from "../embedPreview";

export default function Home() {
  useEffect(() => {
    function type(word: string, delay = 100) {
      let i = 0;
      let isDeleting = false;

      function loop() {
        const typewriterElement = document.getElementById("typewriter");
        if (typewriterElement) {
          if (isDeleting) {
            typewriterElement.textContent = word.substring(0, i);
            i--;
          } else {
            typewriterElement.textContent = word.substring(0, i);
            i++;
          }

          if (!isDeleting && i > word.length) {
            isDeleting = true;
            i = word.length;
          } else if (isDeleting && i === 0) {
            isDeleting = false;
            i = 0;
          }
        }

        setTimeout(loop, delay);
      }

      loop();
    }

    type("Desenvolvedor Fullstack", 300);
  }, []);

  return (
    <Body>
      <GridBackground />
      <Navbar />
      <Main>
        <main className="h-full">
          <div className="mx-4 lg:mx-0 pt-[66px] md:pt-[95px] h-fit">
            <div className="max-w-[594px]">
              <SvgComponent />
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-[20px] font-w450 text-yellow-400">&gt;</p>
              <h1
                id="typewriter"
                className="text-[20px] font-w450 text-yellow-400 md:text-[32px] relative -z-50"
              ></h1>
            </div>
            <span className="pt-11 text-[#607b96] inline-block max-w-[694px]">
              // Desenvolvedor Full Stack apaixonado por transformar conceitos
              em soluções completas e dinâmicas, com proficiência em
              desenvolvimento tanto no front-end quanto no back-end, utilizando
              HTML, CSS, JavaScript e outras tecnologias para criar interfaces
              envolventes e sistemas robustos.
            </span>
          </div>
          <div className="pt-11 mx-4 lg:mx-0 h-full">
            <div className="flex justify-between items-center">
              <p className="mb-4 max-w-[226px] break-words text-sm font-medium md:max-w-full">
                <span className="pr-2 text-lg font-medium text-indigo-500">
                  const
                </span>
                <span className="pr-2 text-lg font-medium text-yellow-400">
                  Projetos
                </span>
              </p>
              <a
                href="/projetos"
                className="text-slate-500 font-w450 hover:text-slate-200 duration-200"
              >
                // Veja todos
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-[1200px] md:h-[600px] lg:h-52 gap-4">
              <WebsiteEmbedWrapper previewUrl="https://www.example.com">
              <div
                className="hover:brightness-75 transition-all w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/image1.jpg')" }}
              ></div>
              </WebsiteEmbedWrapper>
              <div
                className="hover:brightness-75 transition-all w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/image1.jpg')" }}
              ></div>
              <div
                className="hover:brightness-75 transition-all w-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/image1.jpg')" }}
              ></div>
            </div>
          </div>
        </main>
      </Main>
      <Footer />
    </Body>
  );
}
