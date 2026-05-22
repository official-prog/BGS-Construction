import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { Story } from "@/components/site/Story";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BGS Construction | Okanagan Valley, BC — Renovations, Carpentry & More" },
      { name: "description", content: "Full-service construction company serving the Okanagan Valley, BC. Renovations, carpentry, timber framing, concrete forming, excavation, siding, and decks. Call 604-786-2990." },
      { property: "og:title", content: "BGS Construction | Okanagan Valley BC" },
      { property: "og:description", content: "30+ years of construction expertise in the Okanagan. Renovations, carpentry, timber framing, concrete, siding, and custom decks. Free on-site consultations. 604-786-2990." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.bgsconstruction.ca" },
    ],
    links: [{ rel: "canonical", href: "https://www.bgsconstruction.ca" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: "BGS Construction",
        url: "https://www.bgsconstruction.ca",
        telephone: "+1-604-786-2990",
        email: "info@bgsconstruction.ca",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kelowna",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        areaServed: "Okanagan Valley BC — Kelowna, Vernon, Penticton, West Kelowna, Lake Country, Summerland",
        sameAs: [
          "https://www.facebook.com/p/BGS-Construction-61559855762357/",
          "https://www.bgsconstruction.ca",
        ],
      }),
    }],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Story />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}
