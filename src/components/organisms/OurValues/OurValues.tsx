import { cards_t } from "../../../types";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import value1 from "/value1.webp";
import value2 from "/value2.webp";
import value3 from "/value3.webp";

export default function OurValues() {
  const cards: cards_t[] = [
    {
      img: value1,
      title: "Service client",
      txt: "Nous sommes là pour vous aider, 24h/24 et 7j/7. Appelez-nous, et nous serons heureux de vous aider.",
    },
    {
      img: value2,
      title: "Rapidite",
      txt: "Nous livrons vos colis rapidement et facilement, afin que vous puissiez gagner du temps et de l'énergie.",
    },
    {
      img: value3,
      title: "Precision",
      txt: `Nous livrons vos colis avec précision, vous pouvez donc être sûr qu'ils arrivent en toute sécurité."`,
    },
  ];
  return (
    <section className="space-y-[3rem]">
      <HeadTitle
        title="our values"
        subTitle="Processus de livraison plus efficace !"
      />
      <ul
        role="list"
        className="max-lg:flex-col gap-y-[1rem] flex justify-evenly max-lg:items-center gap-x-3 cc flex-wrap text-center"
      >
        <ReactArr
          className="group max-w1200:w-[15.5rem]  max-md:w-full max-lg:w-[80vw] w-[18rem] border rounded-sm sm:p-[2rem]  hover:shadow-xl"
          arr={cards}
          Component={(e: cards_t) => <RenderItem {...e} />}
        />
      </ul>
    </section>
  );
}

const RenderItem = ({ img, title, txt }: cards_t) => (
  <>
    <img
      className="h-[9rem] transition-all duration-300 group-hover:scale-90  max-lg:h-[20rem]  max-md:h-[14rem] mx-auto aspect-auto "
      src={img}
      alt="img"
    />
    <h1 className="max-sm:px-[1rem]  text-txtBlue font-bold mt-1 mb-3 text-[1.2rem]">
      {title}
    </h1>
    <p className="max-sm:p-[1rem] ">{txt}</p>
  </>
);
