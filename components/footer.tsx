"use client";

import { Blocks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="border-t bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-8  grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

         
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Blocks className="h-8 w-8 text-primary" />
                <motion.span
                  className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Blockchain FL
                </motion.span>
              </Link>
            </div>
            <p className="text-sm">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>

          {/* Layout */}
              <div>
                  <h3 className="font-semibold mb-4">Layout</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                      Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#projects" className="text-muted-foreground hover:text-primary">
                        Projects
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        Terms of Service
                      </Link>
                    </li> */}
                    <li>
                      <a href="mailto:info@blockchainfl.com" className="text-muted-foreground hover:text-primary">
                        Schedule a Consultation
                      </a>
                    </li>
                  </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                  Web Application Development
                </Link> 
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                Mobile Application Development 
                </Link>
              </li> 
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                IT Staffing  
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                AI & Automation
                </Link>
              </li> 
            
            </ul>
          </div>



          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

       
        </motion.div>

      <hr/>

        {/* Additional Info */}
        <motion.div
          className="pt-8 text-center text-sm space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start justify-evenly mb-4">
            <p className="text-center md:text-left">
              We are an E-Verified Company, Sam.gov Registered, Minority Owned Business.
            </p>
            <Image
              src="/images/trademark-logo-sam.svg"
              alt="Logo sam.government"
              width={80}
              height={80}
              className="rounded-full mt-4 md:mt-0"
            />
          </div>
          <p > &copy; {new Date().getFullYear()} Blockchain FL. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}