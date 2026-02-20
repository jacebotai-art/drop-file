"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  DollarSign, 
  Target, 
  Zap, 
  CheckCircle2,
  XCircle,
  Bot,
  Code,
  Palette,
  Database,
  Shield,
  LineChart,
  MessageSquare,
  Search
} from "lucide-react";

const comparisonPoints = [
  { traditional: "6+ months delivery", us: "90 days average", icon: Clock },
  { traditional: "$50K+ projects", us: "Transparent pricing", icon: DollarSign },
  { traditional: "Limited revisions", us: "Unlimited iterations", icon: Zap },
  { traditional: "Communication gaps", us: "Daily updates", icon: MessageSquare },
];

const agents = [
  { name: "Code Agent", icon: Code, color: "indigo", role: "Core Development" },
  { name: "Design Agent", icon: Palette, color: "purple", role: "UI/UX Design" },
  { name: "Data Agent", icon: Database, color: "pink", role: "Database & APIs" },
  { name: "Security Agent", icon: Shield, color: "rose", role: "Security & Auth" },
  { name: "QA Agent", icon: CheckCircle2, color: "orange", role: "Testing" },
  { name: "Analytics Agent", icon: LineChart, color: "green", role: "Monitoring" },
  { name: "SEO Agent", icon: Search, color: "cyan", role: "Optimization" },
  { name: "Docs Agent", icon: Bot, color: "blue", role: "Documentation" },
];

const timeline = [
  { phase: "Week 1-2", title: "Discovery & Design", desc: "Requirements, wireframes, UI design" },
  { phase: "Week 3-6", title: "Core Development", desc: "Frontend, backend, AI integration" },
  { phase: "Week 7-10", title: "Refinement", desc: "Testing, feedback, iterations" },
  { phase: "Week 11-12", title: "Launch", desc: "Deploy, monitor, handoff" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-indigo-950/10 to-[#0a0a0f]" />
      
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
            Why <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The future of development is here. Say goodbye to traditional agency bottlenecks.
          </p>
        </motion.div>
        
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="glass rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center mb-8">Traditional Agency vs <span className="gradient-text">Body System</span></h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Traditional Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-400">Traditional Agency</h4>
                </div>
                
                {comparisonPoints.map((point, index) => (
                  <motion.div
                    key={point.traditional}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50"
                  >
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-slate-400">{point.traditional}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Body System Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Body System</h4>
                </div>
                
                {comparisonPoints.map((point, index) => (
                  <motion.div
                    key={point.us}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium">{point.us}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 8 Agents Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Meet Your <span className="gradient-text">8 Specialized Agents</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-${agent.color}-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <agent.icon className={`w-6 h-6 text-${agent.color}-400`} />
                </div>
                <h4 className="font-semibold text-white mb-1">{agent.name}</h4>
                <p className="text-xs text-slate-400">{agent.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            The <span className="gradient-text">90-Day Sprint</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-6 text-center relative z-10">
                    <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-[#0a0a0f]" />
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-3">
                      {item.phase}
                    </span>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Zap, title: "Faster", desc: "8 agents working in parallel, 24/7" },
            { icon: DollarSign, title: "Cheaper", desc: "No overhead, fair transparent pricing" },
            { icon: Target, title: "Better", desc: "AI precision + human creativity" },
          ].map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <prop.icon className="w-10 h-10 mx-auto mb-4 text-indigo-400" />
              <h4 className="text-xl font-bold text-white mb-2">{prop.title}</h4>
              <p className="text-slate-400">{prop.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
