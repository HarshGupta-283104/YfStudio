import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-primary">Y.F. Enterprises</h3>
            <p className="mt-4 text-sm">
              Your trusted partner for uninterruptible power solutions. Over 6 years of excellence in sales, service, and maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/products" className="text-sm hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#amc" className="text-sm hover:text-primary transition-colors">AMC / CMC Contracts</Link></li>
              <li><Link href="/services#rental" className="text-sm hover:text-primary transition-colors">UPS & Battery Rental</Link></li>
              <li><Link href="/services#repair" className="text-sm hover:text-primary transition-colors">UPS Repair</Link></li>
              <li><Link href="/services#stabilizers" className="text-sm hover:text-primary transition-colors">Servo Stabilizers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span className="text-sm">Kolkata, West Bengal, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">+91 12345 67890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">info@yfenterprises.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Y.F. Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
