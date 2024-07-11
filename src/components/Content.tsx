import { useState } from "react";

import Sobre from "../pages/Sobre";
import Projetos from "../pages/Projetos";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import FotoPerfil from "../assets/foto-perfil.png";

export default function Content() {
  const [activePage, setActivePage] = useState("Sobre");

  const renderContent = () => {
    switch (activePage) {
      case "Sobre":
        return <Sobre />;
      case "Projetos":
        return <Projetos />;
      default:
        return <Sobre />;
    }
  };
  return (
    <section className="flex w-full h-full">
      <menu className=" w-2/6 flex flex-col justify-between items-center cursor-default bg-[#222222]">
        <div className="w-full h-[270px] flex flex-col items-center p-4 gap-5">
          <img
            src={FotoPerfil}
            alt="Minha imagem"
            className="border-[1px] rounded-full w-28 object-contain mt-10"
          />
          <div className="w-full flex flex-col items-center gap-1">
            <h1 className="text-2xl">Leonardo Rodrigues</h1>
            <p className="text-xs text-[#ff540b]">Full Stack Developer</p>
          </div>
        </div>

        <nav className="w-full h-[270px]">
          <ul className="w-full h-full flex flex-col items-center justify-center gap-6">
            <li>
              {" "}
              <button
                onClick={() => setActivePage("Sobre")}
                className={`relative px-4 py-2 ${
                  activePage === "Sobre"
                    ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#ff540b]'
                    : ""
                }`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("Projetos")}
                className={`relative px-4 py-2 ${
                  activePage === "Projetos"
                    ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#ff540b]'
                    : ""
                }`}
              >
                Projetos
              </button>
            </li>
          </ul>
        </nav>

        <div className="w-full h-[270px] p-4">
          <ul className="grid grid-cols-3 w-full h-full justify-items-center items-end pb-10">
            <li>
              <FaLinkedin size={30} color="#79b6c9" />
            </li>
            <li>
              <FaGithub size={30} />
            </li>
            <li>
              <AiOutlineMail size={30} />
            </li>
          </ul>
        </div>
      </menu>

      <main className="w-5/6 h-full bg-[#151515]">
        <div className="w-full h-full p-10">{renderContent()}</div>
      </main>
    </section>
  );
}
