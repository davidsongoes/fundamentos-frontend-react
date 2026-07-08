"use client";

import { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";
import { ButtonBlue } from "./ButtonBlue";
import { ButtonGreen } from "./ButtonGreen";

export const ValorContadorGlobal = () => {
  const { contador } = useContext(ContadorContext);

  return (
    <div className="grid gap-y-4 border border-gray-300 p-4 rounded">
      <div>
        <h2 className="text-2xl">Contador</h2>
        <p>Valor do meu contador global: {contador}</p>
      </div>
    </div>
  );
};
