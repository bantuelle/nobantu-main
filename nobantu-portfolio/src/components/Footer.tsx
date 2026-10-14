import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl">
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
          <p className="text-muted-foreground/50 font-body text-xs mt-2">
            © {currentYear} Nobantu
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
