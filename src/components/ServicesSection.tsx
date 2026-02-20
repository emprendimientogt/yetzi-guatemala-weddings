import { motion } from "framer-motion";
import { CalendarHeart, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: CalendarHeart,
    title: "Planificación Completa",
    description:
      "Nos encargamos de todo desde el inicio: concepto, diseño, proveedores, logística y cada detalle para que tú solo te preocupes por disfrutar.",
  },
  {
    icon: Clock,
    title: "Coordinación del Día",
    description:
      "¿Ya tienes todo organizado? Nos encargamos de coordinar el día de tu boda para que cada momento fluya a la perfección, sin contratiempos.",
  },
  {
    icon: Sparkles,
    title: "Asesoría Personalizada",
    description:
      "Te guío paso a paso en las decisiones más importantes: presupuesto, estilo, proveedores y timeline. Tú decides, yo te oriento.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-section-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Servicios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground">
            Lo que puedo hacer <span className="italic font-medium">por ti</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-sm p-8 text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
