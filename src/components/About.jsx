import React from 'react';

const About=()=>{
  return (
    <section id="about" className="container mx-auto px-6 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold">About NxtRole.AI</h2>
          <p className="mt-4 text-gray-600">
            At NxtRole.AI our vision is to make career planning easy and personalized.
            We use AI to analyze skills, interests, and industry trends to suggest the best path forward.
            Our goal is to help learners and professionals close skill gaps and reach their career goals.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm p-6 rounded-lg bg-white shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgC460yhi4Rv1aLYCwCM8zl6tsPT3Mu0CnoT854hJhWDSFM8Brv8U9U2J0-hBf5tWOgc&usqp=CAU" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About 