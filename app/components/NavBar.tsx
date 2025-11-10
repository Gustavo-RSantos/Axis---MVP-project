"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_white.png";
import { useAuth } from "../lib/useAuth"; 

import UserProfile from "./ui/Profile_navBar";
import { FaBookOpen, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  
  const { user, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  console.log("NAVBAR USER:", user);

  if (loading) return null; 
 
  return (
    <header className="bg-teal-700 px-6 py-1">
      <div className="flex items-center justify-between">
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
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
              <UserProfile />
            </>
          ) : (
            <div>
              <Link href={"/Login"}>
                <button className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-teal-700 transition mr-2">
                  Login
                </button>
              </Link>
              <Link href={"/Cadastro"}>
                <button className="bg-white text-teal-700 rounded px-4 py-1 hover:bg-teal-100 transition">
                  Cadastro
                </button>
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-teal-600 pt-4">
          {user ? (
            <div className="flex flex-col space-y-4">
              <Link 
                href={"/Comunidades"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="flex items-center text-white space-x-2 w-full hover:bg-teal-600 px-4 py-2 rounded transition">
                  <FaUsers />
                  <span>Comunidade</span>
                </button>
              </Link>
              <Link 
                href={"/Artigos"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="flex items-center text-white space-x-2 w-full hover:bg-teal-600 px-4 py-2 rounded transition">
                  <FaBookOpen />
                  <span>Artigos</span>
                </button>
              </Link>
              <div className="px-4">
                <UserProfile />
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                href={"/Login"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="text-white border border-white rounded px-4 py-2 hover:bg-white hover:text-teal-700 transition w-full">
                  Login
                </button>
              </Link>
              <Link 
                href={"/Cadastro"}
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className="bg-white text-teal-700 rounded px-4 py-2 hover:bg-teal-100 transition w-full">
                  Cadastro
                </button>
              </Link>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}