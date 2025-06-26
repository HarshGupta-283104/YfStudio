import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2016",
    title: "Company Founded",
    description: "Y.F. Enterprises was established in Kolkata with a mission to provide top-tier UPS services to local businesses.",
  },
  {
    year: "2018",
    title: "Service Expansion",
    description: "Expanded our service offerings to include battery sales and comprehensive AMC contracts for major brands.",
  },
  {
    year: "2020",
    title: "Pan-India Operations",
    description: "Achieved a major milestone by extending our support and service network to clients all across India.",
  },
  {
    year: "2023",
    title: "Portfolio Growth",
    description: "Incorporated servo stabilizers and large-scale UPS rentals, catering to heavy industrial power needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">About Y.F. Enterprises</h1>
          <p className="mt-4 min-w-full mx-auto text-lg text-foreground/80">
            Your steadfast partner in power solutions since 2016.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary">Our Journey of Powering India</h2>
              <p className="mt-4 text-muted-foreground">
                From our humble beginnings in Kolkata in 2016, Y.F. Enterprises has grown into a nationally recognized name in the power solutions industry. Our journey has been one of relentless dedication to quality, customer satisfaction, and technical excellence. We started with a simple goal: to eliminate downtime for businesses.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we serve a diverse clientele, from small offices to large industrial complexes, across the length and breadth of India. Our growth is a testament to the trust our clients place in us and the unwavering commitment of our skilled team.
              </p>
            </div>
            <div>
              <img
                src="https://placehold.co/600x400"
                alt="Y.F. Enterprises Team"
               
                className="rounded-lg w-full shadow-lg"
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </div>
      </section>
   
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Milestones</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="border-l-2 border-primary absolute h-full top-0 left-4 md:left-1/2 -ml-px"></div>
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="z-10 bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg">{event.year}</div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <TrendingUp className="w-10 h-10 text-accent" />
                <div>
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To deliver reliable, efficient, and cost-effective power solutions that empower businesses to operate seamlessly, ensuring their growth and stability with our unwavering commitment to quality and service.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="w-10 h-10 text-accent" />
                <div>
                  <CardTitle>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be India's most trusted and innovative power solutions provider, recognized for our technical expertise, customer-centric approach, and contribution to a world with uninterrupted power.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
