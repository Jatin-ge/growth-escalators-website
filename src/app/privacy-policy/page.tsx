import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Growth Escalators",
  description: "Privacy Policy for Growth Escalators — Performance Marketing Agency for D2C Brands.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-bg-dark pt-24 pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white">Privacy Policy</h1>
          <p className="text-text-secondary-dark mt-3">Last updated: March 2026</p>
        </div>
      </section>
      <SectionWrapper variant="light">
        <div className="max-w-3xl prose prose-slate">
          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">1. Information We Collect</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            We collect information you provide directly to us, such as when you book a strategy call, contact us through our website, or engage with our services. This includes your name, email address, phone number, and business information.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">2. How We Use Your Information</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, to send you marketing communications (with your consent), and to comply with legal obligations.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">3. Information Sharing</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">4. Cookies</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            Our website uses cookies to enhance your browsing experience and to analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some features of our website.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">5. Data Security</h2>
          <p className="text-text-secondary-light leading-relaxed mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="font-syne font-bold text-2xl text-text-primary-light mb-4">6. Contact Us</h2>
          <p className="text-text-secondary-light leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at Info@growthescalators.com or call us at +91 77338 88883.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
