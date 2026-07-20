"use client"

import { useAuth } from "@/app/context/aula-4/AuthContext"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <div>
            <h1>Bem-vindo, {user.email}!</h1>
            <p>Sua role: {user.role}</p>
            <button onClick={() => logout()}>Sair</button>
        </div>
    );
}
