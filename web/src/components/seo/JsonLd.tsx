const SITE_URL = "https://samuelalexsanche.github.io/pez-vela-residences";
const WA = "523327874747";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE_URL}/#complex`,
      name: "Pez Vela Residences",
      description:
        "Desarrollo de usos mixtos con 33 departamentos de lujo y 3 penthouses frente a la Bahía de Banderas, en La Cruz de Huanacaxtle, Riviera Nayarit. En preventa.",
      url: SITE_URL,
      logo: `${SITE_URL}/branding/logo-pezvela-transparente.png`,
      image: `${SITE_URL}/branding/banner-portada-ola-mar.jpg`,
      numberOfRooms: "2",
      petsAllowed: false,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vía principal de La Cruz de Huanacaxtle",
        addressLocality: "La Cruz de Huanacaxtle",
        addressRegion: "Nayarit",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.7408,
        longitude: -105.3725,
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Alberca infinity", value: true },
        { "@type": "LocationFeatureSpecification", name: "Sky Beach", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pool Bar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Asadores al aire libre", value: true },
        { "@type": "LocationFeatureSpecification", name: "Gimnasio techado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Estacionamiento", value: true },
        { "@type": "LocationFeatureSpecification", name: "Área comercial en planta baja", value: true },
      ],
      containsPlace: [
        { "@type": "Apartment", name: "Departamento Tipo 1", floorSize: { "@type": "QuantitativeValue", value: 131.41, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Departamento Tipo 2", floorSize: { "@type": "QuantitativeValue", value: 132.22, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Departamento Tipo 3", floorSize: { "@type": "QuantitativeValue", value: 106.42, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Departamento Tipo 4", floorSize: { "@type": "QuantitativeValue", value: 113.34, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Departamento Tipo 5", floorSize: { "@type": "QuantitativeValue", value: 101.61, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Departamento Tipo 6", floorSize: { "@type": "QuantitativeValue", value: 100.64, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Penthouse 1", floorSize: { "@type": "QuantitativeValue", value: 257.48, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Penthouse 2", floorSize: { "@type": "QuantitativeValue", value: 229.49, unitCode: "MTK" } },
        { "@type": "Apartment", name: "Penthouse 3", floorSize: { "@type": "QuantitativeValue", value: 213.81, unitCode: "MTK" } },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: `+${WA}`,
        availableLanguage: ["Spanish"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Pez Vela Residences",
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE_URL}/#complex` },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
