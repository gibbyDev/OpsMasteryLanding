import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 users",
      "Basic analytics",
      "Email support",
      "5GB storage",
      "Mobile apps",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing businesses that need more",
    features: [
      "Up to 50 users",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Custom integrations",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited users",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited storage",
      "Custom features",
      "SLA guarantee",
      "Advanced security",
    ],
    popular: false,
  },
];

export default function PricingSection() {
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
            Simple Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
              data-testid={`pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card 
                className={`h-full p-8 space-y-8 hover-elevate transition-all duration-300 relative overflow-visible group ${
                  plan.popular ? 'border-primary/40' : ''
                }`}
              >
                {/* Enhanced Glow for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/10 via-chart-3/10 to-chart-2/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                )}

                <div className="relative space-y-8">
                  {/* Plan Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-display bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`button-select-${plan.name.toLowerCase()}`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
