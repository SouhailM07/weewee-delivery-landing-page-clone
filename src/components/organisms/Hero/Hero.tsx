import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from "../../atoms/MyButton/MyButton";
import heroBg from "/hero.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import blueBg from "../../../../public/blueBg.png"
export default function Hero() {
  return (
    <section className="bg-[url('/blueBg.png')] bg-no-repeat bg-[length:100%_100%] py-[2rem] min-h-screen flexCenter">
      <div className="cc mx-auto grid grid-cols-2 gap-x-[3rem] max-lg:grid-cols-1">
        <article className="flex flex-col justify-between items-start max-md:items-center max-md:text-center max-lg:justify-center max-w-[33rem] max-md:max-w-[25rem] max-lg:py-[4rem] max-sm:pb-[1rem]">
          <h1 className="text-txtBlue text-[2.3rem] leading-[3.1rem]  font-bold max-md:text-[1.6rem] max-md:leading-[2.5rem]">
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
        <article className="h-full max-lg:h-[17rem] mx-auto ">
          <img
            src={heroBg}
            alt="img"
            className="h-full object-contain object-center rounded-lg aspect-auto"
          />
        </article>
      </div>
    </section>
  );
}
