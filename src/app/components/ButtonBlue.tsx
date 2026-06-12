"use client";

import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};  
export const ButtonBlue: FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {

  return (
      <button className="border border-blue-500 px-4 pv-1 rounded cursor-pointer hover:bg-blue-500 text-white" onClick={onClick}>
        {children}
      </button>
    
  );
};
