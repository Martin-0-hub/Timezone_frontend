import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-blue-600">YourApp</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Build modern apps faster with our powerful platform.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
