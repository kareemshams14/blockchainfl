"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processes = [
  {
    title: "1. Research & Discovery",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    description: "Understand the project's goals, audience, and requirements.",
  },
  {
    title: "2. Ideation & Planning",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    description: "Outline the structure and flow of the project.",
  },
  {
    title: "3. Design & Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    description: "Create visually appealing and functional interfaces.",
  },
  {
    title: "4. Launch & Deliver",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    description: "Deliver the product to the client, ensuring long-term success.",
  },
];

const WorkProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Work Process
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Streamlining workflows with research, planning, design, development, and seamless delivery.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border hover:border-primary text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <Image
                  src={process.image}
                  alt={process.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:text-primary mb-2 transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
