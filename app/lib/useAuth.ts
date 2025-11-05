"use client";

import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me", {
          method: "GET",
          credentials: "include"
        }); // endpoint que retorna dados do usuário logado
        
        if (res.ok) {
          const data = await res.json();
          console.log("Data de resposta da API - ME:", data);  // Corrigido: Use vírgula para logar objetos
          setUser(data.user);
        } else {
          console.log("Erro na resposta da API - ME:", res.status, res.statusText);  // Log adicional para depuração
          setUser(null);
        }
      } catch {
        console.error("Erro no fetch para /api/me:");  // Log do erro
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
}