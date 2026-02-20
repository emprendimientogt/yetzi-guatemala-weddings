import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Ceremonia al aire libre en Guatemala" },
  { src: gallery2, alt: "Decoración de mesa elegante" },
  { src: gallery3, alt: "Primer baile de los novios" },
  { src: gallery4, alt: "Ramo de novia" },
  { src: gallery5, alt: "Ceremonia en Antigua Guatemala" },
  { src: gallery6, alt: "Pastel de bodas con detalles dorados" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-section-warm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Galería
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground">
            Momentos que hemos <span className="italic font-medium">creado</span>
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-sm group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
