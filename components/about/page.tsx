"use client";

import React from "react";
import { Shield, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialMedia from "@/components/SocialMedia";

export default function AboutUs() {
  return (
    <section className="py-20" id="about" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Blockchain Fl
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tailored IT solutions delivering innovation, scalability, efficiency, and expertise for your business.
          </motion.p>
        </div>

        {/* Founder and Co-Founder Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Founder */}
          <motion.div
               className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/karim.jpeg"
              alt="Karim Gaber"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Karim Gaber</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founder and CEO of Blockchain Florida LLC, Karim combines a robust technical background with over a decade of leadership in IT staffing and strategic operations.
            </p>
            <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">
              His strategic vision has driven $50M+ in revenue and optimized global operations.
            </p>
          </motion.div>

          {/* Co-Founder */}
          <motion.div
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/maho.jpeg"
              alt="Mahi Puvvula"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Mahi Puvvula</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
            Co-Founder of Blockchain Florida LLC, Mahi brings nearly two decades of unparalleled experience in talent acquisition and recruitment strategy.
            </p>
            <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
            <p className="text-muted-foreground">
              Mahi specializes in building high-performing teams and fostering diversity in the workplace.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        {/* <motion.div
          className="bg-muted/50 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Reach out to us to learn how Blockchain Florida LLC can revolutionize your IT staffing and operations.
          </p>
          <a
            href="mailto:info@blockchainfl.com"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 transition-all"
          >
            Contact Us
          </a>
        </motion.div> */}

        {/* Social Media Links
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SocialMedia />
        </motion.div> */}
      </div>
    </section>
  );
}
