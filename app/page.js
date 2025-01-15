import Link from "next/link";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {

    // 动态生成粒子
    const particles = Array.from({ length: 100 });
    
  return (
    <div className="bg-gradient-to-b from-purple-600 to-orange-600 h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16 h-full px-4">
        {/* 左侧头像卡片 */}
        <div className="bg-white rounded-xl shadow-lg max-w-xs lg:max-w-sm h-auto p-4">
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
            <MdEmail/>
            <p className="text-gray-700">chunxiaca@gmail.com</p>
          </div>
          <Link 
          href={`https://www.linkedin.com/in/chunxiahuang`}
          className="flex items-center space-x-2 mb-2 text-gray-700
          hover:text-blue-600">
            <FaLinkedin/>
            <p>Linkedin</p>
          </Link>
        </div>
        
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-6xl text-white font-bold">Hello</h1>
          <p className="text-2xl text-white max-w-xl">
          I'm a recent graduate with a diploma in Software Development and a background in graphic design. My experience combines technical expertise with creative problem-solving, enabling me to build functional and visually appealing solutions. I’m passionate about growing my career in the software development industry and leveraging my skills to create impactful, user-friendly applications.</p>
        </div>
      </div>
    </div>
  );
}
