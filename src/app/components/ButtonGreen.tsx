"use client";

import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};  
export const ButtonGreen: FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {

  return (
      <button className="border border-green-500 px-4 pv-1 rounded cursor-pointer hover:bg-green-500 text-white" onClick={onClick}>
        {children}
      </button>
    
  );
};
