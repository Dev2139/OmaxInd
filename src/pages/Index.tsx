import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-industrial.jpg";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Award,
  Globe,
  Zap,
  Shield,
  Wrench,
  Cpu,
  Leaf,
  Headphones,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "3,000+", label: "Installations" },
  { value: "7+", label: "Product Lines" },
  { value: "50+", label: "Product Models" },
];

const whyChoose = [
  { icon: Shield, title: "Reliability", desc: "Built with premium materials for decades of continuous operation" },
  { icon: Award, title: "Quality Materials", desc: "SS304, aluminum alloy, and industrial-grade components throughout" },
  { icon: Cpu, title: "Smart Controls", desc: "PLC & PID automation with real-time monitoring and diagnostics" },
  { icon: Leaf, title: "Energy Efficient", desc: "Optimized designs that reduce power consumption by up to 30%" },
  { icon: Headphones, title: "After-Sales Support", desc: "Dedicated service team with 24/7 technical support coverage" },
  { icon: Wrench, title: "Custom Solutions", desc: "Tailored configurations to match your specific production needs" },
];

const industries = [
  { icon: Factory, name: "Injection Molding" },
  { icon: Globe, name: "Blow Molding" },
  { icon: Zap, name: "Plastic Processing Plants" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Industrial manufacturing facility" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container relative z-10 py-24">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Industrial Solutions Provider</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Advanced Auxiliary Systems for Plastic Processing
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Engineered for efficiency, precision, and long-term reliability. Complete auxiliary solutions from material handling to cooling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" asChild>
              <Link to="/products">View Products <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-b border-border">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Company Overview */}
    <section id="about" className="container py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Omax Industries – Engineering Excellence
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Omax Industries is a distinguished manufacturer of a wide range of auxiliary equipment for plastic moulding machinery. Based in Ahmedabad, India, we design and build hot air dryers, hopper loaders, central conveying systems, mould temperature controllers, and water chillers — engineered for precision, built for reliability.
        </p>
      </div>
    </section>

    {/* Products */}
    <section id="products" className="bg-muted/50">
      <div className="container py-20">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Complete Auxiliary Equipment Range
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.slug} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.tagline}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/products/${p.slug}`}>View Details <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Solutions Flow */}
    <section id="solutions" className="container py-20">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Integrated Solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Complete Process Integration
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our products work together as a seamless system — from raw material handling to final process cooling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { step: "01", title: "Material Handling", desc: "Hopper loaders automate material feeding from storage to machines" },
          { step: "02", title: "Drying", desc: "Hot air dryers remove moisture for consistent material quality" },
          { step: "03", title: "Conveying", desc: "Central systems distribute material across the production floor" },
          { step: "04", title: "Cooling", desc: "Chillers and temperature controllers regulate process heat" },
        ].map((s, i) => (
          <div key={s.step} className="relative">
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <div className="text-accent font-mono font-bold text-lg mb-2">{s.step}</div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
            {i < 3 && (
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section id="industries" className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {industries.map((ind) => (
            <div key={ind.name} className="text-center p-8 border border-primary-foreground/10 rounded-lg">
              <ind.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="container py-20">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Omax</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Engineered for Your Success
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChoose.map((item) => (
          <div key={item.title} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
            <item.icon className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent">
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold text-accent-foreground mb-4">Ready to Optimize Your Production?</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
          Contact our engineering team for a tailored solution that fits your production requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Request a Custom Solution</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
