"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialMedia from "./SocialMedia";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[70vh]">
      <motion.div
        className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center" > 
        <div className="text-center space-y-12"  style={{margin:'0 auto'}}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Modern IT Solutions for the
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Digital Age
            </span>
          </motion.h1>
          {/*  managed services */}
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Empowering businesses with cutting-edge, IT staffing, and innovative blockchain solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}>
                <SocialMedia/>
            </motion.div>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Button size="lg" asChild>
              <Link href="#services">
                Get Started <FaArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
