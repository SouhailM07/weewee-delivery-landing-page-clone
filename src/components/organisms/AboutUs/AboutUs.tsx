import aboutImg from "/about.png";
import playStoreImg from "/google_play.png";
import appStoreImg from "/appstore.png";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import { storeLinks_t } from "../../../types";

export default function AboutUs() {
  const storeLinks: storeLinks_t[] = [
    {
      img: playStoreImg,
      link: "https://play.google.com/store/apps/details?id=com.weeweedelivery.dz",
      ariaLabel: "link to google play",
    },
    {
      img: appStoreImg,
      link: "https://apps.apple.com/us/app/weewee-driver/id6450660603",
      ariaLabel: "link to appstore",
    },
  ];
  return (
    <section className="max-w-[56rem] mx-auto bg-secondaryBg px-8 py-6  rounded-sm grid grid-cols-2 gap-x-[2rem]">
      <article>
        <h1 className="text-mainBlue text-[0.8rem] font-bold">
          Qui Sommes nous ?
        </h1>
        <h2 className="text-[1.2rem] font-bold text-txtBlue mt-2 mb-3 leading-[1.5rem]">
          Nous économisons votre temps, votre argent et votre confort.
        </h2>
        <p className="leading-[1.5rem]">
          WeeWee est une plateforme intermédiaire unique et innovante. Qui met
          en relation e-commerçants ou personne particulière, souhaitant
          effectuer la livraison d'un colis avec des livreurs en freelance
          inscrit sur nos plateformes. Dans le but de réduire et simplifier le
          processus de livraison traditionnelle, long et complexe et le réduit
          en quelques clics.
        </p>
        <ul className="flex gap-x-[1rem] mt-[1rem]">
          <ReactArr
            arr={storeLinks}
            Component={(e: storeLinks_t) => (
              <a href={e.link}>
                <img
                  src={e.img}
                  className="h-[2rem] "
                  alt="img"
                  aria-label={e.ariaLabel}
                />
              </a>
            )}
          />
        </ul>
      </article>
      <article>
        <img src={aboutImg} alt="img" />
      </article>
    </section>
  );
}
