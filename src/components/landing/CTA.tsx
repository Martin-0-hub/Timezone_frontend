import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of developers using YourApp today.
        </p>
        <button className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
