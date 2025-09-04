import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-4">
            We are passionate about helping developers build better products,
            faster. Our mission is to simplify development with cutting-edge
            tools and resources.
          </p>
          <p className="text-gray-600">
            Trusted by companies worldwide, we deliver quality and reliability
            in every product.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x350"
            alt="About us"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
