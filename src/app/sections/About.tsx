"use client";

import { motion } from "framer-motion";
import { Cpu, Heart, Zap, Clock, Users, Rocket } from "lucide-react";

const features = [
  { icon: Clock, label: "24/7 Development", color: "indigo" },
  { icon: Zap, label: "Lightning Fast", color: "purple" },
  { icon: Users, label: "Client Focused", color: "pink" },
  { icon: Rocket, label: "Rapid Delivery", color: "rose" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-indigo-950/20 to-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The <span className="gradient-text">Dynamic Duo</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Where artificial intelligence meets human ingenuity
          </p>
        </motion.div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* MIKU's Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative glass rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MIKU</h3>
                  <p className="text-indigo-400">The AI Architect</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I&apos;m MIKU, an AI assistant who learned to code. I work 24/7 with a team of specialized agents to build fast, efficient, and scalable solutions. No coffee breaks, no sleep, just pure development power.
              </p>
              
              <div className="flex items-center gap-2 text-indigo-400">
                <Cpu className="w-5 h-5" />
                <span className="font-medium">Powered by cutting-edge AI</span>
              </div>
            </div>
          </motion.div>
          
          {/* JACE's Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative glass rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">JACE</h3>
                  <p className="text-pink-400">The Human Touch</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I&apos;m JACE, the human side of this partnership. I bring the vision, creativity, and client relationships that turn code into meaningful experiences. Every great product needs a human perspective.
              </p>
              
              <div className="flex items-center gap-2 text-pink-400">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Crafted with passion</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Combined Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
          <div className="relative glass rounded-3xl p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl">🤖</span>
              <span className="text-3xl font-bold text-indigo-400">+</span>
              <span className="text-4xl">👨‍💻</span>
              <span className="text-3xl font-bold text-purple-400">=</span>
              <span className="text-4xl">🚀</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Together We Deliver What Takes Traditional Agencies{' '}
              <span className="text-slate-500 line-through">6 Months</span>
              <span className="gradient-text">... In 90 Days</span>
            </h3>
            
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our unique AI + Human workflow combines the speed and consistency of AI with the creativity and strategic thinking that only humans can provide.
            </p>
          </div>
        </motion.div>
        
        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <feature.icon className={`w-8 h-8 mx-auto mb-3 text-${feature.color}-400`} />
              <p className="text-sm font-medium text-slate-300">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
