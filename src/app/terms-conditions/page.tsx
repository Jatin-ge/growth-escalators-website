import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms & Conditions | Growth Escalators",
  description: "Terms and Conditions for Growth Escalators — Performance Marketing Agency for D2C Brands.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <section className="bg-bg-dark pt-24 pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">Terms &amp; Conditions</h1>
          <p className="text-text-secondary-dark mt-3">Last updated: March 2026</p>
        </div>
      </section>
      <SectionWrapper variant="light">
        <div className="max-w-3xl">
          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">1. Acceptance of Terms</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            By accessing and using the Growth Escalators website and services, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">2. Services</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            Growth Escalators provides performance marketing services including Meta Ads management, Google Ads management, conversion rate optimization, creative strategy, and related digital marketing services. Specific service terms are outlined in individual service agreements.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">3. Client Responsibilities</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            Clients are responsible for providing accurate information, maintaining ad account access, ensuring timely payment of ad spend directly to platforms, and cooperating with our team to implement recommendations. Results depend on multiple factors including market conditions and ad spend levels.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">4. Intellectual Property</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            All creative work, strategies, and reports produced by Growth Escalators for a client become the client&apos;s property upon full payment. Our proprietary methodologies and tools remain our intellectual property.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">5. Limitation of Liability</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            Growth Escalators shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific services in question.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">6. Governing Law</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            These terms shall be governed by the laws of Rajasthan, India. Any disputes shall be resolved in the courts of Jaipur, Rajasthan.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">7. Contact</h2>
          <p className="text-text-secondary-light leading-relaxed">
            For questions regarding these Terms &amp; Conditions, contact us at Info@growthescalators.com.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
