import { FaReact, FaNodeJs, FaAndroid, FaDocker } from "react-icons/fa";
import {
  SiKotlin,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export default function Sobre() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 cursor-default">
      <h1 className="text-4xl mb-10">Sobre</h1>
      <p className="text-xl text-justify">
        Fiquei entre os 7% melhores em um processo seletivo com mais de 5.000
        candidatos e quando o assunto é sobre colaboração em equipe e
        comunicação eficaz me destaco por ser proativo, sempre buscando soluções
        criativas e de otimizar soluções para os desafios propostos.
      </p>
      <p className="text-xl text-justify">
        Tenho experiência em trabalhar com equipes ágeis e processos bem
        definidos, alcançando resultados significativos e de crescimento não
        apenas em grupo, mas também individual e como pessoa.
      </p>
      <p className="text-xl text-justify">
        Possuo competências técnicas em Android - Kotlin, Jetpack Compose,
        Node.js - JavaScript e TypeScript, RESTful API's, React, SQL e Docker.
        Sempre busco me atualizar com as tendências do mercado e gosto muito de
        boas práticas de desenvolvimento alinhado com padrões de escrita bem
        definidos.
      </p>

      <div className="fixed bottom-10 right-0 w-4/6 h-[50px]">
        <ul className="flex gap-10 justify-center">
          <li title="React">
            <FaReact size={35} color="#79b6c9" />
          </li>
          <li title="Node.js">
            <FaNodeJs size={35} color="green" />
          </li>
          <li title="Android">
            <FaAndroid size={35} color="green" />
          </li>
          <li title="Docker">
            <FaDocker size={35} color="#79b6c9" />
          </li>
          <li title="Kotlin">
            <SiKotlin size={35} color="magenta" />
          </li>
          <li title="PostgreSQL">
            <SiPostgresql size={35} color="#79b6c9" />
          </li>
          <li title="JavaScript">
            <SiJavascript size={35} color="#ffff00" />
          </li>
          <li title="TypeScript">
            <SiTypescript size={35} color="#79b6c9" />
          </li>
        </ul>
      </div>
    </div>
  );
}
