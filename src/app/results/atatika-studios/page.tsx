import { CaseStudyPageTemplate } from "@/components/templates/CaseStudyPageTemplate";
import { caseStudies } from "@/content/caseStudies";

const SLUG_PLACEHOLDER = "atatika-studios";
const caseStudy = caseStudies.find(c => c.slug === SLUG_PLACEHOLDER)!;

export function generateMetadata() {
  return {
    title: caseStudy?.metaTitle,
    description: caseStudy?.metaDescription,
  };
}

export default function Page() {
  return <CaseStudyPageTemplate caseStudy={caseStudy} />;
}
