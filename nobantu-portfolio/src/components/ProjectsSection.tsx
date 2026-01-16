import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Cleanbooks",
    category: "SaaS Platform",
    description: "A powerful accounting software that simplifies financial management for businesses of all sizes.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "Supabase"],
    link: "https://cleanbooks.co.za/",
  },
  {
    title: "LinkPad",
    category: "Web Application",
    description: "Create a clean, modern digital CV and portfolio, all packaged into one shareable link.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "Supabase"],
    link: "https://linkpad.africa",
  },
  {
    title: "Carmaxx",
    category: "Marketplace",
    description: "A digital car marketplace where people can browse, buy, and sell vehicles quickly and safely.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Supabase"],
    link: "https://carmaxx.co.za/",
  },
  {
    title: "Hii Movie Store",
    category: "eCommerce",
    description: "Full-featured online store with secure payments and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "React", "MongoDB"],
    link: "https://himovie-hazel.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Recent <span className="text-gradient">Work</span>
            </h2>
          </div>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/projects" className="group">
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button variant="hero" size="sm" className="gap-2" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-primary text-sm font-body uppercase tracking-wide mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-body bg-secondary rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
