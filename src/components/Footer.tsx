import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">OI</span>
            </div>
            <span className="font-bold text-lg">Omax Industries</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A distinguished manufacturer of a wide range of auxiliary equipment for plastic moulding machinery. 
            Engineered for precision, built for reliability.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/products/hot-air-dryer" className="hover:text-accent transition-colors">Hot Air Dryers</Link></li>
            <li><Link to="/products/single-phase-hopper-loader" className="hover:text-accent transition-colors">Single Phase Hopper Loaders</Link></li>
            <li><Link to="/products/three-phase-hopper-loader" className="hover:text-accent transition-colors">Three Phase Hopper Loaders</Link></li>
            <li><Link to="/products/central-conveying-system" className="hover:text-accent transition-colors">Central Conveying Systems</Link></li>
            <li><Link to="/products/mould-temperature-controller" className="hover:text-accent transition-colors">Mould Temperature Controllers</Link></li>
            <li><Link to="/products/water-cooled-chiller" className="hover:text-accent transition-colors">Water Cooled Chillers</Link></li>
            <li><Link to="/products/air-cooled-chiller" className="hover:text-accent transition-colors">Air Cooled Chillers</Link></li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/#about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/#solutions" className="hover:text-accent transition-colors">Solutions</Link></li>
            <li><Link to="/#industries" className="hover:text-accent transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              36, Victoriya Industrial Park, B/h. Kathwada G.I.D.C., Road No.-5, Kathwada, Ahmedabad-382430
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              +91 9662512628 / +91 9662353088
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              contact@omaxind.com
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 shrink-0" />
              www.omaxind.com
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
        <span>© {new Date().getFullYear()} Omax Industries. All rights reserved.</span>
        <span>Ahmedabad, India</span>
      </div>
    </div>
  </footer>
);

export default Footer;
