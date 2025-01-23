import { TbBrandCSharp, TbBrandJavascript, TbBrandNextjs, TbBrandPython, TbBrandReact } from "react-icons/tb";
import Link from "next/link";
import { FaJava, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DiPostgresql } from "react-icons/di";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-green-600 min-h-screen pb-12">
      {/* <div className="px-6 py-6 md:px-16 flex space-x-6 mb:space-x-16"> */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6 md:px-16 lg:gap-10">
        <div>
          {/* About section */}
          <div>
            {/* <h1 className="h1 text-3xl font-bold">About Me</h1> */}
            <div className="w-64 h-64 bg-slate-50 rounded-full"></div>
            <p></p>
          </div>

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

          {/* Skill section */}
          <div className="ml-2">
            <h2 className="h2 mt-6 mb-2">Skills</h2>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <TbBrandNextjs className="h-6" />
              <p>Nextjs</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <TbBrandReact className="h-6" />
              <p>React</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <TbBrandJavascript />
              <p>JavaScript</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <DiPostgresql />
              <p>Postgresql</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <FaJava />
              <p>Java</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <TbBrandPython />
              <p>Python</p>
            </div>
            <div className="flex items-center space-x-2 mb-2 text-white">
              <TbBrandCSharp />
              <p>CSharp</p>
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
