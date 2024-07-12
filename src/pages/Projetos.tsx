import { useState } from "react";
import CardFront from "../components/CardFront";
import CardBack from "../components/CardBack";
import CardMobile from "../components/CardMobile";

export default function Project() {
  const [activePage, setActivePage] = useState("Front-End");

  const renderContent = () => {
    switch (activePage) {
      case "Front-End":
        return <CardFront />;
      case "Back-End":
        return <CardBack />;
      case "Mobile":
        return <CardMobile />;
      default:
        return <CardFront />;
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <nav className="w-full h-[50px] mb-5 pr-8">
        <ul className="border-[1px] w-full h-full flex items-center justify-evenly">
          <li>
            <button
              onClick={() => setActivePage("Front-End")}
              className={`relative px-4 py-2 ${
                activePage === "Front-End"
                  ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#ff540b]'
                  : ""
              }`}
            >
              Front-End
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Back-End")}
              className={`relative px-4 py-2 ${
                activePage === "Back-End"
                  ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#ff540b]'
                  : ""
              }`}
            >
              Back-End
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("Mobile")}
              className={`relative px-4 py-2 ${
                activePage === "Mobile"
                  ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#ff540b]'
                  : ""
              }`}
            >
              Mobile - Android
            </button>
          </li>
        </ul>
      </nav>
      {renderContent()}
    </div>
  );
}
