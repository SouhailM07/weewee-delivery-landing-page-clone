import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverEffect?: boolean;
  children: ReactNode;
}

export default function MyButton({
  className,
  hoverEffect,
  children,
  ...props
}: MyButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `rounded-sm bg-mainBlue text-white ${
          hoverEffect && "hover:bg-[#5969f3]"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
}
