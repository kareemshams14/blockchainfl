"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaDatabase } from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Custom Development",
    description: "Build tailored solutions to meet your unique business needs."
  },
  {
    icon: FaCloud,
    title: "Cloud Integration",
    description: "Optimize and scale your cloud infrastructure efficiently."
  },
  {
    icon: FaDatabase,
    title: "Data Solutions",
    description: "Leverage data for insights and strategic decisions."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <motion.section
      className="h-[80vh] bg-muted/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4 "
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Comprehensive IT solutions tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
