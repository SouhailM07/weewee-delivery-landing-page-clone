import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../../../types";
import MyButton from "../../atoms/MyButton/MyButton";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import logo from "/logo.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const links: navLinks[] = [
    { label: "Accueil", link: "" },
    { label: "À propos", link: "" },
    { label: "Nos services", link: "" },
    { label: "Blog", link: "" },
    { label: "Contact", link: "" },
  ];
  const [shrink, setShrink] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 180) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <header
      className={`${
        shrink ? "py-[0.7rem]" : "py-[1rem]"
      } sticky top-0 bg-white z-[100] shadow-md duration-300 transition-all`}
    >
      <nav className="text-txtBlue max-w-[56rem] mx-auto flexBetween">
        <div className="flexCenter gap-x-2">
          <img src={logo} alt="logo" />
          <span className="text-[1.5rem] font-bold">WeeWee</span>
        </div>
        <div className="flex gap-x-[1.7rem] items-center  text-[0.8rem] font-bold">
          <ul role="list" className="flex gap-x-[1.7rem]">
            <ReactArr
              arr={links}
              Component={(e: navLinks) => (
                <a href={`#${e.link}`} className="hover:text-mainBlue">
                  {e.label}
                </a>
              )}
            />
            <li role="listitem" className="flexCenter gap-x-2 cursor-pointer">
              <span className="hover:text-mainBlue">Creer un compte</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-[0.7rem]" />
            </li>
          </ul>
          <MyButton hoverEffect className="py-[0.4rem] px-4">
            Espace Membre
          </MyButton>
        </div>
      </nav>
    </header>
  );
}
