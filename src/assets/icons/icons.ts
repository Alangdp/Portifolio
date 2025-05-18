
import java from "./java.svg";
import nodejs from "./nodejs.svg";
import typescript from "./typescript.svg";
import javascript from "./javascript.svg";
import go from "./go.svg";
import cobol from "./cobol.svg";

import springboot from "./springboot.svg";
import tailwind from "./tailwind.svg";
import css3 from "./css3.svg";

// Type seguro para os nomes dos ícones
export type IconName =
  | "java"
  | "springboot"
  | "cobol"
  | "nodejs"
  | "typescript"
  | "javascript"
  | "go"
  | "tailwind"
  | "css3";

// Mapeamento dos ícones
const icons: Record<IconName, string> = {
  java,
  springboot,
  cobol,
  nodejs,
  typescript,
  javascript,
  go,
  tailwind,
  css3,
};

// Função para obter o caminho do ícone com base no nome
export function getIcon(name: IconName): string {
  return icons[name];
}
