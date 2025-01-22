import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ContactModal( {setIsModalOpen} ) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // 重置表单
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => setIsModalOpen(false)} // 点击背景关闭 Modal
      >
        <div
            className="bg-white rounded-lg shadow-lg w-[300px] md:w-[500px] p-6 relative"
            onClick={(e) => e.stopPropagation()} // 防止点击 Modal 内部关闭
        >
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <button 
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
            onClick={() => setIsModalOpen(false)}
            >
                <FaTimes />
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border rounded mb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border rounded mb-2"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-2 border rounded mb-2 h-[200px]"
                  required
                ></textarea>
                <button type="submit" className="p-2 bg-purple-600 text-white text-xl rounded hover:font-bold hover:bg-purple-700">Send</button>
            </form>
        </div>
    </div>
  );
}
