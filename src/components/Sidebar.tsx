import FotoPerfil from "../assets/foto-perfil.png";
import { SiKotlin, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaNodeJs, FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Sidebar() {
  return (
    <section className=" w-2/6 h-[830px] flex flex-col justify-between items-center cursor-default">
      <div className="h-full w-full  rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-35 border border-gray-100">
        <div className="w-full h-[270px] flex flex-col items-center p-4 gap-5">
          <img
            src={FotoPerfil}
            alt="Minha imagem"
            className="border-[1px] rounded-full w-28 object-contain mt-2"
          />
          <div className="w-full flex flex-col items-center gap-1">
            <h1 className="text-2xl">Leonardo Rodrigues</h1>
            <p className="text-xs">Full Stack Developer</p>
          </div>
        </div>

        <div className="w-full h-[270px] p-4">
          <ul className="grid grid-cols-3 w-full h-full justify-items-center items-center">
            <li>
              <SiKotlin size={30} color="magenta" />
            </li>
            <li>
              <FaNodeJs size={30} color="green" />
            </li>
            <li>
              <FaReact size={30} color="" />
            </li>
            <li>
              <SiPostgresql size={30} />
            </li>
            <li>
              <SiTypescript size={30} />
            </li>
          </ul>
        </div>

        <div className="w-full h-[270px] p-4">
          <ul className="grid grid-cols-3 w-full h-full justify-items-center items-end pb-2">
            <li>
              <FaLinkedin size={30} />
            </li>
            <li>
              <FaGithub size={30} />
            </li>
            <li>
              <AiOutlineMail size={30} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
