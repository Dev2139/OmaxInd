import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Users, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="About Omax Industries" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="container relative z-10 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Omax Industries</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Pioneering advanced thermal regulation and industrial cooling solutions with a commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold border-l-4 border-accent pl-4 text-foreground">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Omax Industries is a premier manufacturer and supplier of top-tier industrial cooling and thermal management systems. With years of engineering expertise, we specialize in delivering high-performance refrigeration solutions, tailored chillers, and advanced heating mechanisms to diverse industries globally.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our comprehensive product line encompasses everything from heavy-duty industrial water chillers and Mould Temperature Controllers to large-scale Commercial Heat Pumps. We ensure that our clients receive the most energy-efficient, robust, and reliable equipment necessary to empower their operational capacities.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                 <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center shadow-sm">
                   <Users className="w-10 h-10 text-accent mb-4" />
                   <h3 className="font-bold text-2xl mb-1">500+</h3>
                   <p className="text-muted-foreground text-sm">Happy Clients</p>
                 </div>
                 <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center shadow-sm">
                   <Globe className="w-10 h-10 text-accent mb-4" />
                   <h3 className="font-bold text-2xl mb-1">Global</h3>
                   <p className="text-muted-foreground text-sm">Reach & Distribution</p>
                 </div>
                 <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center shadow-sm">
                   <Zap className="w-10 h-10 text-accent mb-4" />
                   <h3 className="font-bold text-2xl mb-1">Custom</h3>
                   <p className="text-muted-foreground text-sm">Engineering Solutions</p>
                 </div>
                 <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center shadow-sm">
                   <ShieldCheck className="w-10 h-10 text-accent mb-4" />
                   <h3 className="font-bold text-2xl mb-1">ISO</h3>
                   <p className="text-muted-foreground text-sm">Certified Standards</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To consistently innovate and provide top-of-the-line thermal regulation equipment that maximizes industrial productivity while minimizing energy consumption. We strive to support our partners with unparalleled engineering service and sustainable solutions tailored to their exact environment.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the globally recognized leader in intelligent cooling and heating solutions, setting the industry benchmark for reliability, eco-friendliness, and sheer technological capability, ultimately paving the way for a more sustainable industrial future.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Omax Industries?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Engineering Excellence", desc: "Our R&D team actively introduces the latest cooling methodologies." },
                { title: "Energy Efficient", desc: "Our equipment reduces operational power costs by significant margins." },
                { title: "Unmatched Reliability", desc: "Tested thoroughly for continuous 24/7 demanding operations." },
                { title: "Custom Scaling", desc: "We deploy scalable modular architectures suitable for any plant size." },
                { title: "Exceptional Support", desc: "Available technical assistance and robust warranties post-installation." },
                { title: "Premium Materials", desc: "Constructed utilizing food-grade steels and robust protective coatings." },
              ].map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">{val.title}</h4>
                    <p className="text-muted-foreground text-sm">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16 text-center text-primary-foreground">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">Partner with the Industry Experts</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ready to upgrade your infrastructure? Discover how our precision-engineered products can streamline your processing line.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact" className="font-semibold">Get in Touch <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
