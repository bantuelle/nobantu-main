import { motion } from "framer-motion";
import { Github, Linkedin, Link2, ExternalLink } from "lucide-react";
import avatarImage from "@/assets/avatar.png";
import AIChatbot from "@/components/AIChatbot";
 
const projects = [
  {
    title: "Cleanbooks",
    category: "SaaS Platform",
    description: "A powerful accounting software that simplifies financial management for businesses of all sizes.",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "Supabase"],
    link: "https://cleanbooks.co.za/",
  },
  {
    title: "LinkPad",
    category: "Web Application",
    description: "Create a clean, modern digital CV and portfolio, all packaged into one shareable link.",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "Supabase"],
    link: "https://linkpad.africa",
  },
  {
    title: "Carmaxx",
    category: "Marketplace",
    description: "A digital car marketplace where people can browse, buy, and sell vehicles quickly and safely.",
    tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Supabase"],
    link: "https://carmaxx.co.za/",
  },
  {
    title: "Hii Movie Store",
    category: "eCommerce",
    description: "Full-featured online store with secure payments and real-time inventory management.",
    tags: ["Next.js", "Stripe", "React", "MongoDB"],
    link: "https://himovie-hazel.vercel.app/",
  },
  {
    title: "Palbot",
    category: "SaaS Platform",
    description: "An AI Customer Service platform for all businesses",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "OpenAI API", "Twilio", "Supabase"],
    link: "https://palbot.co.za/",
  },
  {
  title: "Drive Westown",
  category: "Automotive Website",
  description:
    "Designed and developed a modern website for a car dealership, showcasing available vehicles and creating a streamlined experience for prospective buyers to explore inventory and connect with the dealership.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Web Design"],
  link: "https://drivewestown.co.za/",
},
];
const experiences = [
  {
    period: "OCT 2026 — PRESENT",
    role: "Engineer",
    company: "Nintex",
    description: "Promoted to Engineer. Contributing to the development, testing, and maintenance of workflow and automation products. Collaborating with engineers, QA, and product teams to deliver stable features across frontend, backend, and cloud integrations.",
    technologies: ["TypeScript", "React", "C#", ".NET", "Azure", "SQL"],
  },
  {
    period: "2025 — OCT 2026",
    role: "Associate Engineer",
    company: "Nintex",
    description: "Joined Nintex as Associate Engineer, contributing to workflow and automation products across frontend, backend, and cloud integrations.",
    technologies: ["TypeScript", "React", "C#", ".NET", "Azure", "SQL"],
  },
  {
    period: "2023 — 2025",
    role: "Junior Developer",
    company: "Fruit South Africa",
    description: "Contributed to development projects, building efficient and maintainable web applications. Refactored legacy systems, developed new features, and collaborated with cross-functional teams.",
    technologies: ["C#", "SQL", "Blazor", "Telerik Kendo"],
  },
];

const sections = [
  { number: "01", label: "PROJECTS", href: "#projects" },
  { number: "02", label: "EXPERIENCE", href: "#experience" },
  { number: "03", label: "ABOUT", href: "#about" },
];

const socialLinks = [
  { icon: Link2, href: "https://linkpad.africa/nobantu", label: "LinkPad" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Fixed on desktop */}
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[400px] xl:w-[480px] p-8 lg:p-12 flex flex-col">
          <div className="flex-1">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-3">
                Nobantu
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-body mb-6">
                Software Engineer at Nintex
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                I build efficient, scalable web applications and enjoy transforming complex problems into{" "}
                <span className="text-foreground">simple, human-centered solutions</span>.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                In my spare time, I explore ideas at the intersection of{" "}
                <a href="#about" className="text-foreground underline decoration-muted-foreground/50 hover:decoration-primary transition-colors">
                  technology, automation, and AI
                </a>
                .
              </p>
            </motion.div>

            {/* Section Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 hidden lg:block"
            >
              {sections.map((section) => (
                <a
                  key={section.label}
                  href={section.href}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="text-xs font-body tracking-widest">{section.number}</span>
                  <span className="w-8 h-px bg-muted-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                  <span className="text-xs font-body tracking-[0.2em]">{section.label}</span>
                </a>
              ))}
            </motion.nav>
          </div>

          {/* Avatar and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 mt-8 lg:mt-0"
          >
            <img
              src={avatarImage}
              alt="Nobantu"
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
            />
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{social.label}</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            ))}
          </motion.div>
        </aside>

        {/* Right Content Area */}
        <div className="lg:ml-[400px] xl:ml-[480px] flex-1 p-8 lg:p-12 lg:pt-12">
          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="text-xs font-body tracking-[0.2em] text-muted-foreground mb-6">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="block p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-muted transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-body tracking-[0.15em] text-primary mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-body text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <h2 className="text-xs font-body tracking-[0.2em] text-muted-foreground mb-6">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <span className="text-xs font-body tracking-[0.1em] text-primary whitespace-nowrap">
                      {exp.period}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-body bg-secondary rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16">
            <h2 className="text-xs font-body tracking-[0.2em] text-muted-foreground mb-6">
              ABOUT ME
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-sm font-body tracking-[0.15em] text-primary mb-4">
                  MY PHILOSOPHY
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  I'm a software engineer who enjoys transforming complex problems into simple, reliable, and human-centered solutions. Early in my career, I've already built across the stack—from frontend components and workflow systems to backend services, APIs, and cloud-monitored platforms.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I focus on <span className="text-foreground">clarity</span>, <span className="text-foreground">maintainability</span>, and <span className="text-foreground">impact</span>—writing code that is easy to reason about, improving the parts of a system that matter most.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-sm font-body tracking-[0.15em] text-primary mb-4">
                  MY MINDSET
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I care deeply about understanding <em className="text-primary not-italic">why</em> something works, not just how. This mindset shapes the way I build—thoughtfully, methodically, and with an eye toward making systems and the engineers who follow more effective. Whether debugging, refactoring, or shipping end-to-end features, I approach every task with intention and precision.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-sm font-body tracking-[0.15em] text-primary mb-4">
                  TECH STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "JavaScript", "C#", ".NET", "Node.js", "Azure", "SQL", "Tailwind CSS", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-body bg-secondary rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-primary/30 bg-primary/5"
            >
              <h3 className="text-sm font-body tracking-[0.15em] text-primary mb-4">
                GET IN TOUCH
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:hello@nobantundlovu.co.za"
                className="inline-flex items-center gap-2 text-foreground font-body hover:text-primary transition-colors"
              >
                hello@nobantundlovu.co.za
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-border">
            <div className="space-y-3">
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Designed in <span className="text-foreground">Figma</span>, coded in{" "}
                <span className="text-foreground">VS Code</span>, built with{" "}
                <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">TypeScript</span>,{" "}
                <span className="text-foreground">Tailwind CSS</span> &{" "}
                <span className="text-foreground">Framer Motion</span>, and deployed on{" "}
                <span className="text-foreground">Vercel</span>.
              </p>
              <p className="text-muted-foreground/70 font-body text-xs">
                Set in <span className="text-muted-foreground">Playfair Display</span> &{" "}
                <span className="text-muted-foreground">Sora</span>.
              </p>
              <p className="text-muted-foreground/50 font-body text-xs">
                © {new Date().getFullYear()} Nobantu
              </p>
            </div>
          </footer>
        </div>
      </div>
      <AIChatbot />
    </main>
  );
};

export default Index;
