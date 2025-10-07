import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dashboardImg from "@assets/generated_images/CRM_dashboard_screenshot_cbd09aaa.png";

export default function PlatformPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the future of operations management
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative"
          data-testid="platform-preview"
        >
          {/* Glassmorphic Frame */}
          <div className="glass-2xl rounded-md p-4 relative">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary via-chart-3 to-chart-2 opacity-20 blur-xl animate-pulse-glow" />
            
            {/* Scanning Light Beam */}
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-chart-2 to-transparent animate-beam-slide" />
            </div>

            {/* Dashboard Image */}
            <div className="relative rounded-md overflow-hidden">
              <img 
                src={dashboardImg} 
                alt="OpsMastery Dashboard Interface" 
                className="w-full h-auto rounded-md shadow-2xl"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* Feature Annotations */}
            <div className="absolute top-1/4 -left-4 md:-left-12 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="glass rounded-md px-4 py-2 text-sm font-mono text-foreground"
              >
                Real-time Analytics
                <div className="absolute right-0 top-1/2 w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              </motion.div>
            </div>

            <div className="absolute bottom-1/3 -right-4 md:-right-12 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="glass rounded-md px-4 py-2 text-sm font-mono text-foreground"
              >
                Smart Automation
                <div className="absolute left-0 top-1/2 w-8 h-px bg-gradient-to-l from-chart-2 to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute -top-4 right-1/4 w-2 h-2 rounded-full bg-primary/50 animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-1/3 -right-4 w-2 h-2 rounded-full bg-chart-2/50 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute -bottom-4 left-1/3 w-2 h-2 rounded-full bg-chart-3/50 animate-float" style={{ animationDelay: "4s" }} />
        </motion.div>
      </div>
    </section>
  );
}
