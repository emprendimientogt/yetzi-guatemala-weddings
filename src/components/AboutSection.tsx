import { motion } from "framer-motion";
import heroImage from "@/assets/hero-yetzi.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-section-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Yetzi, Wedding Planner"
                className="w-full aspect-[3/4] object-cover object-top rounded-sm"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-3">
              Sobre mí
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">
              Hola, soy <span className="italic font-medium">Yetzi</span>
            </h2>
            <div className="gold-divider-wide !mx-0 my-6" />

            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Con más de 8 años de experiencia creando bodas soñadas en Guatemala, 
                mi pasión es transformar la visión de cada pareja en una celebración 
                única e irrepetible.
              </p>
              <p>
                Creo firmemente que cada boda debe reflejar la esencia de quienes la viven. 
                Por eso, mi enfoque es completamente personalizado: desde la primera 
                reunión hasta el último baile, estoy a tu lado cuidando cada detalle.
              </p>
              <p>
                Mi compromiso es que disfrutes cada momento del proceso, sin estrés, 
                con la tranquilidad de saber que todo está en las mejores manos.
              </p>
            </div>

            <div className="flex gap-12 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-semibold text-primary">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Bodas realizadas</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-primary">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Dedicación</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
