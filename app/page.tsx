import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Modern IT Solutions for the
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Age</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses with cutting-edge managed services, IT staffing,
              and innovative blockchain solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary transition-colors">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Managed Services</h3>
              <p className="text-muted-foreground">
                24/7 monitoring, maintenance, and support for your IT infrastructure
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary transition-colors">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">IT Staffing</h3>
              <p className="text-muted-foreground">
                Expert IT professionals for your temporary and permanent needs
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary transition-colors">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">EOR Services</h3>
              <p className="text-muted-foreground">
                Employer of Record services for global workforce management
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary transition-colors">
              <Cpu className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AOR Services</h3>
              <p className="text-muted-foreground">
                Agent of Record solutions for compliant contractor management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}