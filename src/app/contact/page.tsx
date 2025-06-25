import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We're here to help with all your power solution needs. Reach out to us for quotes, service requests, or any inquiries.
          </p>
        </div>
      </section>

      <section className="py-16" id="quote">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
                <p className="text-muted-foreground mt-2">Fill out the form or contact us directly through the details below.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Power Lane, Industrial Area, Kolkata, West Bengal, 700001, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Sales: +91 12345 67890</p>
                    <p className="text-muted-foreground">Support: +91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@yfenterprises.in</p>
                    <p className="text-muted-foreground">support@yfenterprises.in</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary">Our Location</h3>
                <div className="mt-4 rounded-lg overflow-hidden border">
                   <Image src="https://placehold.co/600x400" width={600} height={400} alt="Map to Y.F. Enterprises" className="w-full" data-ai-hint="city map" />
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-lg">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
