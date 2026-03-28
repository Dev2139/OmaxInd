import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild><Link to="/products">Back to Products</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Product Overview</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{product.overview}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" asChild>
                <Link to="/contact">Request Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 border-y border-border">
        <div className="container py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Comparison Table */}
      {product.modelSpecs && (
        <section className="container py-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">Model Comparison</h2>
          <p className="text-muted-foreground mb-8">Detailed specifications across all available models. All dimensions in mm, weights in kg.</p>
          <div className="bg-card border border-border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {product.modelSpecs.headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap first:rounded-tl-lg last:rounded-tr-lg">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.modelSpecs.rows.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-card"} hover:bg-accent/5 transition-colors`}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 whitespace-nowrap ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">* All specifications are subject to change without prior notice.</p>
        </section>
      )}

      {/* General Specifications */}
      <section className={product.modelSpecs ? "bg-muted/50 border-y border-border" : "container py-16"}>
        <div className={product.modelSpecs ? "container py-16" : ""}>
          <h2 className="text-2xl font-bold text-foreground mb-8">Technical Specifications</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3 border-r border-border">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <h2 className="text-2xl font-bold mb-8">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.applications.map((a) => (
              <div key={a} className="flex items-center gap-3 p-4 border border-primary-foreground/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/90">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Request a Custom Solution <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
