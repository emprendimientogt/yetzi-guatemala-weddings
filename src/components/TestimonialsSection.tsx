import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María & Carlos",
    text: "Yetzi hizo de nuestra boda un sueño hecho realidad. Cada detalle fue perfecto y pudimos disfrutar sin preocuparnos por nada. ¡La mejor decisión que tomamos!",
    date: "Boda en Antigua, 2024",
  },
  {
    name: "Andrea & José",
    text: "Su atención personalizada es incomparable. Entendió exactamente lo que queríamos y lo superó con creces. Nuestra boda fue mágica gracias a ella.",
    date: "Boda en Lago de Atitlán, 2023",
  },
  {
    name: "Sofía & Daniel",
    text: "Profesional, dedicada y con un gusto exquisito. Yetzi convirtió nuestra visión en la boda más hermosa que pudimos imaginar. Eternamente agradecidos.",
    date: "Boda en Ciudad de Guatemala, 2024",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-section-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Testimonios
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground">
            Lo que dicen nuestras <span className="italic font-medium">parejas</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-sm p-8 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
