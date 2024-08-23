import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import FooterForm from "../../molecules/FooterForm/FooterForm";
import logo from "/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// import ms from "../../../../public/footer_bg.png"
interface footerLinks_t {
  link: string;
  icon: IconDefinition;
  ariaLabel: string;
}

export default function Footer() {
  // const footerLinks:footerLinks_t[]=[{icon:}]
  return (
    <footer className="mt-[5rem] bg-[#f5f8ff]">
      <NewsLetter />
      <MiddleFooter />
      <Copyright />
    </footer>
  );
}

const NewsLetter = () => (
  <section className="min-h-[10rem] flexCenter text-center">
    <article className="space-y-3 w-[30rem] ">
      <h1 className="text-txtBlue text-[1.2rem] font-bold">Notre Newsletter</h1>
      <p className="text-[0.8rem]">
        Rejoindre la liste de diffusion WeeWee (actualités et informations
        utiles ...)
      </p>
      <FooterForm />
    </article>
  </section>
);

const MiddleFooter = () => {
  const footerLink: footerLinks_t[] = [
    {
      icon: faFacebook,
      link: "https://www.facebook.com/WeeWeedelivery/",
      ariaLabel: "facebook",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/weewee.delivery/?utm_medium=copy_link",
      ariaLabel: "instagram",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/company/weewee-delivery/",
      ariaLabel: "linkedin",
    },
  ];

  const liensUtiles: { label: string; link: string }[] = [
    { label: "Accueil", link: "#" },
    {
      label: "Conditions d'utilisation",
      link: "https://landing.weeweedelivery.com/html-pages/politique-de-confidentialite/Politique%20de%20confidentialit%C3%A9",
    },
    { label: "Application web", link: "#" },
    {
      label: "Politique de confidentialité",
      link: "#",
    },
  ];

  return (
    <section className="py-[2rem] bg-contain bg-no-repeat bg-right bg-white bg-[url('/footer_bg.png')] h-[15rem]">
      <div className="cc flex justify-between ">
        <article className="space-y-2">
          <div className="flex justify-start items-center gap-x-2">
            <img src={logo} alt="logo" />
            <span className="text-[1.5rem] font-bold text-txtBlue">WeeWee</span>
          </div>
          <p className="text-[0.7rem]">
            Livraison rapide et fiable, à votre porte en un clin d'œil.
          </p>
          <ul className="flex gap-x-3 items-center">
            <ReactArr
              arr={footerLink}
              className="text-txtBlue opacity-60 hover:opacity-100"
              Component={(e: footerLinks_t) => (
                <a href={e.link} aria-label={`link to ${e.ariaLabel}`}>
                  <FontAwesomeIcon
                    className="h-[1.1rem] aspect-square "
                    icon={e.icon}
                  />
                </a>
              )}
            />
          </ul>
        </article>
        <section className="flex gap-x-[2rem] w-[33rem]">
          <article>
            <h1 className="text-[0.8rem] font-bold text-txtBlue mb-4">
              LIENS UTILES
            </h1>
            <ul className="grid grid-cols-2 gap-x-1 gap-y-2">
              <ReactArr
                arr={liensUtiles}
                className="flex items-center text-[0.7rem] gap-x-2 "
                Component={(e) => (
                  <>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <a
                      className="hover:text-mainBlue text-txtBlue"
                      href={e.link}
                    >
                      {e.label}
                    </a>
                  </>
                )}
              />
            </ul>
          </article>
          <article>
            <h1 className="text-[0.8rem] font-bold text-txtBlue mb-4">
              Contact Us
            </h1>
            <ul className="w-[14rem] text-[0.8rem] ">
              <li className="my-4 pr-[2rem]">
                Centre commercial - Mohamadia mall, Etage R-1, local n°861,
                Alger
              </li>
              <li className="my-2">
                <span className="font-bold">Phone:</span> +213 (0) 562201068
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                contact@weeweedelivery.com
              </li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
};

const Copyright = () => (
  <section className="text-[0.8rem] text-txtBlue  text-center space-y-2 py-[1.5rem]">
    <p>
      © Copyright <span className="font-bold">WeeWee. </span> Tous les droits
      sont réservés
    </p>
    <p>
      Designed by <span className="text-mainBlue">Shadow</span>
    </p>
  </section>
);
