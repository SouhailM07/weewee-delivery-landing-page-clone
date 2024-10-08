import "./styles.css";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import img1 from "/blog1.webp";
import img2 from "/blog2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactArr from "../../atoms/ReactArr/ReactArr";

interface blogs_t {
  img: string;
  date: string;
  txt: string;
  link: string;
}

export default function Blog() {
  const blogs: blogs_t[] = [
    {
      img: img1,
      date: "2023-08-05 07:46:07",
      txt: "Comment WeeWee peut vous aider a gagner du temps ?",
      link: "https://landing.weeweedelivery.com/posts/1",
    },
    {
      img: img2,
      date: "2023-08-05 07:46:07",
      txt: "Livraison rapide et fiable",
      link: "https://landing.weeweedelivery.com/posts/2",
    },
    {
      img: img1,
      date: "2023-08-05 07:46:07",
      txt: "Livraison a domicile avec WeeWee ?",
      link: "https://landing.weeweedelivery.com/posts/3",
    },
  ];

  return (
    <section
      id="blogs"
      className="cc space-y-[2rem] max-lg:max-w-[35rem] max-sm:w-full max-md:max-w-[25rem]"
    >
      <HeadTitle title="Articles récents de notre Blog" subTitle="Blog" />
      <ul className="flex justify-center gap-y-[1rem] gap-x-[1.5rem] flex-wrap">
        <ReactArr arr={blogs} Component={RenderItem} />
      </ul>
    </section>
  );
}

const RenderItem = ({ date, img, txt, link }: blogs_t) => (
  <a
    href={link}
    className="w-[17rem] max-w1200:w-[15rem] max-lg:w-full  flex flex-col  pb-[1rem] h-full shadow-xl blog_card font-bold  cursor-pointer overflow-hidden"
  >
    <img src={img} alt="img" />
    <div className="relative z-[2] px-[1.5rem] h-full bg-white flex flex-col justify-between items-start ">
      <div className="mt-3">
        <span className="text-[0.9rem]">{date}</span>
        <p className="text-txtBlue my-3 text-[1.1rem] leading-[1.5rem]">
          {txt}
        </p>
      </div>
      <button className="text-mainBlue">
        <span>En savoir plus </span>
        <FontAwesomeIcon icon={faLongArrowRight} />
      </button>
    </div>
  </a>
);
