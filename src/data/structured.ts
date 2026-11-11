// schema.org nodes (JSON-LD) built from the same facts the pages show, so search engines and
// AI assistants read exactly what a visitor reads.
import { company, allServices } from "./site";

const orgId = `${company.url}/#organizacao`;

export function organizationLd() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: company.name,
    legalName: company.legalName,
    taxID: company.cnpj,
    url: company.url,
    logo: `${company.url}/linqcode-logorgb1.png`,
    image: `${company.url}/og/linqcode.jpg`,
    description: company.description,
    email: company.email,
    telephone: company.phoneE164,
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsLanguage: "pt-BR",
    sameAs: company.social.map((s) => s.url),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: company.phoneE164,
      email: company.email,
      availableLanguage: "Portuguese",
    },
    makesOffer: allServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${company.url}/solucoes#${s.anchor}` },
    })),
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${company.url}/#site`,
    url: company.url,
    name: company.name,
    inLanguage: "pt-BR",
    publisher: { "@id": orgId },
  };
}

export function servicesLd() {
  return allServices.map((s) => ({
    "@type": "Service",
    "@id": `${company.url}/solucoes#${s.anchor}`,
    name: s.name,
    description: `${s.pitch} ${s.features.join(", ")}.`,
    serviceType: s.name,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Brasil" },
    url: `${company.url}/solucoes#${s.anchor}`,
  }));
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, company.url).href,
    })),
  };
}
