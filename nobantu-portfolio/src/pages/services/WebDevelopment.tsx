import { motion } from "framer-motion";
import { ArrowLeft, Check, Code, Layers, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Starter",
    description: "Perfect for personal sites and small projects",
    features: [
      "1-3 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "1 Round of Revisions",
      "2 Week Delivery",
    ],
  },
  {
    name: "Business",
    popular: true,
    description: "Ideal for growing businesses and startups",
    features: [
      "Up to 8 Pages",
      "Responsive Design",
      "Advanced SEO Optimization",
      "Contact & Lead Forms",
      "CMS Integration",
      "3 Rounds of Revisions",
      "Analytics Setup",
      "3 Week Delivery",
    ],
  },
  {
    name: "Premium",
    description: "For enterprises needing full-scale solutions",
    features: [
      "Unlimited Pages",
      "Custom Design System",
      "Full SEO Strategy",
      "Advanced Integrations",
      "E-commerce Ready",
      "Unlimited Revisions",
      "Priority Support",
      "4-6 Week Delivery",
    ],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Shadcn UI", icon: "🧩" },
  { name: "Supabase", icon: "⚡" },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back Home</span>
          </Link>
          <Link to="/" className="text-xl font-display font-bold text-gradient-gold">
            Nobantu
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-gold/30 text-gold text-sm mb-6">
                Services
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Web <span className="text-gradient-gold">Development</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I create stunning, high-performance websites that not only look beautiful but also drive results. From simple landing pages to complex web applications, I deliver solutions tailored to your needs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every project is built with modern technologies, ensuring speed, security, and scalability. I offer flexible packages to match your budget and timeline.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                  alt="Web Development"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-2xl border border-gold/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-8 h-8 text-gold" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Code, title: "Clean Code", desc: "Maintainable & scalable" },
              { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed" },
              { icon: Shield, title: "Secure", desc: "Best security practices" },
              { icon: Layers, title: "Responsive", desc: "Works on all devices" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Website <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a package that fits your needs. All packages can be customized - contact me for a personalized quote.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  pkg.popular
                    ? "bg-gold/5 border-gold/50"
                    : "bg-card/50 border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-background text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "hero-outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/#contact">Request Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Technologies I Use
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-card/50 border border-border/50 flex items-center gap-2"
              >
                <span>{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your ideas and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/#contact">Get in Touch</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Nobantu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDevelopment;