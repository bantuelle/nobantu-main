import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Link2 } from "lucide-react";

const socialLinks = [
  { icon: Link2, href: "https://linkpad.africa/nobantu", label: "LinkPad" },
  { icon: Github, href: "https://github.com/bantuelle", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-display font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">N</span>obantu
          </motion.a>

          {/* Copyright */}
            <div className="space-y-3">
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Designed in <span className="text-foreground">Figma</span>, coded in{" "}
                <span className="text-foreground">VS Code</span>, by yours truly. 
                Built with{" "} <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">TypeScript</span>,{" "}
                <span className="text-foreground">Tailwind CSS</span> &{" "}
                <span className="text-foreground">Framer Motion</span>, and deployed on{" "}
                <span className="text-foreground">Vercel</span>.
              </p>
              <p className="text-muted-foreground/70 font-body text-xs">
                Font used is <span className="text-muted-foreground">Playfair Display</span> &{" "}
                <span className="text-muted-foreground">Sora</span>.
              </p>
              <p className="text-muted-foreground/50 font-body text-xs">
                © {new Date().getFullYear()} Nobantu
              </p>
            </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
