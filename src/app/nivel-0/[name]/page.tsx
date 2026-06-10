// export default function Page() {
//   return <div>Page</div>;
// }
// const Page = () => <div>Page</div>;

import { Hobbies } from "@/app/components/Hobbies";
import { Imagem } from "@/app/components/Imagem";
import { MeuNome } from "@/app/components/MeuNome";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { name } = await params;

  console.log("Hello");

  return (
    <div className="grid gap-y-4">
      <MeuNome name={name} age={39} birthDate={new Date("1987-03-25")} />
      <p>Hobbies</p>
      <Hobbies />
      <div>
        <p>Gosto de:</p>
        <Imagem />
      </div>
      <Link href="/nivel-0" className="text-blue-500 underline">
        Voltar
      </Link>
    </div>
  );
};

export default Page;
