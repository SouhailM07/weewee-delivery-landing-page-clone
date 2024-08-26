import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import { faLongArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { cn } from "../../../lib/utils";

interface ServiceCardT {
  title: string;
  txt: string;
  link: string;
  parentStyles: string;
  spanStyles: string;
}

export default function Services() {
  const servicesCards: ServiceCardT[] = [
    {
      title: "E-commerçants Algérien",
      txt: "Qui souhaitent expédier leurs commandes aux clients. Nous avons une large flotte de véhicules et des transporteurs expérimentés...",
      link: "#",
      parentStyles: "hover:bg-[#2DB6FA] border-[#2DB6FA]",
      spanStyles: "bg-[#DBF3FE]  text-[#2DB6FA]",
    },
    {
      title: "Entreprises (Corporate)",
      txt: "Qui souhaitent expédier des marchandises à leurs clients ou à leurs fournisseurs...",
      link: "https://landing.weeweedelivery.com/admin/register?role=user-corporate",
      parentStyles: "hover:bg-[#F68C09] border-[#F68C09]",
      spanStyles: "bg-[#FDE3C4] text-[#F68C09]",
    },
    {
      title: "Livraison pour le public",
      txt: "Nous proposons également des services de livraison pour le public qui souhaitent expédier des colis à des amis, à la famille ou à des entreprises...",
      link: "https://landing.weeweedelivery.com/admin/register?role=user-public",
      parentStyles: "hover:bg-[#08DA4E] border-[#08DA4E]",
      spanStyles: "bg-[#CFFDDF] text-[#08DA4E]",
    },
    {
      title: "WeeBag",
      txt: `Avec "WeeBag", nous prenons en charge vos bagages dès votre arrivée à l'aéroport et les livrons directement à votre domicile`,
      link: "https://weebag.weeweedelivery.com/",
      parentStyles: "hover:bg-[#B50EDF] border-[#B50EDF]",
      spanStyles: "bg-[#F8E4FD] text-[#B50EDF]",
    },
  ];
  return (
    <section id="services" className="cc">
      <HeadTitle
        title="Notre service client est disponible 24h/24 et 7j/7 !"
        subTitle="Services"
      />
      <ul className="grid grid-cols-3 gap-[1rem] max-lg:grid-cols-2 max-lg:place-items-center max-md:grid-cols-1">
        {servicesCards.map((e, i) => (
          <RenderItem key={i} {...e} />
        ))}
      </ul>
    </section>
  );
}

const RenderItem = ({
  link,
  parentStyles,
  spanStyles,
  title,
  txt,
}: ServiceCardT) => (
  <li
    className={cn(
      `group rounded-sm shadow-lg border-b-4  transition-all duration-300 hover:text-white max-w1200:w-[16rem] max-md:min-h-[22rem] max-md:w-[70vw]  max-lg:w-[17rem] max-sm:w-full max-lg:h-[26rem] w-[18rem] h-[27rem] text-center py-[3rem] px-[1.5rem] flex flex-col justify-between`,
      parentStyles
    )}
  >
    <div>
      <span
        className={cn(
          " h-[4rem] aspect-square flexCenter mx-auto rounded-md group-hover:!bg-white",
          spanStyles
        )}
      >
        <FontAwesomeIcon
          icon={faMessage}
          className=" h-[1.5rem] aspect-square"
        />
      </span>
      <h1 className="max-sm:text-[1.5rem] text-[1.8rem] leading-[2.2rem] mt-[1rem] mb-2 font-bold">
        {title}
      </h1>
      <p>{txt}</p>
    </div>
    <a href={link} className="mt-2 flexCenter text-[0.9rem]">
      <span>En savoir plus... </span>
      <FontAwesomeIcon icon={faLongArrowRight} />
    </a>
  </li>
);
