import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, Palette, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, performant websites with modern frameworks and best practices.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Full-featured online stores with secure payments and inventory management.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered designs that balance aesthetics with intuitive functionality.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and search engine visibility.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Strategic planning to align technology solutions with business objectives.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Services I'm <span className="text-gradient">Best At</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group card-gradient rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
