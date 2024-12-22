import { useState } from "react"

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

import Navbar from "../../components/subheader/Navbar"
import Carrossel from "../../components/common/Carrossel"
import Footer from "../../components/common/Footer"


const Home = () => {

  const [isHighLightOpen, setHighLightOpen] = useState<boolean>(false);
  const [isSectionWomanOpen, setSectioWomanOpen] = useState<boolean>(false);
  const [isSectionManOpen, setSectionManOpen] = useState<boolean>(false);
  const [isSectionChildrenOpen, setSectionChildrenOpen] = useState<boolean>(false);

  const toggleHighLight = () => {
    setHighLightOpen(!isHighLightOpen);
  };

  const toggleWomanSection = () => {
    setSectioWomanOpen(!isSectionWomanOpen);
  };

  const toggleManSection = () => {
    setSectionManOpen(!isSectionManOpen);
  };

  const toggleChildrenSection = () => {
    setSectionChildrenOpen(!isSectionChildrenOpen);
  };

  return (
    <>
      <div className="w-screen fixed">
        <Navbar/>
      </div>
      <div className="pt-28">
      </div>
      <Carrossel/>
      <div className="flex w-full px-10 justify-center">
        <div className="flex justify-center w-full max-w-screen-xl">
          <div className="flex flex-col w-full max-w-screen-xl">
            <div className="bg-banner-main-home-mobile lg:bg-banner-main-home-desk bg-cover flex bg-center w-full h-screen"></div>
            <div className="flex gap-5 text-left lg:text-center flex-col">
              <h2 className="lg:text-5xl text-4xl tracking-tighter pt-10 font-extrabold">PRESENTEIE COM ESPORTE</h2>
              <span className="text-lg leading-tight font-semibold">Escolha presentes pensados para um maior conforto e melhores movimentos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex button-home-ofertas:flex-col gap-5">
          <button className="bg-black w-48 h-11 hover:bg-opacity-70 text-white rounded-full">
            Melhores Presentes
          </button>
          <div>
            <button className="bg-black w-32 h-11 hover:bg-opacity-70 text-white rounded-full">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full p-8 justify-center">
        <div className="flex w-full max-w-screen-xl text-left">
          <span className="text-3xl font-medium">Escolhidos dos Atletas Nike</span>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full lg:flex max-w-screen-xl">
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-pamela escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DA PÂMELA ROSA</span>
              <span className="text-sm text-gray-500">@pamelarosaskt</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-bia escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DA BIA FERREIRA</span>
              <span className="text-sm text-gray-500">@beatrizferreira60kg</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-ana escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DA ANA CRISTINA</span>
              <span className="text-sm text-gray-500">@ana.cristina.desouza</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-10">
        <div className="lg:flex w-full max-w-screen-xl">
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-rafaela escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DA RAFAELA SILVA</span>
              <span className="text-sm text-gray-500">@rafaelasilvaa</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-petrucio escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DO PETRÚCIO</span>
              <span className="text-sm text-gray-500">@petrucio_t47</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex py-3 lg:py-0 w-full flex-col flex-wrap items-center">
              <div className="bg-bela escolhidos-atletas-mobile:w-36 escolhidos-atletas-mobile:h-36 cursor-pointer bg-center bg-cover w-56 h-56 rounded-full"></div>
              <span className="font-extrabold text-lg escolhidos-atletas-mobile:text-sm pt-1 tracking-tighter">ESCOLHIDOS DA BELA NALU</span>
              <span className="text-sm text-gray-500">@bela_nalu</span>
              <button className="bg-black w-32 h-7 mt-2 text-sm hover:bg-opacity-70 text-white rounded-full">Ver Seleção</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full p-8 justify-center">
        <div className="flex w-full max-w-screen-xl text-left">
          <span className="text-3xl font-medium">Compre Por Categoria</span>
        </div>
      </div>
      <div className="flex w-full justify-center px-10">
        <div className="flex w-full gap-2 max-w-screen-xl">
          <div className="flex w-full flex-col gap-1">
            <div className="bg-gifting-corrida bg-cover bg-center cursor-pointer w-full h-96"></div>
            <span className="text-sm font-semibold">Corrida</span>
          </div>
          <div className="hidden lg:flex w-full flex-col gap-1">
            <div className="bg-gifting-treino bg-cover bg-center cursor-pointer w-full h-96"></div>
            <span className="text-sm font-semibold">Treino e Academia</span>
          </div>
          <div className="hidden lg:flex w-full flex-col gap-1">
            <div className="bg-gifting-futebol bg-cover bg-center cursor-pointer w-full h-96"></div>
            <span className="text-sm font-semibold">Futebol</span>
          </div>
          <div className="hidden lg:flex w-full flex-col gap-1">
            <div className="bg-gifting-casual bg-cover bg-center cursor-pointer w-full h-96"></div>
            <span className="text-sm font-semibold">Casual</span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-20 px-10">
        <div className="flex w-full lg:hidden">
          <div className="w-full h-gifting-banner-mobile bg-cover gifting-banner-mobile:bg-cover bg-no-repeat bg-center cursor-pointer bg-gifting-banner-mobile"></div>
        </div>
        <div className="hidden lg:flex w-full max-w-screen-xl">
          <div className="w-full gifting-banner-desk:bg-contain cursor-pointer h-64 bg-gifting-banner-desk bg-cover bg-no-repeat bg-center"></div>
        </div>
      </div>
      <div className="flex w-full justify-center px-10">
        <div className="flex w-full max-w-screen-xl gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="bg-nikedunk bg-cover bg-center w-full h-gifting-products-home cursor-pointer"></div>
            <span className="font-bold text-lg">Nike Dunk</span>
          </div>
          <div className="hidden lg:flex w-full flex-col gap-2">
            <div className="bg-nikev2k-home bg-cover bg-center w-full h-gifting-products-home cursor-pointer"></div>
            <span className="font-bold text-lg">Nike V2K</span>
          </div>
          <div className="hidden lg:flex w-full flex-col gap-2">
            <div className="bg-nikekillshot-home bg-cover bg-center w-full h-gifting-products-home cursor-pointer"></div>
            <span className="font-bold text-lg">Nike Killshot</span>
          </div>
        </div>
      </div>
      <div className="flex w-full p-10 flex-col">
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-screen-xl">
            <span className="text-lg lg:text-2xl">Produtos mais buscados</span>
          </div>
        </div>
        <div className="flex lg:border-0 border-b border-zinc-300 w-full py-5 items-center flex-col">
          <div className="flex w-full flex-col max-w-screen-xl">
            <ul className="flex justify-center lg:justify-normal w-full">
              <li className="text-xl hidden sm:flex sm:gap-4 md:gap-8 lg:gap-16">
                <button className="sm:border-b-2 md:p-3 border-black">Calçados</button>
                <button>Roupas</button>
                <button>Acessórios</button>
                <button>Esportes</button>
                <button>Journal</button>
                <button>Promoções</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col lg:hidden">
          <ul className="flex border-b py-4 border-zinc-400 cursor-pointer w-full" onClick={toggleHighLight}>
            <li className="w-full">Destaques</li>
            {isHighLightOpen ? (
              <MdKeyboardArrowDown size={30}/>
            ) : (
              <MdKeyboardArrowUp size={30}/>
            )}
          </ul>
          <div className="flex lg:hidden">
            {isHighLightOpen && (
            <div className="flex py-4 flex-col gap-3 text-gray-500">
              <a href="#" className="text-base hover:text-black">Tênis casual</a>
              <a href="#" className="text-base hover:text-black">Air Jordan 1</a>
              <a href="#" className="text-base hover:text-black">Tênis cano alto</a>
              <a href="#" className="text-base hover:text-black">Air Max 90</a>
            </div>
            )}
          </div>
          <ul className="flex border-b py-4 border-zinc-400 cursor-pointer w-full" onClick={toggleWomanSection}>
            <li className="w-full">Feminino</li>
            {isSectionWomanOpen ? (
              <MdKeyboardArrowDown size={30}/>
            ) : (
              <MdKeyboardArrowUp size={30}/>
            )}
          </ul>
          <div className="flex lg:hidden">
            {isSectionWomanOpen && (
            <div className="flex py-4 flex-col gap-3 text-gray-500">
              <a href="" className="text-base hover:text-black">Tênis casual</a>
              <a href="" className="text-base hover:text-black">Air Jordan 1</a>
              <a href="" className="text-base hover:text-black">Tênis cano alto</a>
              <a href="" className="text-base hover:text-black">Air Max 90</a>
            </div>
            )}
          </div>
          <ul className="flex border-b py-4 border-zinc-400 cursor-pointer w-full" onClick={toggleManSection}>
            <li className="w-full">Masculino</li>
            {isSectionManOpen ? (
              <MdKeyboardArrowDown size={30}/>
            ) : (
              <MdKeyboardArrowUp size={30}/>
            )}
          </ul>
          <div className="flex lg:hidden">
            {isSectionManOpen && (
            <div className="flex py-4 flex-col gap-3 text-gray-500">
              <a href="" className="text-base hover:text-black">Tênis casual</a>
              <a href="" className="text-base hover:text-black">Air Jordan 1</a>
              <a href="" className="text-base hover:text-black">Tênis cano alto</a>
              <a href="" className="text-base hover:text-black">Air Max 90</a>
            </div>
            )}
          </div>
          <ul className="flex border-b py-4 border-zinc-400 cursor-pointer w-full" onClick={toggleChildrenSection}>
            <li className="w-full">Infantil</li>
            {isSectionChildrenOpen ? (
              <MdKeyboardArrowDown size={30}/>
            ) : (
              <MdKeyboardArrowUp size={30}/>
            )}
          </ul>
          <div className="flex lg:hidden">
            {isSectionChildrenOpen && (
            <div className="flex py-4 flex-col gap-3 text-gray-500">
              <a href="#" className="text-base hover:text-black">Tênis casual</a>
              <a href="#" className="text-base hover:text-black">Air Jordan 1</a>
              <a href="#" className="text-base hover:text-black">Tênis cano alto</a>
              <a href="#" className="text-base hover:text-black">Air Max 90</a>
            </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex justify-center w-full">
          <div className="flex w-full flex-col max-w-screen-xl">
            <ul className="flex text-2xl lg:gap-28 xl:gap-44 2xl:gap-52">
              <li className="flex flex-col gap-2">
                Destaques
                <div className="flex flex-col gap-3 text-gray-500">
                  <a href="#" className="text-base hover:text-black">Tênis casual</a>
                  <a href="#" className="text-base hover:text-black">Air Jordan 1</a>
                  <a href="#" className="text-base hover:text-black">Tênis cano alto</a>
                  <a href="#" className="text-base hover:text-black">Air Max 90</a>
                </div>
              </li>
              <li className="flex flex-col gap-2">
                Feminino
                <div className="flex flex-col gap-3 text-gray-500">
                  <a href="#" className="text-base hover:text-black">Jordan feminino</a>
                  <a href="#" className="text-base hover:text-black">Dunk feminino</a>
                  <a href="#" className="text-base hover:text-black">Tênis cano alto</a>
                  <a href="#" className="text-base hover:text-black">Air Force feminino</a>
                </div>
              </li>
              <li className="flex flex-col gap-2">
                Masculino
                <div className="flex flex-col gap-3 text-gray-500">
                  <a href="#" className="text-base hover:text-black">Jordan masculino</a>
                  <a href="#" className="text-base hover:text-black">Air Force 1 masculino</a>
                  <a href="#" className="text-base hover:text-black">Air Jordan 1 masculino</a>
                  <a href="#" className="text-base hover:text-black">Air Max 90 masculino</a>
                </div>
              </li>
              <li className="flex flex-col gap-2">
                Infantil
                <div className="flex flex-col gap-3 text-gray-500">
                  <a href="#" className="text-base hover:text-black">Air Force 1 infantil</a>
                  <a href="#" className="text-base hover:text-black">Air max 90 infantil</a>
                  <a href="#" className="text-base hover:text-black">Jordan infantil masculino</a>
                  <a href="#" className="text-base hover:text-black">Tênis casual infantil</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home