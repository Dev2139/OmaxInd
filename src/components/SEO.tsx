import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  category?: string;
  offers?: {
    priceCurrency?: string;
    price?: string;
    availability?: string;
    itemCondition?: string;
  };
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  productSchema?: ProductSchemaProps;
}

const SEO = ({
  title = "Omax Industries | Industrial Chiller Manufacturer Ahmedabad India",
  description = "Omax Industries is India's leading manufacturer of high-efficiency industrial water chillers, CNC spindle chillers, mould temperature controllers, and commercial heat pumps in Kathawada GIDC, Ahmedabad.",
  keywords = "industrial chiller manufacturer, water cooled chiller India, air cooled chiller Ahmedabad, CNC spindle chiller, mould temperature controller, heat pump water heater, Omax Industries Kathawada, industrial cooling solutions",
  image = "https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png",
  url = "https://www.omaxind.co.in",
  type = "website",
  breadcrumbs,
  faqs,
  productSchema,
}: SEOProps) => {
  const siteTitle = title.includes("Omax Industries") ? title : `${title} | Omax Industries`;

  // Organization & LocalBusiness JSON-LD
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": "https://www.omaxind.co.in/#organization",
    "name": "Omax Industries",
    "legalName": "Omax Industries",
    "url": "https://www.omaxind.co.in",
    "logo": "https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png",
    "image": image,
    "description": description,
    "telephone": "+91-9662512628",
    "email": "omaxind123@gmail.com",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10, Harikrupa Industrial Park-2, Road No.5, Kathawada G.I.D.C.",
      "addressLocality": "Kathawada, Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382430",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0338,
      "longitude": 72.6789
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9662512628",
      "contactType": "sales & technical support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.omaxind.co.in/#website",
    "url": "https://www.omaxind.co.in",
    "name": "Omax Industries",
    "publisher": {
      "@id": "https://www.omaxind.co.in/#organization"
    }
  };

  // Breadcrumbs Schema
  const breadcrumbListSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://www.omaxind.co.in${item.url}`
    }))
  } : null;

  // FAQ Schema
  const faqPageSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Product Schema
  const productJsonSchema = productSchema ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productSchema.name,
    "description": productSchema.description,
    "image": [productSchema.image],
    "sku": productSchema.sku || productSchema.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    "category": productSchema.category || "Industrial Equipment",
    "brand": {
      "@type": "Brand",
      "name": "Omax Industries"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Omax Industries"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": productSchema.offers?.priceCurrency || "INR",
      "price": productSchema.offers?.price || "1.00",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": productSchema.offers?.availability || "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Omax Industries"
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Geo & Location Tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0338;72.6789" />
      <meta name="ICBM" content="23.0338, 72.6789" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Omax Industries" />
      <meta property="og:locale" content="en_IN" />
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

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {breadcrumbListSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbListSchema)}</script>
      )}
      {faqPageSchema && (
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      )}
      {productJsonSchema && (
        <script type="application/ld+json">{JSON.stringify(productJsonSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
