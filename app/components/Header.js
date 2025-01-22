"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
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


//   const contactButtonClass = `ml-4 border border-white text-white font-semibold px-6 py-2 rounded-full bg-transparent transition hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] ${
//     activePath === "/contact" ? "font-extrabold" : ""
//   }`;
  
  return (
    <>
        <header className="px-6 md:px-16 py-8 bg-purple-600 text-white">
            <nav className="flex flex-wrap items-center justify-between">
                <Link href="/">
                    <img
                        src={`/chlogo.png`}  // Construct the path to the image
                        alt='chunxia' 
                        className="object-cover max-h-6 md:max-h-10 mb-2 m-auto"
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
                <div className="hidden md:flex items-center space-x-8 font-medium">
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
                        className="text-2xl font-medium hover:font-bold flex space-x-2 items-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {/* <FaHome /> */}
                        <p>Home</p>
                    </a>
                    <a
                        href="/about"
                        className="text-2xl font-medium hover:font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Me
                    </a>
                    <a
                        href="/projects"
                        className="text-2xl font-medium hover:font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="btn-glow text-2xl"
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
        )}
    </>
  );
}
