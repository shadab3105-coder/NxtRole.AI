import React from 'react';

const Hero = () => {
  return (
    <section className="container text-white mx-auto px-6 py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left side - Text content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl relative bg-gradient-to-r from-green-400 via-pink-500 to-amber-600 bg-clip-text text-transparent animate-gradient-move md:text-4xl font-extrabold leading-tight">
            NxtRole.AI – Career Guidance & Roadmap Generator
          </h1>

          <p className="mt-4 text-gray-300">
            AI-powered platform that helps students and professionals find the right
            career path, discover job roles, and learn skills to grow.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#features" className="btn-gradient inline-block">Explore Now</a>
            <a href="#contact" className=" inline-block hover:bg-red-600 bg-green-400 px-4 py-2 border rounded-lg hover:scale-90">Contact Us</a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-100 h-auto object-contain"
            src="https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2109-KOENIG(51)(1)(1).pngL.jpg"
            alt="Hero Visual"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
