import "./styles.css";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { faq_t } from "../../../types";

export default function FAQ() {
  const faq: faq_t[] = [
    {
      question: "1) A quoi sert WeeWee?",
      answer:
        "La livraison est le problème du e-commerce en Algérie. Notre vision est de devenir la solution.",
    },
    {
      question: "2) Quelles wilayas sont prises en charge par WeeWee?",
      answer:
        "WeeWee est une startup, nous sommes présent dans les wilayas suivants : Alger, Boumerdes, Blida, Tipaza , Jijel, Mila et Constantine.Nous visons à couvrir toute l'Algérie à l'avenir.",
    },
    {
      question: "3) Comment WeeWee sélectionne les transporteurs?",
      answer:
        "WeeWee est une communauté de distributeurs et de transporteurs. Si vous souhaitez être transporteur vous devez télécharger et installer l'application mobile. Ensuite inscrivez-vous en tant que transporteur. WeeWee vous contactera et s'occupera du reste du processus.",
    },
  ];
  const faq_2: faq_t[] = [
    {
      question: "4) Qui peut voir mes colis?",
      answer:
        "Les colis que vous misent sur l’application, sont vu seulement par : Vous, Le chauffeur, Les administrateurs WeeWee. Pour plus d’information, nous vous invitons à lire notre « Politique de Confidentialité ».",
    },
    {
      question: "5) Que puis-je savoir sur le transporteur?",
      answer:
        "Une fois qu'un transporteur est sélectionné pour votre colis, vous pourrez consulter son profil et ses coordonnées pour le contacter. Vous pouvez même écrire des commentaires sur son profil en tant qu'avis ou feed-back sur leur service.",
    },
    {
      question: "6) L'inscription à WeeWee est-elle gratuite?",
      answer: "L’application est gratuit, c'est gratuit et le sera toujours.",
    },
  ];
  return (
    <section className="cc space-y-[3rem]">
      <HeadTitle title="F.A.Q" subTitle="Frequently Asked Questions" />
      <article className="flex max-lg:flex-wrap gap-x-[1rem]  justify-center">
        <ul role="list" className="w-full">
          {faq.map((e, i) => (
            <li key={i} role="listitem">
              <RenderItem {...e} value={`item-${i}-a`} />
            </li>
          ))}
        </ul>
        <ul role="list" className="w-full">
          {faq_2.map((e, i) => (
            <li key={i} role="listitem">
              <RenderItem {...e} value={`item-${i}-b`} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

const RenderItem = ({ question, answer, value }: faq_t) => {
  return (
    <Accordion type="single" collapsible className=" font-bold w-full">
      <AccordionItem value={value!}>
        <AccordionTrigger className="font-bold  text-[0.9rem] gap-x-3 trigger">
          {question}
        </AccordionTrigger>
        <AccordionContent className="w-[25rem] leading-[2rem]">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
