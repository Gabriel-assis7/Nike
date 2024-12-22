import { useState, useRef, useEffect } from "react";

import Jordan from "../../svgs/icons/Jordan"
import Snkrs from "../../svgs/icons/Snkrs"
import Logo from "../../svgs/icons/Logo"

import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      };
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []);

  return (
    <>
    <div className="flex w-full flex-col bg-white lg:hidden">
      <div className="flex w-full p-3">
        <div className="flex cursor-pointer px-2">
          <Logo/>
        </div>
        <div className="flex w-full gap-8 px-4 justify-end">
          <FaRegHeart size={22} className="cursor-pointer" title="Favoritos"/>
          <BsBagCheckFill size={22} className="cursor-pointer" title="Sacola Vazia"/>
          <button onClick={toggleSidebar}>
            <AiOutlineMenu className="cursor-pointer" size={25}/>
          </button>
          {isOpen && (
              <div ref={navbarRef} className="bg-white z-10 fixed right-0 top-0 w-72 h-full">
                <div className="p-9">
                  <button className="bg-black hover:opacity-70 rounded-full h-12 w-24 text-white ">
                    Entrar
                  </button>
                  <ul className="flex text-2xl mt-9 flex-col gap-7">
                    <li>Presenteie com Esporte</li>
                    <li>Lançamentos</li>
                    <li>Ofertas</li>
                    <li>Masculino</li>
                    <li>Feminino</li>
                    <li>SNKRS</li>
                  </ul>
                  <span className="flex mt-10 text-lg">Acessibilidade</span>
                </div>
              </div>
            )}
        </div>
      </div>
      <div className="flex px-9 py-2">
        <div className="relative w-full">
          <input
          type="text"
          placeholder="Buscar"
          className="rounded-full outline-none hover:bg-zinc-300 pl-12 pb-1 bg-zinc-100 w-full h-10"
          />
          <FiSearch className="absolute left-4 top-2.5" />
        </div>
      </div>
    </div>
    <div className="hidden flex-col lg:flex w-full">
      <div className="flex w-full bg-navbar">
        <div className="flex items-center px-10 gap-6">
          <div className="cursor-pointer" title="Jordan">
            <Jordan/>
          </div>
           <div className="cursor-pointer" title="Sneakers">
             <Snkrs/>
           </div>
         </div>
        <div className="flex w-full px-10 justify-end">
          <ul className="flex text-xs p-3 gap-4">
            <li className="cursor-pointer hover:text-gray-500">Acessibilidade</li>
            <li className="border-l border-black cursor-pointer pl-4 hover:text-gray-500">Nike Journal</li>
            <li className="border-l border-black cursor-pointer pl-4 hover:text-gray-500">Ajuda</li>
            <li className="border-l border-black cursor-pointer pl-4 hover:text-gray-500">Junte-se a nós</li>
            <li className="border-l border-black cursor-pointer pl-4 hover:text-gray-500">Entrar</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full h-navbar-desktop bg-white">
        <div className="flex w-full px-10 justify-around items-center">
          <div className="cursor-pointer" title="Nike">
            <Logo/>
          </div>
          <div className="flex justify-center">
            <ul className="flex pt-6 gap-8">
              <li className="cursor-pointer pb-6 px-2 border-b-2 border-transparent hover:border-black">Lançamentos</li>
              <li className="cursor-pointer pb-6 px-2 border-b-2 border-transparent hover:border-black">Ofertas</li>
              <li className="cursor-pointer pb-6 px-2 border-b-2 border-transparent hover:border-black">Masculino</li>
              <li className="cursor-pointer pb-6 px-2 border-b-2 border-transparent hover:border-black">Feminino</li>
              <li className="cursor-pointer pb-6 px-2 border-b-2 border-transparent hover:border-black">SNKRS</li>
            </ul>
          </div>
          <div className="flex gap-10 items-center">
            <div className="relative max-w-44">
              <input
              type="text"
              placeholder="Buscar"
              className="rounded-full outline-none hover:bg-zinc-300 pl-10 pb-1 bg-zinc-100 w-full h-10"
              />
              <FiSearch className="absolute left-4 top-2.5" />
            </div>
            <div className="flex gap-8">
              <FaRegHeart className="cursor-pointer" title="Favoritos" size={20}/>
              <BsBagCheckFill className="cursor-pointer" title="Sacola vazia" size={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar