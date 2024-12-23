"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "100%", label: "Happy Clients" },
  { value: "5+", label: "Customer Rating" }
];

export function WorkExperience() {
  return (
    <section className="md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center p-9">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-4"
          style={{textAlign:'left'}}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Work Experience
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 rounded-lg p-8 shadow-lg text-center backdrop-blur-sm hover:scale-105 transform transition"
            >
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-primary text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
