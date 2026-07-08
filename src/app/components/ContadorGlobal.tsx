"use client";

import { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";
import { ButtonBlue } from "./ButtonBlue";
import { ButtonGreen } from "./ButtonGreen";

export const ContadorGlobal = () => {
  const { contador, setContador } = useContext(ContadorContext);

  return (
    <div className="grid gap-y-4 border border-gray-300 p-4 rounded">
      <div>
        <h2 className="text-2xl">Contador</h2>
        <p>Número atual: {contador}</p>
      </div>
      <div className="flex gap-2">
        <ButtonBlue
          onClick={() => {
            setContador(contador !== null ? contador + 1 : 1);
          }}
        >
          +1
        </ButtonBlue>
        {contador !== null && contador > 0 && (
          <ButtonBlue
            onClick={() => {
              setContador(contador !== null ? contador - 1 : null);
            }}
          >
            -1
          </ButtonBlue>
        )}
      </div>
      <div className="flex gap-2 mt-1">
        <ButtonBlue
          onClick={() => {
            setContador((c) => (c !== null ? c + 3 : 3));
          }}
        >
          +3
        </ButtonBlue>
        {contador !== null && contador > 2 && (
          <ButtonBlue
            onClick={() => {
              setContador((c) => (c !== null ? c - 3 : null));
            }}
          >
            -3
          </ButtonBlue>
        )}
      </div>
      <div className="mt-1">
        <ButtonGreen
          onClick={() => {
            setContador(0);
          }}
        >
          Zerar
        </ButtonGreen>
      </div>
    </div>
  );
};
