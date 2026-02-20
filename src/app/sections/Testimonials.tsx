"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    content: "MIKU + JACE delivered our SaaS platform in 10 weeks. Traditional agencies quoted us 6 months and 3x the price. The AI + human workflow is the real deal.",
    rating: 5,
    project: "SaaS Platform",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLabs",
    content: "The 8-agent system blew my mind. Having specialized agents for design, code, and QA meant every aspect of our app was top-tier quality.",
    rating: 5,
    project: "Mobile App",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "Our website loads in under 1 second and converts 40% better than the old one. The AI optimization combined with JACE's design eye is unbeatable.",
    rating: 5,
    project: "E-commerce Site",
  },
  {
    name: "David Kim",
    role: "CTO, DataFlow",
    content: "They built our automation system that saves us 20 hours per week. The AI agents understood our complex requirements perfectly.",
    rating: 5,
    project: "Automation System",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    content: "Daily updates and unlimited iterations meant we got exactly what we wanted. No surprise fees, no delays, just pure execution.",
    rating: 5,
    project: "Web Application",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-indigo-950/10 to-[#0a0a0f]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Love</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say.
          </p>
        </motion.div>
        
        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <div className="glass rounded-3xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
              <Quote className="w-12 h-12 text-indigo-500/30" />
            </div>
            
            {/* Content */}
            <div className="relative pt-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-bold mb-4">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-400">{testimonials[currentIndex].role}</p>
                  <span className="mt-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                    {testimonials[currentIndex].project}
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "90", label: "Days Average" },
            { value: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
