import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, ShieldCheck, Recycle, LifeBuoy, Zap, BatteryCharging, ShoppingCart } from 'lucide-react';
import type { ReactNode } from "react";

interface Service {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: "amc",
    title: "AMC / CMC Contracts",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    description: "Proactive maintenance contracts to maximize uptime and extend the life of your power equipment.",
    details: [
      "Covers all major brands: Hitachi, APC, Emerson, etc.",
      "Regular preventive maintenance checks.",
      "Priority response for emergency breakdowns.",
      "Comprehensive contracts (CMC) include spare parts.",
    ],
  },
  {
    id: "on-call",
    title: "On-Call/Spot Services",
    icon: <LifeBuoy className="w-10 h-10 text-primary" />,
    description: "Immediate, expert support for unexpected breakdowns or one-time service needs.",
    details: [
      "Pay-per-service model.",
      "Fast diagnostics and issue resolution.",
      "Available for both UPS and battery issues.",
      "Ideal for non-contract clients.",
    ],
  },
  {
    id: "repair",
    title: "UPS Repair",
    icon: <Wrench className="w-10 h-10 text-primary" />,
    description: "Specialized repair services for all types of UPS systems, from 1 KVA to 500 KVA.",
    details: [
      "Component-level repair to reduce costs.",
      "Use of genuine spare parts.",
      "Service for both online and offline UPS systems.",
      "Post-repair testing and validation.",
    ],
  },
  {
    id: "rental",
    title: "UPS & Battery Rental",
    icon: <Recycle className="w-10 h-10 text-primary" />,
    description: "Cost-effective rental solutions for temporary power needs or as a backup during repairs.",
    details: [
      "Short-term and long-term rental plans.",
      "Wide range of capacities available.",
      "Includes installation and support.",
      "Perfect for events, projects, or emergencies.",
    ],
  },
  {
    id: "reconditioned",
    title: "Reconditioned UPS Sales",
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    description: "High-quality, refurbished UPS systems that offer excellent performance at a fraction of the cost.",
    details: [
      "Thoroughly tested and certified by our engineers.",
      "Comes with a warranty for peace of mind.",
      "An economical and sustainable choice.",
      "Various brands and capacities in stock.",
    ],
  },
  {
    id: "battery-sales",
    title: "Battery Sales",
    icon: <BatteryCharging className="w-10 h-10 text-primary" />,
    description: "Authorized dealers for leading battery brands, ensuring reliability and long life.",
    details: [
      "Stockists for Quanta, Exide, HBL, Rocket, and more.",
      "Proper sizing and selection guidance.",
      "Installation and old battery buy-back services.",
      "Fresh stock with manufacturer's warranty.",
    ],
  },
  {
    id: "stabilizers",
    title: "Servo Stabilizers",
    icon: <Zap className="w-10 h-10 text-primary" />,
    description: "Protect your sensitive electronic equipment from voltage fluctuations with our robust servo stabilizers.",
    details: [
      "Air-cooled and oil-cooled models.",
      "Wide input voltage range.",
      "High correction speed and efficiency.",
      "Sales, installation, and repair services.",
    ],
  },
];

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">Our Expert Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A complete suite of power solutions designed to ensure your business continuity and operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="flex flex-col border hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>

                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm mt-auto">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 mt-1 text-green-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
