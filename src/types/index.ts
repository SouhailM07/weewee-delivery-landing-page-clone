import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface navLinks {
  link: string;
  label: string;
}

export interface storeLinks_t {
  link: string;
  img: string;
  ariaLabel: string;
}

export interface cards_t {
  title: string;
  img: string;
  txt: string;
}

export interface counts_t {
  img: string;
  count: number;
  label: string;
}

export interface faq_t {
  question: string;
  answer: string;
  value?: string;
}

export interface testimonials_t {
  img: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
}

export interface contact_box_t {
  icon: IconDefinition;
  title: string;
  value: string;
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

export interface MyInputProps {
  form?: any;
  name: string;
  placeholder: string;
  fieldType: FormFieldType;
}
