import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart, HardHat, Lightbulb, Recycle, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "AMC / CMC Contracts",
    description: "Ensure round-the-clock performance with our comprehensive Annual and Comprehensive Maintenance Contracts for all UPS brands.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    href: "/services#amc",
  },
  {
    title: "UPS & Battery Rental",
    description: "Flexible and affordable rental solutions for short-term projects, events, or as a backup during repairs.",
    icon: <Recycle className="w-8 h-8 text-primary" />,
    href: "/services#rental",
  },
  {
    title: "UPS Repair",
    description: "Expert, on-site repair services to minimize downtime and get your systems back online quickly and efficiently.",
    icon: <HardHat className="w-8 h-8 text-primary" />,
    href: "/services#repair",
  },
  {
    title: "Battery & Stabilizers",
    description: "High-quality batteries and servo stabilizers to protect your equipment and ensure a stable power supply.",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    href: "/services#stabilizers",
  },
];

const brandLogos = [
  { name: "Hitachi Hi-Rel", hint: "logo brand" },
  { name: "APC", hint: "logo brand" },
  { name: "Emerson", hint: "logo brand" },
  { name: "Schneider Electric", hint: "logo brand" },
  { name: "Eaton", hint: "logo brand" },
  { name: "Vertiv", hint: "logo brand" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-primary/10">
        <Image
          src="https://placehold.co/1600x900"
          alt="Industrial UPS System"
          fill
          className="object-cover opacity-20"
          data-ai-hint="industrial UPS"
          priority
        />
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary font-headline">
            Powering Your World, <span className="text-accent">24x7x365</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
            India's leading provider of Uninterruptible Power Supply (UPS) systems, offering comprehensive sales, service, and maintenance.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact#quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <Award className="w-12 h-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">6+ Years of Experience</h3>
              <p className="mt-2 text-muted-foreground">Established in 2016, providing expert power solutions with a proven track record.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Truck className="w-12 h-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">Pan-India Support</h3>
              <p className="mt-2 text-muted-foreground">Our service network extends across India, ensuring prompt support wherever you are.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <BarChart className="w-12 h-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">1 to 500 KVA Range</h3>
              <p className="mt-2 text-muted-foreground">We handle a wide spectrum of power needs, from small offices to large industrial plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Serve Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
            <p className="mt-2 text-lg text-muted-foreground">We are authorized partners for sales and service of the world's leading power brands.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={`https://placehold.co/150x60`}
                  alt={brand.name}
                  width={150}
                  height={60}
                  className="object-contain"
                  data-ai-hint={brand.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Services</h2>
            <p className="mt-2 text-lg text-muted-foreground">Comprehensive solutions to keep your business running without interruption.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Link href={service.href} className="flex flex-col h-full">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            To deliver reliable, efficient, and cost-effective power solutions that empower businesses to operate seamlessly, ensuring their growth and stability with our unwavering commitment to quality and service.
          </p>
          <Button variant="secondary" size="lg" asChild className="mt-8">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
