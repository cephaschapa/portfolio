import React from "react"
import Wrapper from "./Wrapper";
import { MenuAlt3Icon } from '@heroicons/react/outline'
function Header() {

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };
    
    return (
        <div>
            <header className="h-16 w-full border-b-2 border-gray-500 bg-[#000] fixed top-0 z-50">
                <Wrapper>
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex items-center">
                            <span className="text-white font-bold text-2xl">Ce.</span>
                        </div>
                        <div className="flex items-center justify-end">
                            <button onClick={toggle} className="border-2 rounded-2xl border-gray-500 p-1">
                                <MenuAlt3Icon className="h-8 w-8 text-gray-300"/>
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </header>
            {/* Drawer */}
            <Menu open={open}>
                <button
                aria-label="Close"
                className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
                onClick={toggle}
                >
                &times;
                </button>
                <MenuContainer>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">Contact</MenuItem>
                <MenuItem href="#">Services</MenuItem>
                <MenuItem href="#">Components</MenuItem>
                </MenuContainer>
            </Menu>
        </div>
    )
}

export default Header

/* Logic*/
const style = {
    container: `relative top-1/4 w-full text-center mt-8`,
    item: `text-3xl text-gray-400 cursor-pointer hover:text-white`,
    menu: {
      open: `h-full w-full `,
      close: `w-full h-0`,
      default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
    },
  };
  
  function Menu({ children, open }) {
    return (
      <div
        className={`${style.menu.default} 
         ${open ? style.menu.open : style.menu.close}`}
      >
        {children}
      </div>
    );
  }
  
  function MenuContainer({ children }) {
    return <div className={style.container}>{children}</div>;
  }
  
  function MenuItem({ children, href }) {
    return (
      <div className="p-2">
        <a href={href} className={style.item}>
          {children}
        </a>
      </div>
    );
  }
