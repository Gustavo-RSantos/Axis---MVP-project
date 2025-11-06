import { Mail, Settings, Key, User } from 'lucide-react';
import imageBase from "../../assets/iconePadrao.webp"
import Image from 'next/image';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/Dialog';
import Label from '../../components/ui/Label';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useState } from 'react';

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

export function ProfileCard({ firstName, secondName, email, age, name, imageUrl }: ProfileCardProps) {

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    user_name: name,
    user_firstname: firstName,
    user_secondname: secondName,
    user_age: age,
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(userProfile);
  const [message, setMessage] = useState("");

  const handleOpenModal = () => {
    setEditedProfile(userProfile);
    setShowProfileModal(true);
  };

  const handleCloseModal = () => {
    setShowProfileModal(false);
    setEditedProfile(userProfile);
    setMessage("");
  };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: name === 'user_age' ? Number(value) : value, 
    }));
  };

 async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
      try {
        const response = await fetch('/api/update', {  
          method: 'POST',  
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', 
          body: JSON.stringify(editedProfile),  
        });

        const res = await response.json();
        console.log('Resposta da API:', res); // Log para depuração

        if (response.ok && res?.success) {
          setMessage("Perfil atualizado com sucesso!");
          setUserProfile({
            user_name: res.user.perfis?.user_name || editedProfile.user_name,
            user_firstname: res.user.user_firstname,
            user_secondname: res.user.user_secondname,
            user_age: res.user.user_age,
          });
          window.location.reload()
          setShowProfileModal(false);
        } else {
          setMessage(res.message || "Erro ao atualizar perfil.");
        }
      } catch (error) {
        console.error("Erro no envio do formulário:", error);
        setMessage("Erro no envio do formulário.");
      }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="md:flex">
        {/* Profile Image */}
        <div className="md:w-64 md:shrink-0">
          <Image
            width={100}
            height={100}
            src={imageUrl || imageBase}
            alt="Foto de perfil"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 md:p-8 flex-1">
          <h2 className="text-gray-900 mb-2">{firstName} {secondName}</h2>
          
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button  
                onClick={handleOpenModal}
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                <Settings className="w-4 h-4" />
                Editar informações pessoais
              </button>
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
              >
                <Key className="w-4 h-4" />
                Alterar senha
              </button>
            </div>
          </div>
        </div>
      </div>

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
              <div className={`p-2 rounded ${message.includes('sucesso') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
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
    </div>
  );
}
