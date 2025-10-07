import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamImg from "@assets/generated_images/Team_collaboration_visualization_2f497a05.png";
import analyticsImg from "@assets/generated_images/Analytics_dashboard_view_93930087.png";
import automationImg from "@assets/generated_images/Automation_workflow_diagram_d925431e.png";

const benefits = [
  {
    title: "Empower Your Team",
    description: "Enable seamless collaboration with real-time communication, shared workflows, and intelligent task management. Break down silos and unite your team.",
    image: teamImg,
    imageAlt: "Team collaboration",
  },
  {
    title: "Data-Driven Decisions",
    description: "Access powerful analytics and visualization tools that transform raw data into actionable insights. Make confident decisions backed by intelligence.",
    image: analyticsImg,
    imageAlt: "Analytics dashboard",
  },
  {
    title: "Automate Everything",
    description: "Eliminate manual processes with intelligent automation workflows. Focus on strategic work while our AI handles the routine tasks.",
    image: automationImg,
    imageAlt: "Automation workflows",
  },
];

export default function BenefitsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-24">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={benefit.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex-1 space-y-6"
                >
                  <div className="glass-xl rounded-md p-8 space-y-4">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-md opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                    
                    {/* Image Container */}
                    <div className="relative rounded-md overflow-hidden border border-primary/20">
                      <img 
                        src={benefit.image} 
                        alt={benefit.imageAlt}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
