import { motion } from "framer-motion";
import { ArrowLeft, Check, Palette, Eye, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Basic",
    description: "Simple design refresh or single page design",
    features: [
      "1 Page Design",
      "Wireframing",
      "UI Design",
      "2 Revisions",
      "Figma Deliverables",
      "5 Day Turnaround",
    ],
  },
  {
    name: "Standard",
    popular: true,
    description: "Complete design for websites and apps",
    features: [
      "Up to 5 Pages/Screens",
      "User Research",
      "Wireframing",
      "High-Fidelity UI",
      "Interactive Prototype",
      "Design System",
      "3 Revisions",
      "10 Day Turnaround",
    ],
  },
  {
    name: "Enterprise",
    description: "Full UX research and design solution",
    features: [
      "Unlimited Pages/Screens",
      "User Interviews",
      "Competitor Analysis",
      "User Journey Mapping",
      "Complete Design System",
      "Interactive Prototypes",
      "Usability Testing",
      "Unlimited Revisions",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "Understanding your goals and users" },
  { step: "02", title: "Define", desc: "Creating user personas and flows" },
  { step: "03", title: "Design", desc: "Wireframes to high-fidelity mockups" },
  { step: "04", title: "Deliver", desc: "Prototypes and design handoff" },
];

const UIUXDesign = () => {
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
                UI/UX <span className="text-gradient-gold">Design</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Beautiful interfaces that users love. I create designs that not only look stunning but also provide intuitive, seamless experiences that keep users engaged.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From user research to final prototypes, I follow a design-thinking approach that puts your users at the center of every decision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#packages">View Packages</a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/#contact">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                  alt="UI/UX Design"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-2xl border border-gold/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Palette className="w-8 h-8 text-gold" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              My Design Process
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl font-display font-bold text-gold/30 mb-4">{item.step}</div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Eye, title: "Visual Design", desc: "Stunning aesthetics" },
              { icon: Users, title: "User-Centered", desc: "Research-driven approach" },
              { icon: Sparkles, title: "Modern Trends", desc: "Fresh, contemporary style" },
              { icon: Palette, title: "Brand Aligned", desc: "Consistent with your brand" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border/50"
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
      <section id="packages" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Design <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From quick design refreshes to complete UX overhauls, I've got you covered.
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
              Let's Create Something Beautiful
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your digital presence with stunning design?
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

export default UIUXDesign;