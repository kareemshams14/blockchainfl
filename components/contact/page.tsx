"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import SocialMedia from "../SocialMedia";
import emailjs from "emailjs-com";

export function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email
        ? validateEmail(formData.email)
          ? ""
          : "Invalid email address."
        : "Email is required.",
      message: formData.message ? "" : "Message is required.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setFormStatus("loading");

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setErrors({ name: "", email: "", message: "" });
        },
        () => setFormStatus("error")
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-6 lg:px-8 min-h-[85vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Have a Project?
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Whether you need intuitive UI/UX design, robust development, or a seamless blend of both, I'm here to help.
          </motion.p>
        </div>

        <div className="flex justify-center items-center gap-10">
          <motion.button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-transform transform hover:scale-105"
            whileHover={{ rotate: 45 }}
          >
            <HiArrowRight size={24} />
          </motion.button>
          <h3 className="text-2xl font-bold text-muted-foreground">Let’s Talk</h3>
        </div>
      </div>

      {/* Contact Form Popover */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-primary hover:text-primary/90 text-2xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">
                Get in Touch
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md font-bold hover:bg-primary/90 transition-transform transform hover:scale-105"
                >
                  {formStatus === "loading"
                    ? "Sending..."
                    : formStatus === "success"
                    ? "Message Sent!"
                    : "Send Message"}
                </motion.button>
                {formStatus === "error" && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: "4rem" }}
      >
        <SocialMedia />
      </motion.div>
    </motion.section>
  );
}
