
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutions = [
  {
    title: "Digital Transformation",
    desc: "Empower your business with the latest digital tools and strategies to drive efficiency and innovation.",
    icon: (
      <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 4h-1v-4h-1m4 4h-1v-4h-1"/></svg>
      </div>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Leverage scalable and secure cloud platforms to enhance collaboration and reduce IT costs.",
    icon: (
      <div className="bg-green-100 text-green-600 rounded-full p-3 mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
    ),
  },
  {
    title: "AI & Automation",
    desc: "Automate repetitive tasks and gain insights with AI-driven analytics and intelligent automation solutions.",
    icon: (
      <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m6-4l.75 4M4.21 4.21a1 1 0 011.42 0l14.16 14.16a1 1 0 01-1.42 1.42L4.21 5.63a1 1 0 010-1.42z"/></svg>
      </div>
    ),
  },
];


import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Cpu, Shield } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const features = [
  { icon: <Shield className="w-7 h-7 text-accent" />, title: "Secure & Reliable", desc: "Enterprise-grade security and robust infrastructure for peace of mind." },
  { icon: <Cpu className="w-7 h-7 text-accent" />, title: "Smart Automation", desc: "Automate processes and reduce manual effort with intelligent solutions." },
  { icon: <Zap className="w-7 h-7 text-accent" />, title: "Fast Deployment", desc: "Rapid implementation so you can start seeing results quickly." },
];

const steps = [
  { title: "Consultation", desc: "We analyze your business needs and recommend the best-fit solutions." },
  { title: "Implementation", desc: "Our team sets up and customizes the solution for your workflow." },
  { title: "Support", desc: "Ongoing support and optimization to ensure your continued success." },
];

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Solutions" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container relative z-10 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Business Solutions for Modern Industry</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">Unlock efficiency, growth, and innovation with our tailored digital, cloud, and automation solutions.</p>
            <Button variant="accent" size="lg" asChild>
              <a href="/contact">Request a Consultation <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </section>

        {/* Solutions Cards */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">Our Core Solutions</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Discover how our innovative solutions can help your business grow, streamline operations, and stay ahead in a competitive market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((sol) => (
                <div key={sol.title} className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center border border-border hover:shadow-xl transition-shadow">
                  {sol.icon}
                  <h3 className="text-xl font-semibold mb-2 text-center text-foreground">{sol.title}</h3>
                  <p className="text-muted-foreground text-center">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We deliver more than just technology. Our solutions are designed for reliability, security, and rapid results, backed by expert support every step of the way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-muted rounded-lg p-8 flex flex-col items-center border border-border">
                {f.icon}
                <h4 className="text-lg font-semibold mt-4 mb-2 text-center">{f.title}</h4>
                <p className="text-muted-foreground text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process/Steps Section */}
        <section className="bg-card border-y border-border py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-foreground">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
              {steps.map((step, idx) => (
                <div key={step.title} className="flex-1 bg-background rounded-lg border border-border p-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-primary-foreground font-bold text-xl mb-4">{idx + 1}</div>
                  <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Contact us today to discuss your needs and discover how our solutions can help you achieve your goals faster and smarter.</p>
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
