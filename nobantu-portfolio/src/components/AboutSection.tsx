import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "C#", "Tailwind CSS", "Shadcn UI", "Figma", "Git", "GitHub", "REST APIs", "Docker", "Supabase", "Azure", "SQL",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <p className="text-sm text-muted-foreground font-body uppercase tracking-widest mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-secondary rounded-lg text-foreground font-body text-sm cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              A Little More <span className="text-gradient">About Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                As a passionate developer with over 2 years of experience, I've had the privilege of working on diverse projects that span from sleek web applications to intuitive UI/UX designs and strategic digital experiences.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a deep commitment to crafting digital experiences that are not only functional but truly delightful to use.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
