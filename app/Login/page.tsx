"use client"

import Image from "next/image";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button"
import Label from "../components/ui/Label"
import { useState } from "react";

import bannerLogin from "../assets/bannerLogin.jpeg"

import { motion } from 'motion/react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import Link from "next/link";
import { getDataUser } from "../lib/authClient";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: ""});
    const [message, setMessage] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
        
    try {
        const res = await getDataUser(formData);
        console.log(formData.password);
        
        if (res?.success) {
        setMessage("Login efetuado com sucesso!");

        router.push("/");
        } else {
        setMessage(res.message ?? "Falha no login.");
        }
    } catch (error) {
        console.error(error);
        setMessage("Erro no envio do formulário.");
    }
    }

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-teal-50 to-teal-100">
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Lado esquerdo - Imagem */}
                <motion.div
                    className="hidden lg:block relative overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={bannerLogin}
                        alt="Saúde"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-teal-600/90 to-teal-700/80" />
                    
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="max-w-md text-center"
                        >
                            <h2 className="text-white mb-6">Bem-vindo de volta!</h2>
                            <p className="text-teal-50 mb-8 leading-relaxed">
                                Continue sua jornada de saúde e bem-estar. Estamos felizes em ter você de volta.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                'Acesse seus lembretes personalizados',
                                'Continue lendo seus artigos favoritos',
                                'Reconecte-se com a comunidade'
                                ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 justify-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-teal-50">{item}</span>
                                </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Lado direito - Formulário */}
                <motion.div
                    className="flex items-center justify-center p-6 lg:p-12"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full max-w-md">
                        <Link href={"/"}>
                            <motion.button
                                className="cursor-pointer flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-8 group"
                                whileHover={{ x: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Voltar para página inicial</span>
                            </motion.button>
                        </Link>

                        <motion.div {...fadeInUp}>
                            <div className="mb-8">
                                <h1 className="text-teal-700 mb-2">Entrar na sua conta</h1>
                                <p className="text-slate-600">
                                Digite suas credenciais para acessar sua conta
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Label htmlFor="email" className="text-slate-700">E-mail</Label>
                                    <div className="relative mt-2">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500" 
                                            onChange={handleChange}
                                            value={formData.email}      
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Label htmlFor="password" className="text-slate-700">Senha</Label>
                                    <div className="relative mt-2">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Digite sua senha min 6 caracteres max 12"
                                            className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                                            value={formData.password}  
                                            onChange={handleChange}                                      
                                            maxLength={12}
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >

                                    <button
                                        type="button"
                                        className="text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                                    >
                                        Esqueceu a senha?
                                    </button>
                                </motion.div>

                                {message && <p className="text-center text-lg mt-2">{message}</p>}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-2"
                                >
                                    <Button
                                        type="submit"
                                        className="cursor-pointer w-full h-12 bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Entrar
                                    </Button>
                                </motion.div>

                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-linear-to-br from-teal-50 to-teal-100 px-4 text-slate-500">
                                        ou
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.p
                                    className="text-center text-slate-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                Ainda não tem uma conta?{' '}
                                    <Link href={"/Cadastro"}>
                                        <button
                                            type="button"
                                            className="text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                                            >
                                            Criar conta
                                        </button>
                                    </Link>
                                </motion.p>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
