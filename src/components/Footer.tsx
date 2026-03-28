import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © 2026 Kavita Nagappa Awati. Made with <Heart size={14} className="text-accent fill-accent" /> All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
