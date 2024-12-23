"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {["services", "process", "projects", "about", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={`#${item}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                </Link>
              </motion.div>
            ))}
            <Button asChild>
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
   {/* <ModeToggle /> */}

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 ml-2 text-muted-foreground hover:text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["services", "process", "projects", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="block px-3 py-2 text-base hover:text-primary transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
