import { projetosData } from "../data/projetosData";

export default function CardFront() {
  return (
    <div className=" w-full max-h-[800px] overflow-y-scroll cursor-default ">
      <div className="grid grid-cols-3 gap-3 ">
        {projetosData.map((project) => {
          return (
            <div
              key={project.titulo}
              className="max-w-[280px] overflow-hidden bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100"
            >
              <img
                className="w-full h-[150px] object-contain"
                src={project.image}
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.titulo}</div>
                <p className="text-gray-700 text-base">{project.descricao}</p>
              </div>

              <div className="flex justify-around my-3 ">
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-[#ff540b]"
                >
                  View
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-[#ff540b]"
                >
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
