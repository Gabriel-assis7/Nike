import { useState } from "react";

import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import Apple from "../../images/footer/Apple";
import Play from "../../images/footer/Play";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Footer = () => {

  const [isHelpOpen, setHelpIsOpen] = useState<boolean>(false);
  const [isAboutOpen, setAboutIsOpen] = useState<boolean>(false);

  const toggleHelpOpen = () => {
    setHelpIsOpen(!isHelpOpen);
  };

  const toggleAboutOpen = () => {
    setAboutIsOpen(!isAboutOpen);
  };

  return (
    <>
    <div className="flex lg:hidden w-full bg-black justify-center">
      <div className="flex px-8 flex-col w-full">
        <div className="flex py-8 border-b border-zinc-400">
          <ul className="flex flex-col gap-2 text-white">
            <li><a href="">Encontre Uma Loja Nike</a></li>
            <li><a href="">Cadastre-se para receber novidades</a></li>
            <li><a href="">Cartão Presente</a></li>
            <li><a href="">Cartão Presente</a></li>
            <li><a href="">Mapa do Site</a></li>
            <li><a href="">Nike Journal</a></li>
            <li><a href="">Corinthians</a></li>
            <li><a href="">Black Friday</a></li>
          </ul>
        </div>
        <div className="flex cursor-pointer border-b border-zinc-200 py-5" onClick={toggleHelpOpen}>
          <span className="flex w-full text-white">AJUDA</span>
          {!isHelpOpen ? (
            <AiOutlinePlus size={30} className="text-white"/>
          ) : (
            <AiOutlineMinus size={30} className="text-white"/>
          )}
        </div>
        <div className="flex flex-col gap-4">
        {isHelpOpen && (
          <ul className="flex flex-col gap-1 text-white">
            <li className="text-xs mt-3"><a href="">Encontre seu Tamanho</a></li>
            <li className="text-xs"><a href="">Entregas</a></li>
            <li className="text-xs"><a href="">Pedidos</a></li>
            <li className="text-xs"><a href="">Devoluções</a></li>
            <li className="text-xs"><a href="">Pagamentos</a></li>
            <li className="text-xs"><a href="">Produtos</a></li>
            <li className="text-xs"><a href="">Corporativo</a></li>
            <li className="text-xs"><a href="">Fale Conosco</a></li>
          </ul>
          )}
        </div>
        <div className="flex cursor-pointer border-b border-zinc-400 py-5" onClick={toggleAboutOpen}>
          <span className="w-full text-white">SOBRE A NIKE</span>
          {!isAboutOpen ? (
            <AiOutlinePlus size={30} className="text-white"/>
          ) : (
            <AiOutlineMinus size={30} className="text-white"/>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {isAboutOpen && (
          <ul className="flex flex-col gap-1 text-white">
            <li className="text-xs mt-3"><a href="">Propósito</a></li>
            <li className="text-xs"><a href="">Sustentabilidade</a></li>
            <li className="text-xs"><a href="">Sobre a Nike, Inc.</a></li>
            <li className="text-xs"><a href="">Sobre o Grupo SBF</a></li>
          </ul>
          )}
        </div>
        <div className="flex py-5">
          <ul className="flex flex-col gap-4 text-white">
            <li>Redes sociais</li>
            <div className="flex gap-5 text-gray-300">
              <a href="" className="hover:text-white"><IoLogoFacebook size={20}/></a>
              <a href="" className="hover:text-white"><FaInstagram size={20}/></a>
              <a href="" className="hover:text-white"><FaYoutube size={20}/></a>
            </div>
           </ul>
        </div>
        <div className="flex py-8 gap-2">
          <div className="cursor-pointer">
            <Play/>
          </div>
          <div className="cursor-pointer">
            <Apple/>
          </div>
        </div>
        <div className="flex flex-col border-t border-zinc-400 py-5">
          <ul className="flex items-center justify-center text-xs gap-2 text-white">
            <li className="hover:text-gray-300"><a href="">Brasil</a></li>
            <li className="hover:text-gray-300"><a href="">Política de Privacidade</a></li>
            <li className="hover:text-gray-300"><a href="">Política de Cookies</a></li>
            <li className="hover:text-gray-300"><a href="">Termos de Uso</a></li>
          </ul>
          <span className="text-xs text-center text-zinc-300">© 2024 Nike. Todos os direitos reservados.</span>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex w-full bg-black justify-center p-10">
      <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex py-10 border-b border-zinc-500"> 
          <div className="flex w-full">
            <ul className="flex gap-1 flex-col text-white">
              <li><a href="">Encontre Uma Loja Nike</a></li>
              <li className="text-sm mt-3"><a href="">Cadastre-se para receber <br /> novidades</a></li>
              <li className="text-sm"><a href="" >Cartão Presente</a></li>
              <li className="text-sm"><a href="" >Mapa do Site</a></li>
              <li className="text-sm"><a href="" >Nike Journal</a></li>
              <li className="text-sm"><a href="" >Corinthians</a></li>
              <li className="text-sm"><a href="" >Black Friday</a></li>
            </ul>
          </div>
          <div className="flex w-full">
            <ul className="flex flex-col gap-1 text-white">
              <li><a href="">Ajuda</a></li>
              <li className="text-sm mt-3"><a href="">Encontre seu Tamanho</a></li>
              <li className="text-sm"><a href="">Entregas</a></li>
              <li className="text-sm"><a href="">Pedidos</a></li>
              <li className="text-sm"><a href="">Devoluções</a></li>
              <li className="text-sm"><a href="">Pagamentos</a></li>
              <li className="text-sm"><a href="">Produtos</a></li>
              <li className="text-sm"><a href="">Corporativo</a></li>
              <li className="text-sm"><a href="">Fale Conosco</a></li>
            </ul>
          </div>
          <div className="flex w-full">
            <ul className="flex flex-col gap-1 text-white">
              <li><a href="">Sobre a Nike</a></li>
              <li className="text-sm mt-3"><a href="">Propósito</a></li>
              <li className="text-sm"><a href="">Sustentabilidade</a></li>
              <li className="text-sm"><a href="">Sobre a Nike, Inc.</a></li>
              <li className="text-sm"><a href="">Sobre o Grupo SBF</a></li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex flex-col gap-4 text-white">
              <li>Redes sociais</li>
              <div className="flex gap-5 text-gray-300">
                <a href="" className="hover:text-white"><IoLogoFacebook size={20}/></a>
                <a href="" className="hover:text-white"><FaInstagram size={20}/></a>
                <a href="" className="hover:text-white"><FaYoutube size={20}/></a>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex w-full mt-5">
          <div className="flex w-full max-w-screen-xl">
            <ul className="flex w-full text-xs gap-4 text-white">
              <li className="hover:text-gray-300"><a href="">Brasil</a></li>
              <li className="hover:text-gray-300"><a href="">Política de Privacidade</a></li>
              <li className="hover:text-gray-300"><a href="">Política de Cookies</a></li>
              <li className="hover:text-gray-300"><a href="">Termos de Uso</a></li>
            </ul>
            <span className="text-xs w-full text-right text-zinc-300">© 2024 Nike. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer