"use client";

import { ButtonBlue } from "@/app/components/ButtonBlue";
import { useAuth } from "@/app/context/aula-4/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded-md shadow">
      <div>
        <p className="flex flex-">LOGIN</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              type="email"
              required
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium">Senha</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              type="password"
              required
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <br />
          <div className="flex flex-col">
            <ButtonBlue>Entrar</ButtonBlue>
          </div>
        </form>
      </div>
    </div>
  );
}
