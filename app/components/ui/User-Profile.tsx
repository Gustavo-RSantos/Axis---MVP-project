import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "../../lib/authClient";
import iconTeste from "@/app/assets/iconePadrao.webp"


export default function UserProfile() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        await logoutUser();
       
        window.location.reload();  
        
        setDropdownOpen(false)
  };

  return (
    <div className="relative inline-block text-white">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 cursor-pointer focus:outline-none"
      >
        <Image
          src={iconTeste} 
          alt="Icone de perfil"
          width={100}
          height={100}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium select-none">Usuario Teste</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
   {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg text-gray-900 z-50">
            <Link href={"/Perfil"}>
                <p
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setDropdownOpen(false)}
                    >
                    Perfil
                </p>
            </Link>
            <p
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </p>
        </div>
      )}
    </div>
  );
}
