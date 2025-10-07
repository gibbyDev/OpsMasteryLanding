import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 50, suffix: "M+", label: "Operations Managed" },
  { value: 40, suffix: "%", label: "Time Saved" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-12 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass-xl rounded-md p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center space-y-2 hover-elevate rounded-md p-4 transition-all duration-300"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
