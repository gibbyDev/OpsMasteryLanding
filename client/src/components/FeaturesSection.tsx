import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, BarChart3, Users, Shield, Workflow, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant response times with our optimized infrastructure built for speed and reliability.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics powered by AI to drive intelligent decisions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless communication and workflow management across your entire organization.",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows to focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry standards to protect your data.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI technology to enhance productivity and streamline operations.",
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage, analyze, and optimize your operations in one platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="h-full p-8 space-y-4 hover-elevate transition-all duration-300 group relative overflow-visible">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mt-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
