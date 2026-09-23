import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const Products = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <SEO 
      title="Industrial Chiller & Thermal Equipment Range | Omax Industries Ahmedabad"
      description="Explore Omax Industries' full catalog of industrial water chillers, SS water chillers, CNC spindle chillers, mould temperature controllers, and heat pumps in Ahmedabad, India."
      keywords="industrial water chiller catalog, SS water chiller manufacturer, CNC spindle chiller products, mould temperature controller price, lab chiller manufacturer Ahmedabad, Kathawada GIDC cooling equipment"
      url="https://www.omaxind.co.in/products"
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" }
      ]}
    />
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Range</p>
        <h1 className="text-3xl md:text-4xl font-bold">Industrial Chiller & Thermal Solutions Range</h1>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl">
          Comprehensive catalog of high-efficiency water chillers, CNC spindle chillers, and precision temperature controllers engineered in Kathawada GIDC, Ahmedabad.
        </p>
      </div>
    </section>
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.slug} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
              <img
                src={p.image}
                alt={`${p.name} - Industrial Thermal Regulation System Omax Industries`}
                loading="lazy"
                style={{ maxWidth: '70%', maxHeight: '70%' }}
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.tagline}</p>
              <ul className="space-y-1.5 mb-5">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="sm" asChild>
                <Link to={`/products/${p.slug}`}>View Details <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Products;
