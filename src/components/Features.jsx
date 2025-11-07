import React from "react";

const Features=()=>{
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Features
      </h2>
      <p className="text-center text-gray-600 mt-2">
        What NxtRole.AI helps you do
      </p>

      {/* Features List */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/*  Feature Card */}
        <div className="bg-white shadow-md p-6 rounded-xl text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-blue-600">
            Career Recommendations
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Get AI-driven role suggestions based on your profile and interests.
          </p>
        </div>

        {/*  Feature Card */}
        <div className="bg-white shadow-md p-6 rounded-xl text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-blue-600">
            Course Recommendations
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Recommended courses and resources to build the right skills.
          </p>
        </div>

        {/*  Feature Card */}
        <div className="bg-white shadow-md p-6 rounded-xl text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-blue-600">
            Skill Gap Analysis
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Identify gaps between your skills and target roles.
          </p>
        </div>

        {/*  Feature Card */}
        <div className="bg-white shadow-md p-6 rounded-xl text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold text-blue-600">
            Personalized Roadmap
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Step-by-step plan to reach your next role or promotion.
          </p>
        </div>
      </div>
    </section>
  );
}


export default Features