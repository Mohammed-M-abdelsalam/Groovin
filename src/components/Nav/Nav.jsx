import { useEffect, useState } from "react";

function Nav(){
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 100) {
        nav?.classList.remove("opacity-50");
      } else {
        nav?.classList.add("opacity-50");
      }
    };

    window.addEventListener("scroll", handleScroll);

    import("flowbite").then(() => {});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <nav className="bg-black opacity-50 transition-opacity duration-500 h-[75px] fixed right-0 left-0 top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Groovin</span>
                </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="text-white border-2 border-main hover:bg-main duration-500 focus:bg-main focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col text-black md:text-white bg-white md:bg-transparent p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <a href="#hero" onClick={()=>setActive('home')} className={`block py-2 px-3 rounded-sm ${active === 'home' ? 'text-main' : 'hover:text-main'} md:border-0 md:hover:text-main md:p-0`} aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={()=>setActive('about')} className={`block py-2 px-3 rounded-sm ${active === 'about' ? 'text-main' : 'hover:text-main'} md:border-0 md:hover:text-main md:p-0`}>About</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>setActive('services')} className={`block py-2 px-3 rounded-sm ${active === 'services' ? 'text-main' : 'hover:text-main'} md:border-0 md:hover:text-main md:p-0`}>Services</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>setActive('pricing')} className={`block py-2 px-3 rounded-sm ${active === 'pricing' ? 'text-main' : 'hover:text-main'} md:border-0 md:hover:text-main md:p-0`}>Pricing</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>setActive('contact')} className={`block py-2 px-3 rounded-sm ${active === 'contact' ? 'text-main' : 'hover:text-main'} md:border-0 md:hover:text-main md:p-0`}>Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Nav