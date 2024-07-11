import { useState } from "react";

import Sobre from "../pages/Sobre";
import Projetos from "../pages/Projetos";

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
    <section className="w-5/6 h-[830px]">
      <div className="h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-35 border border-gray-100">
        <nav className="border-b-[1px] w-full h-[100px] flex items-center justify-center">
          <ul className="flex justify-evenly items-center gap-10">
            <li>
              <button
                onClick={() => setActivePage("Sobre")}
                className={`relative px-4 py-2 ${
                  activePage === "Sobre"
                    ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-blue-600'
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
                    ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-blue-600'
                    : ""
                }`}
              >
                Projetos
              </button>
            </li>
          </ul>
        </nav>

        <div className="w-full h-[730px] p-10">{renderContent()}</div>
      </div>
    </section>
  );
}
