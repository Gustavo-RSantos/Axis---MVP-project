import { Mail, Settings, Key  } from 'lucide-react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  age: number;
  imageUrl: string;
}

export function ProfileCard({ name, age, imageUrl }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="md:flex">
        {/* Profile Image */}
        <div className="md:w-64 md:shrink-0">
          <Image
            width={100}
            height={100}
            src={imageUrl}
            alt="Foto de perfil"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 md:p-8 flex-1">
          <h2 className="text-gray-900 mb-2">{name}</h2>
          
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
            <p className="text-gray-600 ml-6">teste@gmail.com</p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button  
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
    </div>
  );
}
