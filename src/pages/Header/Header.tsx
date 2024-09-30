import * as Dialog from "@radix-ui/react-dialog";

// Icones
import { Aperture, Atom, House, List, Newspaper, Sword } from "@phosphor-icons/react";
// Imagens
import ultra from "../../../public/imgs/ultra2.png";
//import omega from "../../../public/imgs/omega.png";

export function Header() {
  return (
    <>
      <header className="w-full h-[80px] flex items-center justify-center bg-ultramarine-color">
        <nav className="w-full h-full flex justify-center items-center gap-2">
          <div className="w-1/3 pl-10">
            <Dialog.Root>
              <Dialog.Trigger><List className="w-9 h-9" /></Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed w-full h-full bg-modalBackground" />
                <Dialog.Content className="h-full bg-gray-700 fixed flex flex-col items-center">
                  <Dialog.Title className="pt-6">
                    <img src={ultra} alt="" className="w-[160px]" />
                  </Dialog.Title>
                  <tr className="w-[80%] h-[1px] my-5 bg-gray-600" />
                  <div className="flex flex-col">
                    <ul className="flex flex-col w-full">
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <House className="w-6 h-6" />
                          Home
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Newspaper className="w-6 h-6" />
                          Noticias
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Atom className="w-6 h-6" />
                          Inovação
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Sword className="w-6 h-6" />
                          Batalhas
                        </a>
                      </li>
                      <li className="w-full flex hover:bg-ultramarine-gold-color">
                        <a className="w-full h-full flex items-center gap-2 font-bold py-2 pr-20 pl-8" href="#">
                          <Aperture className="w-6 h-6" />
                          Eventos
                        </a>
                      </li>
                    </ul>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          <div className="w-1/3 flex justify-center select-none">
            <img src={ultra} alt="" className="w-[155px]" />
          </div>
          <div className="w-1/3 flex justify-end">
            <ul className="flex pr-10 gap-2 font-bold">
              <li>
                <a href="#">Login</a>
              </li>
              <span>/</span>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

{
  /* 

<Sidebar className="">
               <Menu>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Noticias</MenuItem>
                  <MenuItem>Inovação</MenuItem>
                  <MenuItem>Batalhas</MenuItem>
                  <MenuItem>Eventos</MenuItem>
                  <SubMenu label="More" title="Mais">
                     <MenuItem>Negócios</MenuItem>
                     <MenuItem>Teorias</MenuItem>
                     <MenuItem>Imperium</MenuItem>
                  </SubMenu>
                  <MenuItem>Contacts</MenuItem>
               </Menu>
            </Sidebar>
*/
}
