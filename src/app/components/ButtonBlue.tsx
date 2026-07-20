"use client";

import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from "react";

export const ButtonBlue: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className="border border-blue-500 px-4 pv-1 rounded cursor-pointer hover:bg-blue-500 text-white"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
