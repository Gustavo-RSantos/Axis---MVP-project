"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_white.png";
import { useAuth } from "../lib/useAuth"; 

import UserProfile from "./ui/User-Profile";
import { FaBookOpen, FaUsers } from "react-icons/fa";

export function NavBar() {
  
  const { user, loading } = useAuth();
  
  console.log("NAVBAR USER:", user);

  if (loading) return null; 
 
  return (
    <header className="bg-teal-700 px-6 py-1 flex items-center justify-between">
      {/* Left side - Logo and Name */}
     <div className="flex items-center space-x-3">
      <Link href="/" className="flex items-center justify-center">
          <Image
            src={logo}
            alt="Axis Men's Health Logo"
            className="h-16 w-42"
          />
      </Link>
      </div>
      {/* Right side - Menu */}
      <nav className="flex items-center space-x-6">
        <Link href={"/Comunidades"}>
          <button className="flex items-center text-white space-x-1 cursor-pointer hover:underline">
            <FaUsers />
            <span>Comunidade</span>
          </button>
        </Link>
        <Link href={"/Artigos"}>
          <button className="flex items-center text-white space-x-1 cursor-pointer hover:underline">
            <FaBookOpen />
            <span>Artigos</span>
          </button>
        </Link>

        {user ? (
          <UserProfile />
        ) : (
            <div>
            <Link href={"/Login"}>
              <button className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-teal-700 transition mr-2">
                Login
              </button>
            </Link>
            <Link href={"/Cadastro"}>
              <button className="bg-white text-teal-700 rounded px-4 py-1 font-medium hover:bg-teal-100 transition">
                Cadastro
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}