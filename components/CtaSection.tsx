import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join the growing number of businesses that trust Blockchain FL for
            their technology needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link  href="mailto:info@blockchainfl.com">
              Schedule a Consultation
              <FaArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
  