import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Carrossel = () => {
  return (
    <div className="flex carrossel:flex-wrap carrossel:text-xs bg-navbar w-full h-14 bg-top-bar justify-center">
      <div className="flex w-full max-w-screen-md">
        <div className="flex w-full items-center">
          <button className="flex">
            <MdKeyboardArrowLeft className="carrossel:size-5" size={35}/>
          </button>
          <div className="flex justify-center w-full h-14">
            <div className="flex max-w-screen-sm">
              <div className="flex items-center">
                <FaShoppingCart className="carrossel:size-4" size={25}/>
              </div>
              <div className="flex w-full items-center p-3">
                <div className="flex max-w-screen-sm gap-3"> 
                  <div className="flex">
                    <span className="font-bold uppercase carrossel:">Presenteie com Esporte</span>
                  </div>
                  <div className="flex">
                    <span>Encontre o presente ideal.</span>
                  </div>
                  <div className="flex">
                    <a className="text-decoration-line: underline" href="#">Veja aqui</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex">
            <MdKeyboardArrowRight className="carrossel:size-5" size={35}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carrossel
