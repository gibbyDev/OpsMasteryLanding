import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

//todo: remove mock functionality
const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision",
    content: "OpsMastery transformed how we manage our operations. The automation features alone saved us 40% of our time.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director, GlobalCorp",
    content: "The analytics capabilities are unmatched. We make data-driven decisions with confidence now.",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "Founder, StartupHub",
    content: "Incredible platform. The team collaboration tools brought our remote team closer than ever.",
    initials: "EW",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-3/5 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Trusted by Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders are saying about OpsMastery
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              data-testid={`testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="h-full p-8 space-y-6 hover-elevate transition-all duration-300 relative overflow-visible group">
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/0 to-chart-2/0 group-hover:from-primary/5 group-hover:to-chart-2/5 transition-all duration-500 pointer-events-none" />
                
                <div className="relative space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/40" />
                  
                  {/* Content */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-chart-2/30">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
