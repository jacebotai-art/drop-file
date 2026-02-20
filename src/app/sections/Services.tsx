"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Globe, 
  Workflow, 
  Brain, 
  Smartphone, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "Full-stack SaaS applications with authentication, payments, and scalable infrastructure. Built for growth from day one.",
    price: "$5K - $15K",
    features: ["Multi-tenant architecture", "Payment integration", "Admin dashboards", "API development"],
    color: "indigo",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Stunning, performant websites that convert visitors into customers. From landing pages to complex web apps.",
    price: "$2K - $8K",
    features: ["Next.js / React", "SEO optimized", "CMS integration", "Performance tuned"],
    color: "purple",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description: "Streamline your operations with intelligent automation. Connect tools, automate workflows, save hours every week.",
    price: "$1K - $5K",
    features: ["Workflow automation", "API integrations", "Data pipelines", "Custom scripts"],
    color: "pink",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Supercharge your product with AI capabilities. Chatbots, content generation, image processing, and more.",
    price: "$2K - $10K",
    features: ["LLM integration", "Custom AI agents", "Vector databases", "Prompt engineering"],
    color: "rose",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile apps that feel native. iOS, Android, and web - one codebase, everywhere.",
    price: "$8K - $25K",
    features: ["React Native / Expo", "Native modules", "App store publishing", "Push notifications"],
    color: "orange",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-950/10 to-[#0a0a0f]" />
      
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
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to launch, we handle it all. Choose your weapon.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-400`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{service.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold gradient-text">{service.price}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-400`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-${service.color}-400 font-medium group/link`}
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* Custom Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center border-dashed border-2 border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4 animate-pulse">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Something Else?</h3>
              <p className="text-slate-400 mb-4">
                Got a unique project in mind? Let&apos;s chat about it.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all font-medium"
              >
                Get Custom Quote
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
