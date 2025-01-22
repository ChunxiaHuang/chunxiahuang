"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactModal from "./ContactModal";

export default function Header() {
  const pathname = usePathname();
  // State to control the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(pathname || "/");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
        setActivePath(pathname || "/");
      } // Ensure this runs only on the client
  }, [pathname]);


  const contactButtonClass = `ml-4 border border-white text-white font-semibold px-6 py-2 rounded-full bg-transparent transition hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] ${
    activePath === "/contact" ? "font-extrabold" : ""
  }`;
  
  return (
    <>
        <header className="px-6 sm:px-8 md:px-16 py-8 bg-purple-600 text-white">
            <nav className="flex flex-wrap items-center justify-between">
                <Link href="/">
                    <img
                        src={`/chlogo.png`}  // Construct the path to the image
                        alt='chunxia' 
                        className="object-cover max-h-12 mb-2 m-auto"
                    />
                </Link>
                {/* Hamburger Menu for Small Screens */}
                <button 
                    className="block md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    { isMenuOpen ? <FaTimes /> : <FaBars /> }
                </button>
                {/* Navigation Links */}
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="hover:font-bold">
                        Home
                    </a>
                    <a href="/about" className="hover:font-bold">
                        About Me
                    </a>
                    <a href="/projects" className="hover:font-bold">
                        Projects
                    </a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(true);
                        }}
                        className="btn-glow"
                    >
                        Contact Me
                    </a>
                </div>
            </nav>
            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-auto mt-24 py-16 bg-purple-600 text-white flex flex-col items-center justify-center space-y-8 z-50"
                >
                    <a
                        href="/"
                        className="text-2xl hover:font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-2xl hover:font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Me
                    </a>
                    <a
                        href="/projects"
                        className="text-2xl hover:font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="text-2xl btn-glow"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </header>

        {/* Modal */}
        {isModalOpen && (
            <ContactModal setIsModalOpen={setIsModalOpen}/>
            // <div
            // className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            // onClick={() => setIsModalOpen(false)} // 点击背景关闭 Modal
            // >
            //     <div
            //         className="bg-white rounded-lg shadow-lg w-[300px] lg:w-[500px] p-6 relative"
            //         onClick={(e) => e.stopPropagation()} // 防止点击 Modal 内部关闭
            //     >
            //         <h1 className="text-3xl font-bold">Contact Me</h1>
            //         <button 
            //         className="absolute top-3 right-3 text-gray-600 hover:text-black"
            //         onClick={() => setIsModalOpen(false)}
            //         >
            //             <FaTimes />
            //         </button>
            //         <form className="flex flex-col mt-4">
            //             <input type="text" name="name" placeholder="Name" className="p-2 border rounded mb-2" />
            //             <input type="email" name="email" placeholder="Email" className="p-2 border rounded mb-2" />
            //             <textarea name="message" placeholder="Message" className="p-2 border rounded mb-2 max-h-[200px]"></textarea>
            //             <button type="submit" className="p-2 bg-purple-600 text-white rounded">Send</button>
            //         </form>
            //     </div>
            // </div>
        )}
    </>
  );
}
