import { counts_t } from "../../../types";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import img1 from "/logo1.webp";
import img2 from "/logo2.webp";
import img3 from "/logo3.webp";
import img4 from "/logo4.webp";

export default function Counts() {
  const counts: counts_t[] = [
    { img: img1, count: 354, label: "Clients heureux" },
    { img: img2, count: 25410, label: "Colis livre" },
    { img: img3, count: 463, label: "Hours Of Support" },
    { img: img4, count: 250, label: "Transporeurs" },
  ];

  return (
    <section className="cc">
      <ul className=" grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-x-2 gap-y-[1rem] justify-between">
        <ReactArr
          arr={counts}
          className="shadow-lg flex gap-x-[1rem] py-[1rem] px-[2rem] items-center"
          Component={(e: counts_t) => <RenderItem {...e} />}
        />
      </ul>
    </section>
  );
}

const RenderItem = ({ count, img, label }: counts_t) => (
  <>
    <img src={img} alt="img" />
    <div className="flex flex-col ">
      <span className="text-[2rem] font-bold text-txtBlue ">{count}</span>
      <span className="text-[0.8rem]">{label}</span>
    </div>
  </>
);
