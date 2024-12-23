"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="mt-12 text-center">
      <div className="flex justify-center gap-6">
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          
          whileHover={{ scale: 1.2, color: "hsl(210, 100%, 50%)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook className="h-6 w-6 text-primary transition-all duration-300" />
        </motion.a>
        <motion.a
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"

          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "hsl(190, 100%, 50%)" }}
          whileTap={{ scale: 0.8 }}
        >
          <FaTwitter className="h-6 w-6 text-primary transition-all duration-300" />
        </motion.a>
        <motion.a
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"

          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "hsl(300, 100%, 50%)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="h-6 w-6 text-primary transition-all duration-300" />
        </motion.a>
        <motion.a
          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"

          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "hsl(220, 100%, 50%)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="h-6 w-6 text-primary transition-all duration-300" />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialMedia;
