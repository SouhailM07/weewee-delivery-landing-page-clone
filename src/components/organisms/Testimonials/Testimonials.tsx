import "./styles.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import { testimonials_t } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import img1 from "/testimonials-1.jpg";
import img2 from "/testimonials-2.jpg";
import img3 from "/testimonials-3.jpg";
import img4 from "/testimonials-4.jpg";
import img5 from "/testimonials-5.jpg";

export default function Testimonials() {
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
    <section>
      <HeadTitle title="Nos Clients et Partenaires" subTitle="Témoignages" />
      <ul>
        <Swiper
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {testimonials.map((e, i) => (
            <SwiperSlide key={i} role="listitem" className="static h-[20rem] ">
              <RenderItem {...e} />
            </SwiperSlide>
          ))}
        </Swiper>
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
}: testimonials_t) => (
  <div className="b  mx-auto w-[17rem] text-center  flex flex-col shadow-xl items-center  px-[1rem] py-[2rem]">
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
