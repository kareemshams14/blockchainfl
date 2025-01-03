"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLaptop,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop className="h-12 w-12 mb-4 text-primary" />,
    title: "Web Application Development",
    description: "Cutting-edge web apps tailored for your business needs.",
  },
  {
    icon: <FaMobileAlt className="h-12 w-12 mb-4 text-primary" />,
    title: "Mobile Application Development",
    description: "Intuitive and user-friendly mobile apps for Android and iOS.",
  },
  {
    icon: <FaCloud className="h-12 w-12 mb-4 text-primary" />,
    title: "Cloud Integration & Solutions",
    description: "Seamless integration and optimization of cloud services.",
  },
  {
    icon: <FaDatabase className="h-12 w-12 mb-4 text-primary" />,
    title: "Data Analytics & Management",
    description: "Leverage data for insights and smarter decision-making.",
  },
  {
    icon: <FaRobot className="h-12 w-12 mb-4 text-primary" />,
    title: "AI & Automation",
    description: "Empower your business with intelligent automation and AI-driven tools.",
  },
  {
    icon: <FaUsers className="h-12 w-12 mb-4 text-primary" />,
    title: "IT Staffing",
    description: "Expert IT professionals for your temporary and permanent needs.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="py-20 min-h-[85vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Comprehensive IT solutions tailored to your business needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-xl transition-shadow border hover:border-primary text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
