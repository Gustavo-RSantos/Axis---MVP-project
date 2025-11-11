"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { createCadastro } from "../api/user/route";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Phone,
  Calendar,
  EyeOff,
  Eye,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Image from "next/image";
import Link from "next/link";

import bannerCadastro from "../assets/bannerCadastro.jpg";
import InputRef from "../components/ui/InputRef";

export default function Cadastro() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telefone: "",
    idade: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("As senhas não conferem!");
      return;
    }

    try {
      const res = await createCadastro(formData);
      if (res?.success) {
        setMessage("Cadastro criado com sucesso!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telefone: "",
          idade: "",
          password: "",
          confirmPassword: "",
        });

        router.push("/");
      } else {
        setMessage(res.message ?? "");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erro no envio do formulário.");
    }
  }

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordSecurityRef = useRef<HTMLDivElement>(null);
  const securityLevelRef = useRef<HTMLDivElement>(null);

  // Testador de segurança da senha:
  function avaliarForcaSenha(
    input: HTMLInputElement,
    texto: HTMLDivElement,
    barra: HTMLDivElement
  ) {
    console.log("Função chamada, senha:", input.value);
    const senha = input.value;
    let forca = 0;
    if (senha.length >= 6) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;
    // Remove classes antigas do input
    input.classList.remove("fraca", "media", "forte");
    if (senha.length === 0) {
      texto.textContent = "";
      barra.style.width = "0%";
      barra.classList.remove("fraca", "media", "forte");
      barra.classList.add("barra"); // Garante a classe base
    } else if (forca <= 1) {
      texto.textContent = "Senha fraca";
      barra.style.width = "33%";
      barra.classList.remove("media", "forte");
      barra.classList.add("fraca");
      input.classList.add("fraca");
    } else if (forca === 2 || forca === 3) {
      texto.textContent = "Senha média";
      barra.style.width = "66%";
      barra.classList.remove("fraca", "forte");
      barra.classList.add("media");
      input.classList.add("media");
    } else {
      texto.textContent = "Senha forte";
      barra.style.width = "100%";
      barra.classList.remove("fraca", "media");
      barra.classList.add("forte");
      input.classList.add("forte");
    }
  }

  // Handler específico para o campo de senha (chama a avaliação de força)
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("handlePasswordChange chamado, valor:", event.target.value);
    handleChange(event);
    console.log(
      "Refs:",
      passwordInputRef.current,
      passwordSecurityRef.current,
      securityLevelRef.current
    ); // Adicione isso
    if (
      passwordInputRef.current &&
      passwordSecurityRef.current &&
      securityLevelRef.current
    ) {
      avaliarForcaSenha(
        passwordInputRef.current,
        passwordSecurityRef.current,
        securityLevelRef.current
      );
    }
  }

  //Funcionalidade de trocar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }
  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword((prev) => !prev);
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 to-teal-100">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Configuração da Imagem lateral*/}

        <motion.div
          className="hidden lg:block relative overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            
          </div>
          <Image
            width={100}
            height={100}
            src={bannerCadastro}
            alt="Saúde"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-teal-600/90 to-teal-700/80" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-md"
            >
              <h2 className="text-white mb-6">Cuide da sua saúde</h2>
              <p className="text-teal-50 mb-8 leading-relaxed">
                Junte-se a milhares de pessoas que estão cuidando melhor da sua
                saúde com nossa plataforma completa.
              </p>

              <div className="space-y-4">
                {[
                  "Lembretes de exames personalizados",
                  "Artigos e conteúdo especializado",
                  "Comunidade ativa e acolhedora",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
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

        {/* Configurações do Forms */}
        <motion.div
          className="flex items-center justify-center p-6 lg:p-12 "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-md">
            <Link href={"/"}>
              <motion.button
                className="flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-8 group"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar para página inicial</span>
              </motion.button>
            </Link>

            <motion.div {...fadeInUp}>
              <div className="mb-8">
                <h1 className="text-teal-700 mb-2">Criar sua conta</h1>
                <p className="text-slate-600">
                  Preencha os dados abaixo para começar sua jornada de saúde
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 cursor-default"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="firstName" className="text-slate-700">
                    Primeiro Nome
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Digite seu nome"
                      className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="lastName" className="text-slate-700">
                    Sobrenome
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Digite seu sobrenome"
                      className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="email" className="text-slate-700">
                    E-mail
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <Label htmlFor="telefone" className="text-slate-700">
                      Telefone
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="idade" className="text-slate-700">
                      Idade
                    </Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="idade"
                        name="idade"
                        type="text"
                        className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                        value={formData.idade}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="password" className="text-slate-700">
                    Senha
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <InputRef
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 6 caracteres max 12"
                      className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      maxLength={12}
                      ref={passwordInputRef}
                      value={formData.password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <div
                    id="passwordSecurity"
                    ref={passwordSecurityRef}
                    className="mt-6 text-[14px] font-semibold text-left"
                  ></div>
                  <div className="w-full h-2 bg-gray-400 rounded-2xl mt-1.5 mb-3">
                    <div
                      id="securityLevel"
                      className="h-full w-0 transition-colors duration-300 ease-in rounded-2xl"
                      ref={securityLevelRef}
                    ></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="confirmPassword" className="text-slate-700">
                    Confirmar senha
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"} // Altera baseado no estado
                      placeholder="Digite a senha novamente"
                      className="pl-11 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      maxLength={12}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {message && (
                  <p className="text-center text-lg mt-2">{message}</p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    className="w-full h-12 cursor-pointer bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Criar minha conta
                  </Button>
                </motion.div>

                <motion.div
                  className="relative pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
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
                  transition={{ delay: 0.9 }}
                >
                  Já tem uma conta?{" "}
                  <Link href={"/Login"}>
                    <button
                      type="button"
                      className="text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                    >
                      Fazer login
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
