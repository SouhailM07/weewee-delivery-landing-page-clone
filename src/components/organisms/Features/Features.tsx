import "./styles.css";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import featuresBg from "/features.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactArr from "../../atoms/ReactArr/ReactArr";

export default function Features() {
  const features: string[] = [
    "Des prix compétitifs",
    "Une livraison rapide et fiable",
    "Une interface utilisateur facile à utiliser",
    "Un excellent service client",
    "Des promotions et des offres spéciales",
    "Une application mobile sécurisée",
  ];

  return (
    <section className="cc space-y-[3rem]">
      <HeadTitle
        title="Disponible sur Google Play et App Store !"
        subTitle="Caractéristiques de l'application"
      />
      <article className="grid grid-cols-2 gap-x-[1rem]">
        <img src={featuresBg} alt="img" />
        <ul role="list" className="grid grid-cols-2 gap-[1rem]">
          <ReactArr
            arr={features}
            className="features_card flex items-center gap-x-[0.5rem]  shadow-md p-[1.2rem] rounded-md"
            Component={(e) => <RenderItem txt={e.e} />}
          />
        </ul>
      </article>
    </section>
  );
}

const RenderItem = ({ txt }: { txt: string }) => (
  <>
    <FontAwesomeIcon
      icon={faCheck}
      className="features_card__icon bg-secondaryBg rounded-sm h-[1rem] p-[0.4rem]  aspect-square "
    />
    <span className="text-txtBlue font-bold text-[0.8rem]">{txt}</span>
  </>
);
