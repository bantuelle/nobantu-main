import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/nobantu-portfolio/src/assets/IMG_6202.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar with animated ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1 gradient-ring animate-spin-slow">
              <div className="w-full h-full rounded-full bg-background p-1">
                <img
                  src={avatarImage}
                  alt="Nobantu - Creative Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating icons */}
            <motion.div
              className="absolute -top-2 -right-2 bg-card p-3 rounded-xl shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code2 className="w-5 h-5 text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 bg-card p-3 rounded-xl shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Palette className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-body text-lg md:text-xl mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Hi, I'm Nobantu!
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 max-w-4xl leading-tight"
          >
            Creative Developer &{" "}
            <span className="text-gradient">Digital Craftsman</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mb-10"
          >
            A forward-thinking tech enthusiast, crafting innovative digital
            solutions with a blend of sofware expertise and creative vision.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
