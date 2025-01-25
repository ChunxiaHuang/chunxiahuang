import { TbBrandCSharp, TbBrandJavascript, TbBrandNextjs, TbBrandPython, TbBrandReact } from "react-icons/tb";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaLinkedin, FaMapMarkerAlt, FaPython } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";


export default function About() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-green-600 min-h-screen pb-12">
      {/* <div className="px-6 py-6 md:px-16 flex space-x-6 mb:space-x-16"> */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 md:px-16 lg:gap-10">
        <div>
          {/* About section */}
          <div className="flex space-x-6 md:flex-col items-center md:items-start justify-center md:justify-start">
            {/* <h1 className="h1 text-3xl font-bold">About Me</h1> */}
            {/* <div className="w-56 h-56 bg-slate-50 rounded-full flex justify-center items-center"> */}
            <img
              src={`/images/avatar.jpg`}  // Construct the path to the image
              alt='chunxia'
              className="w-36 h-36 ml-2 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-8 border-purple-400"
            />
            {/* Contact section */}
            <div className="ml-2">
              <h2 className="h2 mt-6 mb-2">Contact</h2>
              <div className="flex items-center space-x-2 mb-2 text-white">
                <FaMapMarkerAlt />
                <p>Calgary, AB</p>
              </div>
              <div className="flex items-center space-x-2 mb-2 text-white">
                <MdEmail />
                <a href="mailto:chunxiaca@gmail.com">chunxiaca@gmail.com</a>
              </div>
              <Link
                href={`https://www.linkedin.com/in/chunxiahuang`}
                className="flex items-center space-x-2 mb-2 text-white
              hover:text-blue-600">
                <FaLinkedin />
                <p>Linkedin</p>
              </Link>
            </div>
          </div>



          {/* Skill section */}
          <div className="ml-2">
            <h2 className="h2 mt-6 mb-2 pl-4">Skills</h2>
            <div className="grid grid-cols-3 gap-6 md:gap-10 md:pr-6">
              <div className="flex flex-col items-center p-4 w-20 h-20  bg-white rounded-full">
                <TbBrandNextjs className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">Nextjs</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <FaReact className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">React</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <IoLogoJavascript className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">JavaScript</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <BiLogoPostgresql className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">Postgresql</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <FaJava className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">Java</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <FaPython className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">Python</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <TbBrandCSharp className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">CSharp</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <BiLogoTailwindCss className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">Tailwind</p>
              </div>
              <div className="flex flex-col items-center p-4 w-20 h-20 bg-white rounded-full">
                <FaCss3Alt className="text-purple-700" size={40} />
                <p className="text-purple-700 text-xs">CSS</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-4 p">
          {/* <p>I am a passionate software developer with skills in...</p> */}
          <h2 className="h2 mb-2">Education</h2>
          <p>Aute ea quis quis et amet laborum esse voluptate ullamco sint mollit mollit ad esse. Irure cupidatat esse dolore et occaecat qui velit nostrud occaecat. Id minim anim incididunt labore elit nisi excepteur amet reprehenderit. Exercitation deserunt veniam nostrud adipisicing do cillum nisi consectetur. Irure in nisi aliquip cillum ipsum elit ipsum quis labore anim. Quis ut excepteur veniam dolore est id elit laborum sint.</p>
          <h2 className="h2 mt-6 mb-2">Experience</h2>
          <p>Aute ea quis quis et amet laborum esse voluptate ullamco sint mollit mollit ad esse. Irure cupidatat esse dolore et occaecat qui velit nostrud occaecat. Id minim anim incididunt labore elit nisi excepteur amet reprehenderit. Exercitation deserunt veniam nostrud adipisicing do cillum nisi consectetur. Irure in nisi aliquip cillum ipsum elit ipsum quis labore anim. Quis ut excepteur veniam dolore est id elit laborum sint.</p>
          <h2 className="h2 mt-6 mb-2">Volunteer</h2>
          <p>Aute ea quis quis et amet laborum esse voluptate ullamco sint mollit mollit ad esse. Irure cupidatat esse dolore et occaecat qui velit nostrud occaecat. Id minim anim incididunt labore elit nisi excepteur amet reprehenderit. Exercitation deserunt veniam nostrud adipisicing do cillum nisi consectetur. Irure in nisi aliquip cillum ipsum elit ipsum quis labore anim. Quis ut excepteur veniam dolore est id elit laborum sint.</p>
          <p>Aute ea quis quis et amet laborum esse voluptate ullamco sint mollit mollit ad esse. Irure cupidatat esse dolore et occaecat qui velit nostrud occaecat. Id minim anim incididunt labore elit nisi excepteur amet reprehenderit. Exercitation deserunt veniam nostrud adipisicing do cillum nisi consectetur. Irure in nisi aliquip cillum ipsum elit ipsum quis labore anim. Quis ut excepteur veniam dolore est id elit laborum sint.</p>
          {/* <ul>
            <li>Programming Languages: JavaScript, Python...</li>
            <li>Frameworks: React, Next.js...</li>
            <li>Tools: Git, Docker...</li>
          </ul> */}
        </section>
      </div>
    </div>
  );
}
