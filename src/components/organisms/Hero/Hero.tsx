import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from "../../atoms/MyButton/MyButton";
import heroBg from "/hero.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondaryBg to-white py-[2rem]">
      <div className="max-w-[56rem] mx-auto grid grid-cols-2 gap-x-[3rem]">
        <article className="flex flex-col justify-between items-start ">
          <h1 className="text-txtBlue text-[2.3rem] leading-[3.1rem] font-bold">
            Livraison rapide et fiable, à votre porte en un clin d'œil.
          </h1>
          <p className="text-[1.2rem] leading-[1.5rem] my-3">
            Votre satisfaction est notre priorité, nous nous engageons à vous
            offrir le meilleur service de livraison.
          </p>
          <MyButton hoverEffect className="py-2 px-7 flex items-center gap-x-2">
            <span>Commencer</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </MyButton>
        </article>
        <article className="h-full">
          <img
            src={heroBg}
            alt="img"
            className="h-full object-cover object-center rounded-md"
          />
        </article>
      </div>
    </section>
  );
}
