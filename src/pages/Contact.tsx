import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle2, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Enquiry Submitted", description: "Our team will contact you within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl font-bold">Contact Omax Industries</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl">
            Reach out to discuss your production requirements. Our engineering team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>10, Harikrupa Industrial Park-2, Nr. Kotak Mahindra Bank, Road No.5, Kathawada G.I.D.C., Kathawada, Ahmedabad-382430</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  +91 9662512628
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  omaxind123@gmail.com
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Globe className="w-5 h-5 text-accent shrink-0" />
                  www.omaxind.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
              <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your enquiry has been submitted. Our team will get back to you shortly.</p>
                <Button variant="accent" className="mt-6" onClick={() => setSubmitted(false)}>Send Another Enquiry</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Send an Enquiry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <Input required placeholder="Your full name" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                    <Input placeholder="Company name" maxLength={100} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input required type="email" placeholder="you@company.com" maxLength={255} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input type="tel" placeholder="+91 98765 43210" maxLength={20} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Requirement *</label>
                  <Textarea required placeholder="Describe your requirements, product of interest, or custom solution needs..." rows={5} maxLength={2000} />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="custom" className="rounded border-border" />
                  <label htmlFor="custom" className="text-sm text-muted-foreground">I need a custom solution</label>
                </div>
                <Button variant="accent" size="lg" type="submit">Submit Enquiry</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
