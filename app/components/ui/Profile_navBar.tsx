import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "../../lib/authClient";
import iconTeste from "@/app/assets/iconePadrao.webp"
import { useRouter } from "next/navigation";


export default function UserProfile() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [userProfile, setUserProfile] = useState({
      user_id: 0,
      user_name: '',
      user_image: null as string | null
  });
  
  useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch("/api/navBar", {
              method: "GET",
              credentials: "include",
            });
  
            const data = await response.json();
  
            if (data.success) {

              let imageUrl: string | null = null;

              // Verifica se user_image é um Uint8Array (ou array-like) com dados
              if (data.user_image && Array.isArray(data.user_image) && data.user_image.length > 0) {
                  const byteArray = new Uint8Array(data.user_image);  // Converte o array JS em Uint8Array
                  const imageBlob = new Blob([byteArray], { type: "image/png" });
                  imageUrl = URL.createObjectURL(imageBlob);
              }
  
               setUserProfile({
                user_id: data.user_id,
                user_name: data.user_name,
                user_image: imageUrl || null,
             });
            } else {
              console.error("Erro ao carregar dados:", data.message);
            }
          } catch (error) {
            console.error("Erro na requisição:", error);
          }
        };
        fetchUserData();
      }, []);

  useEffect(() => {
    return () => {
      if (userProfile.user_image) {
        URL.revokeObjectURL(userProfile.user_image);
      }
    };
  }, [userProfile.user_image]);


  const router = useRouter();

    const handleLogout = async () => {
      
      await logoutUser();
      // setTimeout(() => {
      //     alert('Logout realizado! Redirecionando...');  // Ou use uma biblioteca de toast
      //     router.replace('/');
      //   }, 2000);

        window.location.reload()
        setDropdownOpen(false)
  };

  const name = "Axis #" + userProfile.user_id
  
  return (
    <div className="relative inline-block text-white">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 cursor-pointer focus:outline-none"
      >
        <Image
          src={userProfile.user_image || iconTeste}
          alt="Icone de perfil"
          width={100}
          height={100}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium select-none">{userProfile?.user_name ?? name}</span>
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
