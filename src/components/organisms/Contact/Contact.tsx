import "./styles.css";

import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ReactArr from "../../atoms/ReactArr/ReactArr";
import ContactForm from "../../molecules/ContactForm/ContactForm";
import { contact_box_t } from "../../../types";

export default function Contact() {
  const contactsInfo: contact_box_t[] = [
    {
      icon: faLocationDot,
      title: "Adresse",
      value: `Centre commercial - Mohamadia mall, Etage R-1, local n°861, Alger`,
    },
    {
      icon: faPhone,
      title: "Appelez-nous",
      value: "+213 (0) 562201068",
    },
    {
      icon: faEnvelope,
      title: "Envoyez-nous un email",
      value: "contact@weeweedelivery.com",
    },
    {
      icon: faClock,
      title: "Heures de travail",
      value: `Dimanche - Jeudi 08:00 - 17:00`,
    },
  ];
  return (
    <section className="cc space-y-[2rem] max-lg:max-w-[40rem] max-md:max-w-[30rem]">
      <HeadTitle title="Nous sommes là pour vous aider" subTitle="Contact" />
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-[2rem]">
        <article className="pb-[2rem] ">
          <ul
            role="list"
            className="grid grid-cols-2 max-md:grid-cols-1 gap-[1rem]  "
          >
            <ReactArr
              arr={contactsInfo}
              Component={ContactBox}
              className="bg-whitePink max-lg:w-full  w-[12rem] py-[1.5rem] px-[1.8rem] items-start flex flex-col "
            />
          </ul>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}

const ContactBox = ({ icon, title, value }: contact_box_t) => (
  <>
    <FontAwesomeIcon icon={icon} className="text-mainBlue text-[2rem] " />
    <span className="block mb-2 mt-3  font-bold text-txtBlue">{title}</span>
    <p className="text-[0.8rem]">{value}</p>
  </>
);
