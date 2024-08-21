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
