import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  structuredData,
  noIndex = false,
}: SEOHeadProps) => {
  const baseUrl = "https://dellen-mann.de";
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  // LocalBusiness Schema für Dellenreparatur
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "DellenMann - Sercan Sacar",
    alternateName: ["Dellenmann", "Beulenmann", "Beulendoktor", "Dellentechniker Ludwigsburg"],
    description:
      "Professionelle Dellenreparatur & Beulenreparatur ohne Lackieren in Ludwigsburg. PDR (Paintless Dent Repair), Smart Repair, Hagelschaden-Reparatur. Mobiler Service.",
    url: baseUrl,
    telephone: "+49 162 3236262",
    email: "info@dellen-mann.de",
    image: `${baseUrl}/og-image.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gansäcker 8",
      addressLocality: "Bietigheim-Bissingen",
      postalCode: "74321",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9612,
      longitude: 9.1335,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ludwigsburg",
      },
      {
        "@type": "City",
        name: "Bietigheim-Bissingen",
      },
      {
        "@type": "City",
        name: "Stuttgart",
      },
      {
        "@type": "City",
        name: "Heilbronn",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://www.instagram.com/sacar.sercan"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dellenreparatur Leistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dellenentfernung ohne Lackieren (PDR)",
            description:
              "Professionelle Paintless Dent Repair für alle Fahrzeugtypen. Dellen entfernen ohne Lackieren.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hagelschaden Reparatur",
            description:
              "Professionelle Hagelschadenbeseitigung mit PDR-Technik. Lackfreie Dellenentfernung nach Unwetter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Repair",
            description:
              "Beulenreparatur und Karosserieschaden Reparatur für Parkdellen, Türdellen und kleine Beschädigungen.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobiler Dellenservice",
            description:
              "Mobiler Dellentechniker Service im Umkreis von Ludwigsburg. Wir kommen zu Ihnen!",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = canonicalUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title.split(" | ")[0],
            item: fullUrl,
          },
        ],
      }
    : null;

  return (
    <Helmet>
      {/* Basis Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="DellenMann - Sercan Sacar" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="de" />
      <meta name="geo.region" content="DE-BW" />
      <meta name="geo.placename" content="Ludwigsburg" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="DellenMann" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

      {/* Structured Data - Breadcrumb */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}

      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
