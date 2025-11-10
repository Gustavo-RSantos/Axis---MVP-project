import {
  Mail,
  Settings,
  Key,
  User,
  Trash2,
  Calendar,
  Camera,
} from "lucide-react";
import imageBase from "../assets/iconePadrao.webp";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/Dialog";
import Label from "./ui/Label";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/app/lib/authClient";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogs,
  AlertDialogTitle,
} from "./ui/Alert_Dialog";

interface ProfileCardProps {
  firstName: string;
  secondName: string;
  email: string;
  age: number;
  name: string | null;
  imageUrl: string | null;
}

interface UserProfile {
  user_name: string | null;
  user_firstname: string;
  user_secondname: string;
  user_age: number;
}

interface UserPassword {
  user_password_hash: string;
  user_password_confirm: string;
}

export function ProfileCard({
  firstName,
  secondName,
  email,
  age,
  name,
  imageUrl,
}: ProfileCardProps) {
  const router = useRouter();

  // Manipulação dos dados exibidos do usuário
  const [userProfile, setUserProfile] = useState<UserProfile>({
    user_name: name,
    user_firstname: firstName,
    user_secondname: secondName,
    user_age: age,
  });

  const [message, setMessage] = useState("");

  // Funções de manipulação da Tela de Alterar Dados do usuario
  
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(userProfile);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: name === "user_age" ? Number(value) : value,
    }));
  }

  function handleOpenModal() {
    setEditedProfile(userProfile);
    setShowProfileModal(true);
  }

  function handleCloseModal() {
    setShowProfileModal(false);
    setMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(editedProfile),
      });

      const res = await response.json();
      console.log("Resposta da API:", res);

      if (response.ok && res?.success) {
        setMessage("Perfil atualizado com sucesso!");
        setUserProfile({
          user_name: res.user.perfis?.user_name || editedProfile.user_name,
          user_firstname: res.user.user_firstname,
          user_secondname: res.user.user_secondname,
          user_age: res.user.user_age,
        });
        
        window.location.reload();
        setShowProfileModal(false);
      } else {
        setMessage(res.message || "Erro ao atualizar perfil.");
      }
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      setMessage("Erro no envio do formulário.");
    }
  }

  // Funções de manipulação da tela de alterar SENHA

  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const [editedPassword, setEditedPassword] = useState<UserPassword>({
    user_password_hash: "",
    user_password_confirm: "",
  });

  function handleOpenPasswordModal() {
    setShowPasswordChangeModal(true);
  }

  function handleClosePasswordModal() {
    setShowPasswordChangeModal(false);
    setMessage("");
  }
  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEditedPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmitNewPassword() {
    if (
      !editedPassword.user_password_hash ||
      !editedPassword.user_password_confirm
    ) {
      setMessage("Por favor, preencha ambos os campos de senha.");
      return;
    }
    if (
      editedPassword.user_password_hash !== editedPassword.user_password_confirm
    ) {
      setMessage("As senhas não coincidem. Tente novamente.");
      return;
    }

    try {
      const response = await fetch("/api/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          user_password_hash: editedPassword.user_password_hash,
        }),
      });

      const res = await response.json();

      if (response.ok && res?.success) {
        setMessage("Senha alterada com sucesso!");
        setEditedPassword({
          user_password_hash: "",
          user_password_confirm: "",
        });
        setShowPasswordChangeModal(false);
      } else {
        setMessage(res.message || "Erro ao alterar senha.");
      }
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
      setMessage("Erro interno ao alterar senha.");
    }
  }

  // Funções de manipulação da tela de DELETAR usuário
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleDeleteModal() {
    setShowDeleteModal(true);
  }

  async function handleDeleteUser() {
    try {
      const response = await fetch("/api/userDelete", {
        method: "DELETE",
        credentials: "include",
      });

      const res = await response.json();

      if (response.ok && res?.success) {
        logoutUser();
        setMessage("Usuário deletado com sucesso! Redirecionando...");
        setTimeout(() => {
          // Ajuste conforme sua rota
          router.push("/Cadastro");
        }, 500);

        setShowDeleteModal(false);
      } else {
        setMessage(res.message || "Erro ao deletar usuário.");
      }
    } catch (error) {
      console.error("Erro em deletar usuário", error);
      setMessage("Erro ao deletar usuário.");
    }
  }

  // Funções para alterar a imagem do usuário
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showImageChangeModal, setShowImageChangeModal] = useState(false);

  function handleOpenImageModal() {
    setShowImageChangeModal(true);
  }

  function handleCloseImageModal() {
    setShowImageChangeModal(false);
    setMessage("");
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  }

  async function handleChangeImage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedImage) {
      setMessage("Por favor, selecione uma imagem.");
      return;
    }
    // Validação de tipo de arquivo
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(selectedImage.type)) {
      setMessage("Apenas arquivos PNG, JPG ou JPEG são permitidos.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("user_image", selectedImage); 
      const response = await fetch("/api/changeProfileImage", {
        method: "POST",
        credentials: "include", 
        body: formData, 
      });
      const res = await response.json();
      if (response.ok && res?.success) {
        setMessage("Imagem alterada com sucesso!");
        setSelectedImage(null); 
        setShowImageChangeModal(false); 

        const fileInput = document.getElementById('user_image') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

      window.location.reload();
      } else {
        setMessage(res.message || "Erro ao alterar imagem.");
      }
    } catch (error) {
      console.error("Erro ao alterar imagem:", error);
      setMessage("Erro interno ao alterar imagem.");
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="md:flex">
        {/* Imagem do usuário */}
        <div className="md:w-64 md:shrink-0">
          <div className="relative w-64 h-64">
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white">
              <Image
                width={100}
                height={100}
                src={imageUrl || imageBase}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Botão de editar imagem */}
            <Button
              onClick={handleOpenImageModal}
              className="absolute bottom-4 right-4 w-14 h-14 cursor-pointer rounded-full bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center p-0"
              aria-label="Change image"
            >
              <Camera className="w-7 h-7 text-gray-800" />
            </Button>

            {/* Input para receber a imagem*/}
            <input
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6 md:px-8 md:pt-8 md:pb-4 flex-1">
          <h2 className="text-gray-900 mb-2">
            {firstName} {secondName}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span>{age} anos</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-gray-700 mb-1">
              <Mail className="w-4 h-4" />
              <span>Email Cadastrado:</span>
            </div>
            <p className="text-gray-600 ml-6">{email}</p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={handleOpenModal}
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                <Settings className="w-4 h-4" />
                Editar informações pessoais
              </button>
              <button
                onClick={handleOpenPasswordModal}
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                <Key className="w-4 h-4" />
                Alterar senha
              </button>
              <button
                onClick={handleDeleteModal}
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-red-600 hover:text-red-700 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                Deletar Usuário
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tela para alterar os dados do Usuário */}
      <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
        <DialogContent className="bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="p-2 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              Editar Perfil
            </DialogTitle>
            <DialogDescription>
              Atualize suas informações pessoais. Clique em salvar quando
              terminar.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="user_name" className="text-slate-700">
                  Usuário
                </Label>
                <Input
                  id="user_name"
                  type="text"
                  name="user_name"
                  value={editedProfile.user_name || ""}
                  onChange={handleChange}
                  placeholder="Digite seu nome de usuário..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="user_firstname" className="text-slate-700">
                  Primeiro Nome
                </Label>
                <Input
                  id="user_firstname"
                  type="text"
                  name="user_firstname"
                  value={editedProfile.user_firstname}
                  onChange={handleChange}
                  placeholder="Digite seu primeiro nome..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="user_secondname" className="text-slate-700">
                  Sobrenome
                </Label>
                <Input
                  id="user_secondname"
                  type="text"
                  name="user_secondname"
                  value={editedProfile.user_secondname}
                  onChange={handleChange}
                  placeholder="Digite seu sobrenome..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="user_age" className="text-slate-700">
                  Idade
                </Label>
                <Input
                  id="user_age"
                  type="number"
                  name="user_age"
                  value={editedProfile.user_age}
                  onChange={handleChange}
                  placeholder="Digite sua idade..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
            {message && (
              <div
                className={`p-2 rounded ${
                  message.includes("sucesso")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}
            <DialogFooter>
              <Button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 cursor-pointer hover:bg-slate-100"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={
                  !editedProfile.user_name ||
                  !editedProfile.user_firstname ||
                  !editedProfile.user_secondname ||
                  !editedProfile.user_age
                }
                className="bg-linear-to-r cursor-pointer px-4 py-2 from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md disabled:opacity-50"
              >
                Salvar Alterações
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Tela para alterar a senha */}
      <Dialog
        open={showPasswordChangeModal}
        onOpenChange={setShowPasswordChangeModal}
      >
        <DialogContent className="bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="p-2 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              Editar Senha
            </DialogTitle>
            <DialogDescription>
              Atualize sua senha. Clique em salvar quando terminar.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitNewPassword}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="user_name" className="text-slate-700">
                  Nova senha:
                </Label>
                <Input
                  id="user_password_hash"
                  type="password"
                  name="user_password_hash"
                  value={editedPassword?.user_password_hash || ""}
                  onChange={handleChangePassword}
                  placeholder="Digite a nova senha..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="user_password_confirm"
                  className="text-slate-700"
                >
                  Confirmar nova senha:
                </Label>
                <Input
                  id="user_password_confirm"
                  type="password"
                  name="user_password_confirm"
                  value={editedPassword?.user_password_confirm || ""}
                  onChange={handleChangePassword}
                  placeholder="Digite a senha novamente..."
                  className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
            {message && (
              <div
                className={`p-2 rounded ${
                  message.includes("sucesso")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}
            <DialogFooter>
              <Button
                type="button"
                onClick={handleClosePasswordModal}
                className="px-4 py-2 cursor-pointer hover:bg-slate-100"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={
                  !editedPassword?.user_password_hash ||
                  !editedPassword.user_password_confirm
                }
                className="bg-linear-to-r cursor-pointer px-4 py-2 from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md disabled:opacity-50"
              >
                Salvar Alterações
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Tela de confirmação de exclusão de senha*/}
      <AlertDialogs open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <AlertDialogContent className="bg-white/95 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-full">
                <Calendar className="h-5 w-5 text-red-600" />
              </div>
              Excluir Conta
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta conta? Esta ação não pode ser
              desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleCloseModal}
              className="hover:bg-slate-100"
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogs>

      {/* Tela para alterar imagem do usuário */}
      <Dialog
        open={showImageChangeModal}
        onOpenChange={setShowImageChangeModal}
      >
        <DialogContent className="bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex justify-center mb-4">
              <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-white">
                <Image
                  width={100}
                  height={100}
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : imageUrl || imageBase
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </DialogTitle>
            <DialogDescription className="flex justify-center">
              Mude sua imagem de perfil. Clique em salvar quando terminar.
            </DialogDescription>

            <DialogDescription className="flex justify-center">
               <strong>Recomendamos <span className="text-red-500">NÃO</span> utilizar imagem propria</strong>
            </DialogDescription>
            <DialogDescription className="flex justify-center">
               <strong>para se manter anônimo</strong>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleChangeImage}>
            <div className="space-y-4 py-4">
              <div className="space-y-2 flex justify-center mb-2">
                <Input
                  id="user_image"
                  type="file"
                  name="user_image"
                  onChange={handleImageChange}
                  className="w-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
            {message && (
              <div
                className={`p-2 rounded ${
                  message.includes("sucesso")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}
            <DialogFooter>
              <Button
                type="button"
                onClick={handleCloseImageModal}
                className="px-4 py-2 cursor-pointer hover:bg-slate-100"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={!selectedImage}
                className="bg-linear-to-r cursor-pointer px-4 py-2 from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md disabled:opacity-50"
              >
                Salvar Alterações
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
