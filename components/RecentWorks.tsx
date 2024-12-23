"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const works = [
   {
    title: "Joey med Telehealth ",
    image: "/images/recent/joey.webp",
    link: "https://joeymed.com/",
    public: true,
    category: "Virtual Doctor"
  },
  {
    title: "Ascend Rehab Inc.",
    image: "/images/recent/ascend-rehab.webp",
    link: "https://www.ascendrehabinc.com/",
    public: true,
    category: "React App"
  },
  {
    title: "Medi Doc Pro",
    image: "/images/recent/medi-doc-pro.webp",
    link: "https://medidocpro.com/",
    public: true,
    category: "React App"
  },
  {
    title: "PGM Global Inc",
    image: "/images/recent/pgm-global.webp",
    link: "",
    public: false,
    category: "React App & UI/UX Design",
    tooltip: "It is confidentials"
  },
  {
    title: "Internet Service Provider System",
    image: "/images/recent/sms.webp",
    link: "https://speedwayinternet.herokuapp.com/",
    public: true,
    category: "E-Commerce"
  },
  {
    title: "Bond Legal Injury Lawyers",
    image: "/images/recent/bond.webp",
    link: "https://attorneysfortheinjured.com/",
    public: true,
    category: "CMS"
  },
  {
    title: "Kariba Farms",
    image: "/images/recent/kariba.webp",
    link: "https://karibafarms.com/",
    public: true,
    category: "CRM"
  }
]

export function RecentWorks() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto p-5">
      <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4 "
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          Our Real Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Showcasing real projects delivering innovation, reliability, scalability, and exceptional client satisfaction.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg  hover:shadow-xl transition-shadow border hover:border-primary "
            >
              <Image
                src={work.image}
                alt={work.title}
                width={300}
                height={200}
                className="w-full h-[200px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center items-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.category}</p>
                {work.public && <a href={work.link} target="_blank" className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-yellow-500 px-5 py-1 rounded-md mt-3 text-sm">View</a>}
              </div>
            </motion.div>
          ))}
          <motion.div
              key="more"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 7 * 0.1 }}
              className="relative group overflow-hidden rounded-lg bg-primary"
            >
            <div className="text-4xl flex items-center justify-center w-full h-[200px] text-white">
              +300
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}