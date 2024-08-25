import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../../../types";
import MyButton from "../../atoms/MyButton/MyButton";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import logo from "/logo.png";
import {
  faBars,
  faChevronDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links: navLinks[] = [
  { label: "Accueil", link: "" },
  { label: "À propos", link: "" },
  { label: "Nos services", link: "" },
  { label: "Blog", link: "" },
  { label: "Contact", link: "" },
];

let miniLinks: navLinks[] = [
  { label: "E-commercant", link: "" },
  { label: "Expediteur Public", link: "" },
  { label: "Corporate", link: "" },
  { label: "Transporteur", link: "" },
];

export default function Navbar() {
  const [shrink, setShrink] = useState<boolean>(false);
  const [toggleBar, setToggleBar] = useState<boolean>(false);
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
    <>
      <header
        className={`${
          shrink ? "py-[0.7rem]" : "py-[1rem]"
        } fixed w-full  top-0 bg-white z-[100] shadow-md duration-300 transition-all px-[1rem]`}
      >
        <nav className="text-txtBlue max-w-[56rem] mx-auto flexBetween">
          <div className="flexCenter gap-x-2">
            <img src={logo} alt="logo" />
            <span className="text-[1.5rem] font-bold">WeeWee</span>
          </div>
          <button
            className="w1200:hidden flexCenter hover:text-mainBlue"
            onClick={() => setToggleBar(true)}
            aria-label="toggle menubar btn"
          >
            <FontAwesomeIcon
              icon={faBars}
              className=" h-[1.4rem] aspect-square"
            />
          </button>
          <div className="flex max-w1200:hidden gap-x-[1.7rem] items-center  text-[0.8rem] font-bold">
            <ul role="list" className="flex gap-x-[1.7rem]">
              <ReactArr
                arr={links}
                Component={(e: navLinks) => (
                  <a href={`#${e.link}`} className="hover:text-mainBlue">
                    {e.label}
                  </a>
                )}
              />
              <li
                role="listitem"
                className="flexCenter gap-x-2 group cursor-pointer"
              >
                <span className="hover:text-mainBlue">Creer un compte</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[0.7rem]"
                />
                <ul
                  role="list"
                  className="absolute translate-y-[6.5rem] hidden  group-hover:block rounded-md border bg-white text-txtBlue px-3 py-4  space-y-[0.7rem] w-[9rem]"
                >
                  <ReactArr
                    arr={miniLinks}
                    Component={(e: navLinks) => (
                      <a href={e.link} className="hover:text-mainBlue">
                        {e.label}
                      </a>
                    )}
                  />
                </ul>
              </li>
            </ul>
            <MyButton hoverEffect className="py-[0.4rem] px-4">
              Espace Membre
            </MyButton>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {toggleBar && <MobileNavbar setToggleBar={setToggleBar} />}
      </AnimatePresence>
    </>
  );
}

const MobileNavbar = ({ setToggleBar }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col gap-y-[1rem] fixed top-0 w-full bg-[#01163DE6] z-[101] h-screen p-[1rem]"
  >
    <button
      className="flexCenter self-end text-white"
      onClick={() => setToggleBar(false)}
    >
      <FontAwesomeIcon className="h-[1.2rem] aspect-square" icon={faClose} />
    </button>
    <ul
      role="list"
      className="bg-white rounded-md h-full p-[1rem] font-bold text-[0.8rem] text-txtBlue space-y-[0.9rem]"
    >
      <ReactArr
        arr={links}
        className="hover:text-mainBlue "
        Component={(e: navLinks) => <a href={e.link}>{e.label}</a>}
      />
      <Accordion role="listitem" type="single" collapsible className="!my-2 ">
        <AccordionItem value="item-1" className="!border-none">
          <AccordionTrigger className=" font-bold h-[2rem]">
            Creer un compte
          </AccordionTrigger>
          <AccordionContent>
            <ul
              role="list"
              className="rounded-md border bg-white text-txtBlue px-3 py-4  space-y-[0.7rem] w-full shadow-lg"
            >
              <ReactArr
                arr={miniLinks}
                Component={(e: navLinks) => (
                  <a href={e.link} className="hover:text-mainBlue">
                    {e.label}
                  </a>
                )}
              />
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <li role="listitem">
        <MyButton hoverEffect className="py-[0.4rem] px-4 w-full text-start">
          Espace Membre
        </MyButton>
      </li>
    </ul>
  </motion.section>
);
