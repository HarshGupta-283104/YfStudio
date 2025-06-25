import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Package, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = {
  ups: [
    { name: "Online UPS", capacity: "1 KVA - 500 KVA", hint: "data center", description: "Maximum protection for critical equipment with zero transfer time." },
    { name: "Offline UPS", capacity: "600 VA - 2 KVA", hint: "office computers", description: "Cost-effective backup power for desktops and peripherals." },
    { name: "Line-Interactive UPS", capacity: "1 KVA - 5 KVA", hint: "network server", description: "Automatic voltage regulation for servers and network gear." },
    { name: "Modular UPS", capacity: "20 KVA - 500+ KVA", hint: "scalable server room", description: "Scalable and redundant power for growing data centers." },
  ],
  batteries: [
    { name: "SMF VRLA Batteries", brand: "Quanta, Exide, Rocket", hint: "sealed lead acid battery", description: "Maintenance-free batteries, ideal for UPS applications." },
    { name: "Tubular Batteries", brand: "Exide, Luminous", hint: "inverter battery", description: "Deep cycle batteries designed for long backup times." },
    { name: "Lithium-Ion Batteries", brand: "Various", hint: "lithium ion battery pack", description: "High-density, long-life batteries for modern applications." },
  ],
  stabilizers: [
    { name: "Servo Voltage Stabilizer", type: "Air Cooled & Oil Cooled", hint: "industrial voltage stabilizer", description: "Precise voltage correction for sensitive industrial machinery." },
    { name:g: "Static Voltage Stabilizer", type: "Fast Correction", hint: "precision voltage regulator", description: "Ultra-fast voltage regulation for IT and medical equipment." },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A curated selection of industry-leading power equipment to meet your specific needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ups" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto sm:h-10">
              <TabsTrigger value="ups" className="py-2"><Server className="w-4 h-4 mr-2" /> UPS Systems</TabsTrigger>
              <TabsTrigger value="batteries" className="py-2"><Battery className="w-4 h-4 mr-2" /> Batteries</TabsTrigger>
              <TabsTrigger value="stabilizers" className="py-2"><Package className="w-4 h-4 mr-2" /> Stabilizers</TabsTrigger>
            </TabsList>

            <TabsContent value="ups" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.ups.map((p) => (
                  <Card key={p.name} className="flex flex-col">
                    <CardHeader>
                      <Image src={`https://placehold.co/400x300`} width={400} height={300} alt={p.name} className="rounded-t-lg" data-ai-hint={p.hint} />
                      <CardTitle className="pt-4">{p.name}</CardTitle>
                      <CardDescription>Capacity: {p.capacity}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full"><Link href="/contact#quote">Request Quote</Link></Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="batteries" className="mt-8">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.batteries.map((p) => (
                  <Card key={p.name} className="flex flex-col">
                    <CardHeader>
                      <Image src={`https://placehold.co/400x300`} width={400} height={300} alt={p.name} className="rounded-t-lg" data-ai-hint={p.hint} />
                      <CardTitle className="pt-4">{p.name}</CardTitle>
                      <CardDescription>Brands: {p.brand}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full"><Link href="/contact#quote">Request Quote</Link></Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stabilizers" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {products.stabilizers.map((p) => (
                  <Card key={p.name} className="flex flex-col">
                    <CardHeader>
                      <Image src={`https://placehold.co/400x300`} width={400} height={300} alt={p.name} className="rounded-t-lg" data-ai-hint={p.hint} />
                      <CardTitle className="pt-4">{p.name}</CardTitle>
                      <CardDescription>Type: {p.type}</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full"><Link href="/contact#quote">Request Quote</Link></Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
