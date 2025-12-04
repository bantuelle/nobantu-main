import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-gradient rounded-3xl p-8 md:p-16 border border-border text-center max-w-4xl mx-auto"
        >
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Interested in <span className="text-gradient">Working Together?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hello@nobantundlovu.co.za" className="group">
                <Mail className="w-5 h-5" />
                hello@nobantundlovu.co.za
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground font-body text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Johannesburg, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Available for calls</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
