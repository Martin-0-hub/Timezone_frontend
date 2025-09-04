import React from "react";
import { Shield, Zap, TrendingUp } from "lucide-react"; // example icons

const features = [
  {
    title: "Fast Performance",
    description: "Optimized for speed and efficiency.",
    icon: <Zap className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Secure",
    description: "Built with industry-leading security features.",
    icon: <Shield className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Scalable",
    description: "Grow with confidence as your needs expand.",
    icon: <TrendingUp className="w-10 h-10 text-yellow-500" />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Features
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
