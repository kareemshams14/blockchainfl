import { Blocks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Blocks className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Blockchain FL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* <li><Link href="/services/msp" className="hover:text-foreground transition-colors">Managed Services</Link></li> */}
              <li><Link href="#services" className="hover:text-foreground transition-colors">IT Staffing</Link></li>
              <li><Link href="#services" className="hover:text-foreground transition-colors">EOR Services</Link></li>
              <li><Link href="#services" className="hover:text-foreground transition-colors">AOR Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About Us</Link></li>
              {/* <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li> */}
              <li><Link href="#about" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        <div className="flex justify-evenly items-start mb-2.5">
          <p className="font-semibold">
            Also, I want to add we are an E-Verified Company, Sam.gov Registered, Minority Owned Business.
          </p>
          <Image
            src="/images/trademark-logo-sam.svg"
            alt="Logo sam.government"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>


          <p>&copy; {new Date().getFullYear()} Blockchain FL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}