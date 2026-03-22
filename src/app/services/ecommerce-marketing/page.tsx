import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { services } from "@/content/services";

const SLUG_PLACEHOLDER = "ecommerce-marketing";
const service = services.find(s => s.slug === SLUG_PLACEHOLDER)!;

export function generateMetadata() {
  return {
    title: service?.metaTitle,
    description: service?.metaDescription,
  };
}

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
