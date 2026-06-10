import { FC } from "react";

type MeuNomeProps = {
  name: string;
  age: number;
  birthDate: Date;
};

export const MeuNome: FC<MeuNomeProps> = (
  props,
) => {
  return (
    <>
      <p>
        Sou o {props.name}, tenho {props.age} anos e nasci em{" "}
        {props.birthDate.toLocaleDateString("pt-BR")}.
      </p>
    </>
  );
};
