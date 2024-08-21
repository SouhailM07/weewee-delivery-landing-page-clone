import { counts_t } from "../../../types";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import img1 from "/logo1.png";
import img2 from "/logo2.png";
import img3 from "/logo3.png";
import img4 from "/logo4.png";

export default function Counts() {
  const counts: counts_t[] = [
    { img: img1, count: 354, label: "Clients heureux" },
    { img: img2, count: 25410, label: "Colis livre" },
    { img: img3, count: 463, label: "Hours Of Support" },
    { img: img4, count: 250, label: "Transporeurs" },
  ];

  return (
    <section className="cc">
      <ul className="flex justify-between flex-wrap">
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
