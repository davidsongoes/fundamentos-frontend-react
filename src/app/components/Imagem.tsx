import Image from "next/image";

export const Imagem = () => (
  <Image
    className="dark:invert"
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
);
