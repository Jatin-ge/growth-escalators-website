import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { industries } from "@/content/industries";

const SLUG_PLACEHOLDER = "d2c-ecommerce";
const industry = industries.find(i => i.slug === SLUG_PLACEHOLDER)!;

export function generateMetadata() {
  return {
    title: industry?.metaTitle,
    description: industry?.metaDescription,
  };
}

export default function Page() {
  return <IndustryPageTemplate industry={industry} />;
}
