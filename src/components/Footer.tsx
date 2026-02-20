import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background/70">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-display text-2xl font-semibold text-background mb-2">Yetzi</p>
        <p className="text-sm mb-6">Wedding Planner · Guatemala</p>
        <div className="gold-divider mb-6" />
        <p className="text-xs flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3 h-3 fill-primary text-primary" /> por Yetzi Weddings © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
