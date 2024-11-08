import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isOpen, setOpening] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scrollend", (_e) => {
      setOpening(_ => false)
    })
  }, [])

  return (
    <div className="relative flex items-center justify-between w-full h-max py-4 md-px-16 px-7">
      <motion.button onClick={() => setOpening(prev => !prev)} className="md:hidden block w-max h-max text-xl">
        <AiOutlineMenu />
      </motion.button>

     {isOpen ? <motion.nav animate={{y: 0}} initial={{y: "-100%"}} className="fixed top-0 left-0 border-b flex flex-col font-bold items-center p-3 gap-3 w-full h-max bg-neutral-800/50 inset-0 backdrop-blur-lg shadow-xl">
        <a href="#" className="w-max text-center hover:text-orange-500">Home</a>
        <a href="#" className="w-max text-center hover:text-orange-500">Course</a>
        <a href="#" className="w-max text-center hover:text-orange-500">Mentors</a>
        <a href="#" className="w-max text-center hover:text-orange-500">About</a>
      </motion.nav> : null}

      <img
        src="/onirtech.png"
        alt="logo"
        className="hidden md:block w-auto h-10"
      />
      <nav className="hidden md:flex gap-11">
        <a href="#" className="w-max text-center hover:text-orange-500">Home</a>
        <a href="#" className="w-max text-center hover:text-orange-500">Course</a>
        <a href="#" className="w-max text-center hover:text-orange-500">Mentors</a>
        <a href="#" className="w-max text-center hover:text-orange-500">About</a>
      </nav>
      <div className="flex gap-4 font-bold">
        <button className="h-max px-4 py-2">Sign In</button>
        <button className="h-max px-4 py-2 rounded-lg text-white bg-[#f89f2a]">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
