export default function Home() {

    // 动态生成粒子
    const particles = Array.from({ length: 100 });
    
  return (
    <div className="bg-gradient-to-b from-purple-600 to-orange-600 h-screen">
      <div className="flex items-center justify-center space-x-10 h-full">
        <h2 className="text-6xl text-white font-bold">Coding the Future</h2>
        <div className="font-roboto">
          <h1 className="z-10 text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-6xl text-white font-bold">I am Chunxia Huang</p>
          <p className="text-6xl text-white font-bold">Software Developer &</p>
          <p className="text-6xl text-white font-bold">Graphic Designer</p>
          <p className="text-6xl text-white font-bold">I am Chunxia Huang</p>
          <p className="text-6xl text-white font-bold">I am Chunxia Huang</p>
          <p className="text-6xl text-white font-bold">I am Chunxia Huang</p>
        </div>
       
      </div>
      
      {/* <main className="relative flex items-center justify-center h-screen text-white">
      {/* <div className="particles">
        {particles.map((_, index) => (
          <div
            key={index}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div> 
      <h1 className="z-10 text-4xl font-bold">Welcome to My Portfolio</h1>
    </main> */}
    </div>
  );
}
