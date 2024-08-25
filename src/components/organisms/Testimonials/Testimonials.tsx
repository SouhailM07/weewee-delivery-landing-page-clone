import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import Autoplay from "embla-carousel-autoplay";

import { testimonials_t } from "../../../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";

import img1 from "/testimonials-1.webp";
import img2 from "/testimonials-2.webp";
import img3 from "/testimonials-3.webp";
import img4 from "/testimonials-4.webp";
import img5 from "/testimonials-5.webp";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const testimonials: testimonials_t[] = [
    {
      img: img2,
      name: "F. Sara",
      service: "E-commerçant",
      comment:
        "Je suis un client fidèle de WeeWee depuis deux années et j'ai toujours été satisfait de leur service. L'application est facile à utiliser et les livreurs sont toujours professionnels et courtois.",
      rating: 5,
    },
    {
      img: img1,
      name: "K. Amina",
      service: "E-commerçant",
      comment:
        "Les livreurs de WeeWee sont toujours ponctuels et les produits sont toujours frais. Je recommanderais certainement WeeWee à toute personne occupée qui n'a pas le temps de faire ses courses.",
      rating: 5, // Assuming there's no rating shown in the image for Amina
    },
    {
      img: img3,
      name: "K. Soumai",
      service: "S. Publique",
      comment:
        "J'ai utilisé l'application WeeWee pour faire livrer des médicaments à mon père qui est malade et il a été très reconnaissant. Les médicaments sont arrivés à temps et dans un état parfait.",
      rating: 5,
    },
    {
      img: img4,
      name: "K. Soumai",
      service: "S. Publique",
      comment:
        "J'ai utilisé l'application WeeWee pour faire livrer des médicaments à mon père qui est malade et il a été très reconnaissant. Les médicaments sont arrivés à temps et dans un état parfait.",
      rating: 5,
    },
    {
      img: img5,
      name: "K. Soumai",
      service: "S. Publique",
      comment:
        "J'ai utilisé l'application WeeWee pour faire livrer des médicaments à mon père qui est malade et il a été très reconnaissant. Les médicaments sont arrivés à temps et dans un état parfait.",
      rating: 5,
    },
  ];
  return (
    <section className="space-y-[2rem]">
      <HeadTitle title="Nos Clients et Partenaires" subTitle="Témoignages" />
      <Carousel
        setApi={setApi}
        role="list"
        className="cc"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((e, i) => (
            <CarouselItem
              key={i}
              role="listitem"
              className="w1200:basis-1/3   select-none"
            >
              <RenderItem {...e} current={current} index={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ul className=" flexCenter gap-x-2">
        {Array(count)
          .fill("")
          .map((_e, i) => (
            <li
              onClick={() => api?.scrollTo(i)}
              key={i}
              className={`h-3 cursor-pointer rounded-full border-2 border-mainBlue aspect-square ${
                current == i + 1 && "bg-mainBlue"
              }`}
            />
          ))}
      </ul>
    </section>
  );
}

const RenderItem = ({
  comment,
  img,
  name,
  rating,
  service,
  current,
  index,
}: testimonials_t & { current: number; index: number }) => (
  <div
    className={`w1200:min-h-[27rem] min-h-[18rem] mx-auto w1200:w-[17rem] text-center  flex flex-col shadow-xl items-center  px-[1rem] py-[2rem] 
    ${current == index + 1 ? "opacity-100 " : "opacity-40"}`}
  >
    <RatingStars rating={rating} />
    <p className="italic my-[1rem] text-[0.95rem]">{comment}</p>
    <img
      src={img}
      alt="img"
      className="h-[4.5rem] aspect-square rounded-full my-4"
    />

    <span className="font-bold text-[0.9rem]">{name}</span>
    <span className="text-[0.7rem]">{service}</span>
  </div>
);

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <ul className="flex">
      {Array(rating < 5 ? rating : 5)
        .fill("")
        .map((_e, i) => (
          <li key={i} role="listitem">
            <FontAwesomeIcon
              className="text-yellow-400 h-[1.2rem] aspect-square"
              icon={faStar}
            />
          </li>
        ))}
    </ul>
  );
};
