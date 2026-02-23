import { motion } from "framer-motion";
import heroImage from "@/assets/presentacion.jpeg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yetzi - Wedding Planner en Guatemala"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-4"
          >
            Wedding Planner · Guatemala
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6"
          >
            Diseñamos bodas{" "}
            <span className="italic font-medium">inolvidables</span> en Guatemala
            con elegancia y sin estrés.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Agenda tu consulta
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-body text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-foreground/5 transition-colors"
            >
              Ver galería
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
