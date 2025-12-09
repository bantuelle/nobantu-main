import { motion } from "framer-motion";

const techStack = [
  "Blazor", "React", "Bootstrap", "TypeScript", "JavaScript", "C#", ".NET", "Node.js", "Azure", "SQL", "Tailwind CSS", "REST APIs", "SDLC", "SEO Optimization", "API Testing", "Figma"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            The Person Behind the <span className="text-gradient">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Philosophy Card */}
            <div className="card-gradient rounded-2xl p-8 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                  <h3 className="text-xl font-display font-semibold text-foreground">My Philosophy</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  I'm a software engineer who enjoys transforming complex problems into simple, reliable, and human-centered solutions. Early in my career, I've already built across the stack—from frontend components and workflow systems to backend services, APIs, and cloud-monitored platforms.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I focus on <span className="text-foreground font-medium">clarity</span>, <span className="text-foreground font-medium">maintainability</span>, and <span className="text-foreground font-medium">impact</span>—writing code that is easy to reason about, improving the parts of a system that matter most, and steadily deepening my technical expertise.
                </p>
              </div>
            </div>

            {/* Mindset Card */}
            <div className="card-gradient rounded-2xl p-8 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                  <h3 className="text-xl font-display font-semibold text-foreground">My Mindset</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  I care deeply about understanding <span className="text-primary italic">why</span> something works, not just how. This mindset shapes the way I build—thoughtfully, methodically, and with an eye toward making systems and the engineers who follow more effective.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I'm drawn to products that solve tangible problems and require both design intuition and solid engineering. Whether I'm debugging, refactoring, or shipping end-to-end features, I approach every task with intention and precision.
                </p>
              </div>
            </div>

            {/* Beyond Code Card */}
            <div className="card-gradient rounded-2xl p-8 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                  <h3 className="text-xl font-display font-semibold text-foreground">Beyond the Code</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Outside of coding, I explore ideas at the intersection of technology, automation, and AI—experimenting with small prototypes and refining side projects that challenge my thinking. I'm building the foundations of an engineer who not only writes reliable software but also anticipates the needs of users and teams, and quietly raises the bar for what is possible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quote Card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-display">"</div>
              <div className="card-gradient rounded-2xl p-6 border border-primary/20 bg-primary/5">
                <p className="text-foreground font-body italic leading-relaxed text-lg">
                  Understanding why something works, not just how.
                </p>
                <p className="text-muted-foreground font-body text-sm mt-4">— My guiding principle</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <p className="text-sm text-muted-foreground font-body uppercase tracking-widest mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-foreground font-body text-sm cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="card-gradient rounded-2xl p-6 border border-border">
              <p className="text-sm text-muted-foreground font-body uppercase tracking-widest mb-4">
                Core Values
              </p>
              <div className="space-y-3">
                {[
                  { label: "Clarity", desc: "Code that speaks for itself" },
                  { label: "Impact", desc: "Focus on what matters most" },
                  { label: "Growth", desc: "Always learning, always improving" },
                ].map((value, index) => (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-body font-medium">{value.label}</p>
                      <p className="text-muted-foreground font-body text-sm">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
