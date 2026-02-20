"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "StudyKit",
    description: "AI-powered study companion app with flashcards, quizzes, and personalized learning paths. Built with Next.js, OpenAI, and Supabase.",
    tags: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    image: "📚",
    color: "indigo",
    stats: { users: "2.5K+", rating: "4.9" },
    links: { demo: "#", github: "#" },
  },
  {
    title: "Dope Portfolio",
    description: "A stunning portfolio template for creatives. Features smooth animations, dark mode, and CMS integration. Fully customizable.",
    tags: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
    image: "🎨",
    color: "purple",
    stats: { downloads: "500+", stars: "120" },
    links: { demo: "#", github: "#" },
  },
  {
    title: "Trend Analyzer",
    description: "Real-time trend detection and analysis tool. Scrapes social data, uses ML to predict emerging trends before they go mainstream.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "📈",
    color: "pink",
    stats: { accuracy: "94%", sources: "10M+" },
    links: { demo: "#", github: "#" },
  },
  {
    title: "GitHub Backup System",
    description: "Automated backup solution for GitHub repositories. Scheduled backups, encryption, and multi-cloud storage support.",
    tags: ["Node.js", "AWS", "Docker", "GitHub API"],
    image: "💾",
    color: "cyan",
    stats: { repos: "50K+", uptime: "99.9%" },
    links: { demo: "#", github: "#" },
  },
  {
    title: "Your Project Here",
    description: "Have an idea? Let's build something amazing together. We're always excited to work on innovative projects.",
    tags: ["Custom", "Innovation", "AI", "Web3"],
    image: "🚀",
    color: "gradient",
    stats: {},
    links: { demo: "#contact", github: null },
    isPlaceholder: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
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
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real projects, real results. Here&apos;s what we&apos;ve built.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${project.isPlaceholder ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''}`}
            >
              <div className={`absolute inset-0 ${project.color === 'gradient' ? 'bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20' : `bg-${project.color}-500/20`} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                {/* Image/Icon Area */}
                <div className={`h-48 ${project.color === 'gradient' ? 'bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30' : `bg-${project.color}-500/20`} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-8xl"
                  >
                    {project.image}
                  </motion.div>
                  
                  {/* Stats Badge */}
                  {!project.isPlaceholder && (
                    <div className="absolute top-4 right-4 flex gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="glass px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          {key === 'rating' && <Star className="w-3 h-3 text-yellow-400" />}
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.links.demo}
                        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                        title="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-6">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${project.color === 'gradient' ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300' : `bg-${project.color}-500/20 text-${project.color}-300`}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA for placeholder */}
                  {project.isPlaceholder && (
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold w-full justify-center"
                    >
                      Start Your Project
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
