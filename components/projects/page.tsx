import React from "react";
import Head from "next/head";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaShieldAlt, FaTools, FaRobot, FaChartBar } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      icon: FaLaptopCode,
      title: "Web Development",
      description:
        "Delivered high-performing and scalable web applications for various industries, utilizing the latest technologies and frameworks."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Applications",
      description:
        "Developed user-friendly mobile apps that drive engagement and deliver seamless experiences across all platforms."
    },
    {
      icon: FaDatabase,
      title: "Data Solutions",
      description:
        "Designed and implemented efficient databases and analytics solutions to unlock the power of data for business insights."
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description:
        "Migrated and optimized cloud infrastructures for enhanced security, scalability, and operational efficiency."
    }
  ];

  const futureInitiatives = [
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Solutions",
      description: "Implementing advanced security measures to protect sensitive data and infrastructure from emerging threats."
    },
    {
      icon: FaTools,
      title: "DevOps Automation",
      description: "Streamlining deployment pipelines and operations for faster delivery and increased efficiency."
    }
  ];

  const achievements = [
    {
      icon: FaRobot,
      title: "AI-Powered Innovations",
      description: "Delivered cutting-edge AI solutions to drive automation and enhance decision-making."
    },
    {
      icon: FaChartBar,
      title: "Business Analytics Success",
      description: "Helped clients achieve actionable insights and data-driven decisions through advanced analytics."
    }
  ];

  return (
    <>
      <Head>
        <title>Our Projects | Blockchain FL</title>
        <meta
          name="description"
          content="Discover our diverse portfolio of projects, including web development, mobile applications, data solutions, and cloud integrations."
        />
        <meta name="keywords" content="Projects, Web Development, Mobile Apps, Data Solutions, Cloud Integration" />
      </Head>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            At Blockchain FL, we pride ourselves on a rich portfolio of successful projects that showcase our expertise and commitment to innovation. Here are some of the highlights from our work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <project.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Our Projects Stand Out</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Our projects are a testament to our dedication to delivering value-driven and impactful solutions. We prioritize client satisfaction, innovation, and excellence in every engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                We work closely with our clients to ensure every project aligns with their unique goals and vision.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
              <p className="text-muted-foreground">
                Leveraging the latest tools and techniques to deliver state-of-the-art solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                A track record of success that demonstrates our ability to deliver on time and exceed expectations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">
                Our clients consistently praise us for our professionalism, expertise, and results-driven focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Future Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <initiative.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
