import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Omax Industries | Industrial Chiller & Thermal Regulation Solutions",
  description = "Omax Industries is a premier manufacturer of industrial water chillers, CNC spindle chillers, and precision thermal regulation systems in Ahmedabad, India.",
  keywords = "industrial chiller, water cooled chiller, air cooled chiller, mould temperature controller, heat pump, Omax Industries, Ahmedabad, cooling solutions",
  image = "https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png",
  url = "https://www.omaxind.com",
  type = "website",
}: SEOProps) => {
  const siteTitle = title.includes("Omax Industries") ? title : `${title} | Omax Industries`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Omax Industries",
          "url": "https://www.omaxind.com",
          "logo": "https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9662512628",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10, Harikrupa Industrial Park-2, Kathawada G.I.D.C.",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "382430",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
