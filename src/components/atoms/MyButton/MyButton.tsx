import { ButtonHTMLAttributes, ReactNode } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customStyles?: string;
  hoverEffect?: boolean;
  children: ReactNode;
}

export default function MyButton({
  customStyles,
  hoverEffect,
  children,
  ...props
}: MyButtonProps) {
  return (
    <button
      {...props}
      className={`${customStyles} rounded-sm bg-mainBlue text-white `}
    >
      {children}
    </button>
  );
}
