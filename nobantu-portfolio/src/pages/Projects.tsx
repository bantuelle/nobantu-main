import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cleanbooksImage from "@/assets/cleanbooks.jpeg";
import linkpadImage from "@/assets/IMG_0057.jpeg";
import carmaxxImage from "@/assets/IMG_0058.png";
import palbotImage from "@/assets/IMG_0059.png";
import driveWestownImage from "@/assets/IMG_0058.png";

const projects = [
  {
    title: "Cleanbooks",
    category: "SaaS Platform",
    description: "A powerful accounting software that simplifies financial management for businesses of all sizes.",
    image: cleanbooksImage,
    tags: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "Supabase"],
    link: "https://cleanbooks.co.za/",
  },
  {
    title: "LinkPad",
    category: "Web Application",
    description: "Create a clean, modern digital CV and portfolio, all packaged into one shareable link.",
    image: linkpadImage,
    tags: ["React", "Tailwind CSS", "Shadcn UI", "Supabase"],
    link: "https://linkpad.africa",
  },
  {
    title: "Carmaxx",
    category: "Marketplace",
    description: "A digital car marketplace where people can browse, buy, and sell vehicles quickly and safely.",
    image: carmaxxImage,
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
  {
    title: "Palbot",
    category: "SaaS Platform",
    description: "An AI Customer Service platform for all businesses",
    image: palbotImage,
    tags: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "OpenAI API", "Twilio", "Supabase"],
    link: "https://palbot.co.za/",
  },
  {
  title: "Drive Westown",
  category: "Automotive Website",
  description:
    "Designed and developed a modern website for a car dealership, showcasing available vehicles and creating a streamlined experience for prospective buyers to explore inventory and connect with the dealership.",
  image: driveWestownImage,
  tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Web Design"],
  link: "https://drivewestown.co.za/",
},
];

const Projects = () => {
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

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-gold/30 text-gold text-sm mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            All <span className="text-gradient-gold">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my web development work, from SaaS platforms to marketplaces and e-commerce solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/50 rounded-2xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm border border-gold/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-display font-bold mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="hero" className="w-full gap-2" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Nobantu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
