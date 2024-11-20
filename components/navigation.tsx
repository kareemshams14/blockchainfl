"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Blocks className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blockchain FL
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/services" className="text-sm hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-sm hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
            <ModeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
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
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/services"
              className="block px-3 py-2 text-base hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-base hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}