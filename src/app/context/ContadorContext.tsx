import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ContadorContextType = {
  contador: number;
  setContador: Dispatch<SetStateAction<number>>;
}; 

export const ContadorContext = createContext<ContadorContextType>({
  contador: 0,
  setContador: () => {},
});

export default function ContadorProvider ({
     children,
}: {
    children: ReactNode; 
}) {
const [contador, setContador] = useState(0);

  return (
    <ContadorContext.Provider value={{contador, setContador }}>
      {children}
    </ContadorContext.Provider>
)
}