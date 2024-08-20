import { LiHTMLAttributes } from "react";

interface ReactArr_t extends LiHTMLAttributes<HTMLLIElement> {
  arr: any;
  Component: any;
}

export default function ReactArr({ arr, Component, ...liProps }: ReactArr_t) {
  return arr.map((e, i) => {
    return (
      <li {...liProps} key={i}>
        {typeof e == "object" ? <Component {...e} /> : <Component e={e} />}
      </li>
    );
  });
}
