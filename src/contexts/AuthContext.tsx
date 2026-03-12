import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthContextProps = {
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (userData: RegisterData) => Promise<string>;
};

type RegisterData = {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  password: string;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) setToken(stored);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  //login
  async function signIn(email: string, password: string) {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha:password }),
      });
    
    if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.erro || "Credenciais inválidas");
      }

      const tokenAPI: string = await res.json();
      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);

    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  }

  async function register(userData: RegisterData) {
    const url = `${API_URL}/login/cadastro`;
    try {
    const cpfLimpo = userData.cpf.replace(/\D/g, "");
    const telefoneLimpo = userData.telefone.replace(/\D/g, "");
      
      const dadosParaEnviar = { 
        nome: userData.nome,
        email: userData.email,
        cpf: cpfLimpo,
        telefone: telefoneLimpo,
        senha: userData.password,
      };
      
      console.log('Enviando para registro:', url, dadosParaEnviar);
      
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnviar),
      });
      
      const data = await res.json();

      console.log("Status:", res.status);
      console.log("Resposta:", data);

      // codigo com problema abaixo : CORRIGIR
      if (!res.ok) {
      const errorMessage =
        data?.erro || data?.message || "Erro ao realizar cadastro";

      throw new Error(errorMessage);
    }

    const tokenAPI: string = data;

    await AsyncStorage.setItem("token", tokenAPI);
    setToken(tokenAPI);

    return tokenAPI;
  } catch (error) {
    console.error("Erro completo na requisição:", error);
    throw error;
  }
}

  async function signOut() {
    await AsyncStorage.removeItem("token");
    setToken(null);
  }

  const value = useMemo(
    () => ({ token, isLoading, signIn, signOut, register }),
    [token, isLoading],
  );
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth() deve ser usado dentro de AuthProvider");
  return ctx;
};

export default AuthProvider;''