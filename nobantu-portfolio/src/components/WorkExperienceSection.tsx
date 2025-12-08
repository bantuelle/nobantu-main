import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2025 — Present",
    role: "Associate Engineer",
    company: "Nintex",
    description: "Contributing to the development, testing, and maintenance of workflow and automation products. I collaborate with engineers, QA, and product teams to deliver stable features, resolve defects, and support continuous improvements across the codebase. My work touches frontend components, backend services, and cloud-based integrations, giving me a strong foundation in real-world engineering practices.",
    technologies: ["JavaScript", "TypeScript", "React", "C#", ".NET", "ASP.NET", "EF", "NodeJS", "Azure", "SQL", "NUnit"],
    current: true,
  },
  {
    period: "2023 — 2025",
    role: "Junior Developer",
    company: "Fruit South Africa (eCert South Africa)",
    description: "Contributed to a variety of development projects, building efficient, scalable, and maintainable web applications. Refactored legacy systems, developed new features, optimized performance, and resolved bugs to ensure smooth functionality. Adapted quickly to changing requirements and collaborated closely with cross-functional teams to deliver high-quality solutions.",
    technologies: ["C#", "SQL", "Blazor", "Telerik Kendo", "Bootstrap", "REST API", "Azure"],
    current: false,
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-96 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`w-4 h-4 rounded-full border-4 ${
                    exp.current
                      ? "bg-primary border-background shadow-lg shadow-primary/50"
                      : "bg-background border-primary/50"
                  }`}
                />
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary font-body text-sm font-medium">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full font-body">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Role and Company */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-body">{exp.company}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-foreground text-xs rounded font-body"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;