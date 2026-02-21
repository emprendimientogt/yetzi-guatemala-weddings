import { motion } from "framer-motion";
import { Play, Calendar, MapPin, Heart } from "lucide-react";

const events = [
  {
    title: "Boda en Antigua Guatemala",
    location: "Hotel Casa Santo Domingo",
    date: "2024",
    icon: MapPin,
  },
  {
    title: "Boda de Destino",
    location: "Lago de Atitlán",
    date: "2024",
    icon: Heart,
  },
  {
    title: "Celebración Íntima",
    location: "Finca El Zapote",
    date: "2023",
    icon: Calendar,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 bg-section-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Experiencia
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground">
            Mi experiencia y <span className="italic font-medium">eventos</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-sm overflow-hidden bg-card border border-border flex items-center justify-center">
              {/* Placeholder — reemplazar con <video> cuando se suba el archivo */}
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="w-7 h-7 text-primary ml-1" />
                </div>
                <p className="font-body text-sm">Video próximamente</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body mt-3 text-center italic">
              Un vistazo a una de nuestras bodas más memorables
            </p>
          </motion.div>

          {/* Events list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Cada evento que planifico es una historia única. He tenido el privilegio de 
              crear celebraciones en los lugares más hermosos de Guatemala, siempre con 
              atención al detalle y un toque personal que hace cada boda inolvidable.
            </p>

            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 p-4 rounded-sm bg-card/60 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <event.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {event.location} · {event.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
