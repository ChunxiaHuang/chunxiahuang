"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname || "/");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
        setActivePath(pathname || "/");
      } // Ensure this runs only on the client
  }, [pathname]);


  const contactButtonClass = `ml-4 bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition ${
    activePath === "/contact" ? "font-extrabold" : ""
  }`;
  
  return (
    <>
        <header className="px-16 py-8 bg-purple-600 text-white">
            <nav className="flex items-center justify-between">
                <h1 className="text-xl font-bold">C - H</h1>
                <div className="flex items-center space-x-8">
                    <a
                        href="/"
                        className={`hover:underline ${
                        activePath === "/" ? "font-extraboldbold" : ""
                        }`}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className={`hover:underline ${
                            activePath === "/about" ? "font-extraboldbold" : ""
                        }`}
                    >
                        About Me
                    </a>
                    <a
                        href="/projects"
                        className={`hover:underline ${
                            activePath === "/projects" ? "font-extrabold" : ""
                        }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(true);
                        }}
                        className={contactButtonClass}
                    >
                        Contact Me
                    </a>
                </div>
            </nav>
        </header>

        {/* Modal */}
        {isModalOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setIsModalOpen(false)} // 点击背景关闭 Modal
            >
                <div
                    className="bg-white rounded-lg shadow-lg w-[500px] p-6 relative"
                    onClick={(e) => e.stopPropagation()} // 防止点击 Modal 内部关闭
                >
                    <h1 className="text-3xl font-bold">Contact Me</h1>
                    <button 
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                    onClick={() => setIsModalOpen(false)}
                    >
                        <FaTimes />
                    </button>
                    <form className="flex flex-col mt-4">
                        <input type="text" name="name" placeholder="Name" className="p-2 border rounded mb-2" />
                        <input type="email" name="email" placeholder="Email" className="p-2 border rounded mb-2" />
                        <textarea name="message" placeholder="Message" className="p-2 border rounded mb-2 max-h-[200px]"></textarea>
                        <button type="submit" className="p-2 bg-purple-600 text-white rounded">Send</button>
                    </form>
                </div>
            </div>
        )}
    </>
  );
}
