import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Stethoscope, Beaker, Coffee, Building2, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const industries = [
  {
    title: "Plastic Injection & Extrusion",
    desc: "Maintain precise mould and process temperatures to reduce cycle times, minimize defects, and secure high-quality plastic finishes.",
    icon: (
      <div className="bg-orange-100 text-orange-600 rounded-full p-4 mb-4">
        <Factory className="w-8 h-8" />
      </div>
    ),
  },
  {
    title: "CNC & Laser Machining",
    desc: "Extend spindle life and prevent thermal deformation with intelligent, high-precision cooling mechanisms for routers and engravers.",
    icon: (
      <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
        <Wrench className="w-8 h-8" />
      </div>
    ),
  },
  {
    title: "Pharmaceuticals & Medical",
    desc: "Ensure hygienic, reliable, and strict temperature-controlled storage and processing using food-grade materials and precise chillers.",
    icon: (
      <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4">
        <Stethoscope className="w-8 h-8" />
      </div>
    ),
  },
  {
    title: "Food & Beverages",
    desc: "Safeguard product flavor, quality, and hygiene in brewery, dairy, and drinking water plants with tailored RO and process chillers.",
    icon: (
      <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
        <Coffee className="w-8 h-8" />
      </div>
    ),
  },
  {
    title: "Chemical Processing",
    desc: "Regulate volatile reactions and maintain stable tank temperatures with robust chillers constructed for demanding chemical environments.",
    icon: (
      <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
        <Beaker className="w-8 h-8" />
      </div>
    ),
  },
  {
    title: "Commercial & Hospitality",
    desc: "Deliver continuous, energy-efficient hot water for hotels, resorts, and large-scale facilities using advanced heavy-duty heat pumps.",
    icon: (
      <div className="bg-teal-100 text-teal-600 rounded-full p-4 mb-4">
        <Building2 className="w-8 h-8" />
      </div>
    ),
  },
];

const Industries: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Industries We Serve" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="container relative z-10 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Industries We Serve</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Providing state-of-the-art chiller, thermal regulation, and thermal processing solutions across diverse global sectors.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="/contact">Get an Industry Quote <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </section>

        {/* Industry Grid Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Optimized For Every Environment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Our heavy-duty cooling and heating equipment is engineered to withstand the rigorous demands of your specific industry, enhancing both output and quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.title} className="bg-card rounded-2xl shadow-sm border border-border p-8 flex flex-col items-start hover:shadow-md transition-all">
                  {industry.icon}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container py-20 text-center border-t border-border mt-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">Need a Custom Thermal Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            No matter the complexity of your operational requirements, our engineering team can design equipment fine-tuned to your industry criteria.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Consult Our Engineers <ArrowRight className="w-4 h-4 ml-1" /></a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
