"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "./style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "./utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim() !== ""
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Initialize EmailJS if not already done
    emailjs.init("GCQoWe9kmIYGw7aCA");

    emailjs
      .sendForm(
        "service_77v0omm", // Your Service ID
        "template_4feuh7k", // Your Template ID
        formRef.current, // Use the form reference
        "GCQoWe9kmIYGw7aCA" // Your Public Key
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      })
      .catch((error) => {
        setLoading(false);
        console.error('Email sending failed:', error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="xl:mt-12 flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-10 overflow-hidden px-4 sm:px-6 lg:px-0">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 xl:flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl w-full"
      >
        <p className={`${styles.heroSubText} text-sm sm:text-base`}>Get In Touch</p>
        <h3 className={`${styles.heroHeadText} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-2 border-red-500 ring-2 ring-red-500" : ""
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 animate-pulse">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-2 border-red-500 ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 animate-pulse">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base resize-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                errors.message ? "border-2 border-red-500 ring-2 ring-red-500" : ""
              } sm:rows-7`}
            />
            {errors.message && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 animate-pulse">
                {errors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={loading || !isFormValid()}
            className={`bg-tertiary py-3 px-6 sm:px-8 outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 text-sm sm:text-base ${
              loading || !isFormValid()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-tertiary/80 hover:scale-105 cursor-pointer active:scale-95"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 xl:flex-1 h-[300px] sm:h-[400px] md:h-[550px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");