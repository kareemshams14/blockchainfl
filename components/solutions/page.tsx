"use client";

import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    image: "/images/managed-it.jpg", // Replace with your actual image paths
    title: "Managed IT Services",
    description: "24/7 monitoring, maintenance, and support to keep your systems running smoothly."
  },
  {
    image: "/images/it-staffing.jpg",
    title: "IT Staffing",
    description: "Providing skilled IT professionals for your temporary and permanent needs."
  },
  {
    image: "/images/global-eor.jpg",
    title: "Global EOR Solutions",
    description: "Comprehensive Employer of Record services for seamless global workforce management."
  },
  {
    image: "/images/blockchain-innovations.jpg",
    title: "Blockchain Innovations",
    description: "Revolutionizing industries with cutting-edge blockchain technology."
  }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-20 bg-background flex items-center justify-center">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Solutions
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="h-32 w-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{solution.title}</h2>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;
