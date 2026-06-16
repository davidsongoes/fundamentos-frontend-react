"use client";
import { useEffect, useState } from "react";
import { ButtonBlue } from "./ButtonBlue";
import { ButtonGreen } from "./ButtonGreen";

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const [coisa, setCoisa] = useState("Digite algo aqui");

  useEffect(() => {
    console.log("Componente Contador renderizado:");
  }, []);

   useEffect(() => {
    console.log("Componente Contador atualizado:", contador);
  }, [contador]);

     useEffect(() => {
    console.log("Componente Coisa atualizado:", coisa);
  }, [coisa]);

  useEffect(() => {
    console.log("Componente Contador ou Coisa atualizado:");
  }, [contador, coisa]);

  return (
    <div className="grid gap-y-4 border border-gray-300 p-4 rounded">
      <div>
        <h2 className="text-2xl">Contador</h2>
        <p>Número atual: {contador}</p>
      </div>
      <div className="flex gap-2">
        <ButtonBlue
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          +1
        </ButtonBlue>
        {contador > 0 && (
          <ButtonBlue
            onClick={() => {
              setContador(contador - 1);
            }}
          >
            -1
          </ButtonBlue>
        )}
      </div>
      <div className="flex gap-2 mt-1">
        <ButtonBlue
          onClick={() => {
            setContador((c) => c + 3);
          }}
        >
          +3
        </ButtonBlue>
        {contador > 2 && (
          <ButtonBlue
            onClick={() => {
              setContador((c) => c - 3);
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
      <div className="mt-4">
         <p>Coisa: {coisa ? coisa : <span className="text-gray-500">Nenhuma coisa definida</span>}</p>
      </div>
      <div className="flex">
        <input
          type="text"
          value={coisa}
          onChange={(e) => setCoisa(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded w-full mr-2"
        />
        <button
          onClick={() => {
            setCoisa("");
          }}
          className="border border-red-500 px-4 py-1 rounded cursor-pointer hover:bg-red-500 text-white"
        >
          Limpar
        </button>
       
      </div>
      
    </div>
  );
};
