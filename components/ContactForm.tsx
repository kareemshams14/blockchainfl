'use client';

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (formData: FormData) => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.get("user_name")) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    const email = formData.get("user_email") as string;
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    // Message validation
    if (!formData.get("message")) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("idle");

    const formData = new FormData(formRef.current!);
    if (!validateForm(formData)) {
      return;
    }

    setFormStatus("loading");

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current!,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormStatus("success");
          formRef.current?.reset();
          setErrors({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email: ", error);
          setFormStatus("error");
        }
      );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto space-y-6 bg-card p-6 rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className={`w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className={`w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary ${
                errors.message ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-6 py-3 text-lg font-medium text-white rounded-lg shadow-md ${
              formStatus === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90 transition-all"
            }`}
            disabled={formStatus === "loading"}
          >
            {formStatus === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Form Status Messages */}
          {formStatus === "success" && (
            <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
          )}
          {formStatus === "error" && (
            <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
