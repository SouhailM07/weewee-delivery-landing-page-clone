import { cards_t } from "../../../types";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import value1 from "/value1.png";
import value2 from "/value2.png";
import value3 from "/value3.png";

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
    <section className="space-y-[3rem] ">
      <HeadTitle
        title="our values"
        subTitle="Processus de livraison plus efficace !"
      />
      <ul
        role="list"
        className="flex justify-center gap-x-[1.7rem] flex-wrap text-center"
      >
        <ReactArr
          className="w-[18rem] border rounded-sm p-[2rem]  hover:shadow-xl"
          arr={cards}
          Component={(e: cards_t) => <RenderItem {...e} />}
        />
      </ul>
    </section>
  );
}

const RenderItem = ({ img, title, txt }: cards_t) => (
  <>
    <img className="h-[9rem] mx-auto aspect-auto " src={img} alt="img" />
    <h1 className="text-txtBlue font-bold mt-1 mb-3 text-[1.2rem]">{title}</h1>
    <p className="">{txt}</p>
  </>
);
