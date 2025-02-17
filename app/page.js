import Link from "next/link";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-purple-600 to-orange-600 min-h-screen flex flex-col items-center">
      <h1 className="h2 text-center py-8">Website Under Construction...</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16 w-full lg:h-auto">
        {/* 左侧头像卡片 */}
        {/* <div className="bg-white rounded-xl shadow-lg max-w-xs lg:max-w-sm h-auto p-4">
          <img
            src={`/images/avatar.jpg`}  // Construct the path to the image
            alt='chunxia'
            className="w-48 h-48 object-cover mb-4 m-auto rounded-lg"
          />
          <div className="flex items-center space-x-2 mb-2 text-gray-700">
            <FaMapMarkerAlt />
            <p className="text-gray-700">Calgary, AB</p>
          </div>
          <div className="flex items-center space-x-2 mb-2 text-gray-700">
            <MdEmail />
            <a href="mailto:chunxiaca@gmail.com"
              className="text-gray-700">chunxiaca@gmail.com</a>
          </div>
          <Link
            href={`https://www.linkedin.com/in/chunxiahuang`}
            className="flex items-center space-x-2 mb-2 text-gray-700
          hover:text-blue-600">
            <FaLinkedin />
            <p>Linkedin</p>
          </Link>
        </div> */}

        <div className="text-center md:text-left">
          <h1 className="h1">Hello</h1>
          <p className="p text-xl text-white w-[330px] md:w-auto max-w-xl pb-16">
            "Welcome to my personal website! I'm a recent Software Development graduate,
            and this site is currently under construction. Please stay tuned as I continue to build and refine it.
            Thank you for visiting!"
          </p>
          {/* <p className="p text-xl text-white w-[330px] md:w-auto max-w-xl pb-16">
          I'm a recent graduate with a diploma in Software Development and a background in graphic design. 
          I'm 
          My experience combines technical expertise with creative problem-solving, enabling me to build functional 
          and visually appealing solutions. I'm passionate about growing my career in the software development industry 
          and leveraging my skills to create impactful, user-friendly applications.</p> */}
        </div>
      </div>
    </div>
  );
}
