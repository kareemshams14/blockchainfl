import React from "react";
import Head from "next/head";
import { FaShieldAlt, FaUsers, FaGlobe, FaCog, FaRocket, FaHandsHelping, FaLeaf, FaRecycle } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaShieldAlt,
      title: "Managed IT Services",
      description:
        "24/7 monitoring, maintenance, and support to keep your IT systems running smoothly. We ensure your business operations remain uninterrupted and secure.",
    },
    {
      icon: FaUsers,
      title: "IT Staffing",
      description:
        "Providing expert IT professionals for temporary and permanent staffing needs. Our team connects you with top talent to drive innovation and success.",
    },
    {
      icon: FaGlobe,
      title: "Global Solutions",
      description:
        "Empowering businesses with global workforce management and operational solutions. Expand your reach with our tailored international services.",
    },
    {
      icon: FaCog,
      title: "Custom Development",
      description:
        "Tailored software and system solutions to address unique business challenges. From concept to deployment, we deliver high-quality custom projects.",
    },
  ];

  const additionalValues = [
    {
      icon: FaRocket,
      title: "Scalable Solutions",
      description: "We design our services to grow with your business, ensuring long-term value and adaptability.",
    },
    {
      icon: FaHandsHelping,
      title: "Dedicated Support",
      description: "Our team is available to assist you every step of the way, providing expertise and problem-solving capabilities.",
    },
  ];

  const environmentValues = [
    {
      icon: FaLeaf,
      title: "Sustainability",
      description: "We are committed to environmentally friendly practices that reduce our carbon footprint and promote a greener future.",
    },
    {
      icon: FaRecycle,
      title: "Eco-Friendly Solutions",
      description: "Our processes and technologies are designed to minimize waste and maximize efficiency for a sustainable tomorrow.",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Blockchain FL</title>
        <meta
          name="description"
          content="Explore the comprehensive IT services provided by Blockchain FL, including managed IT, staffing, global solutions, and custom development."
        />
        <meta name="keywords" content="IT Services, Managed IT, IT Staffing, Global Solutions, Custom Development" />
      </Head>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            At Blockchain FL, we offer a diverse range of IT solutions designed to empower your business. Whether it's managing your IT infrastructure, staffing your team with the best talent, or crafting custom software solutions, we have you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            At Blockchain FL, we are committed to delivering cutting-edge solutions that drive business success. Our team of experts combines technical excellence with a deep understanding of industry trends to offer unmatched services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our professionals bring decades of experience and industry knowledge to every project.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                We leverage the latest technologies and methodologies to deliver forward-thinking solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Your success is our priority. We tailor our services to meet your unique business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalValues.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentValues.map((env, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <env.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{env.title}</h3>
                <p className="text-muted-foreground">{env.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
