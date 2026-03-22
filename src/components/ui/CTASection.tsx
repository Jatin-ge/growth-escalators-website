import { Button } from "./Button";
import { SectionWrapper } from "./SectionWrapper";

export function CTASection() {
  return (
    <SectionWrapper variant="dark">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-syne font-bold text-5xl md:text-3xl text-white mb-6">
          Ready to Scale Your D2C Brand?
        </h2>
        <p className="text-text-secondary-dark text-lg mb-8 leading-relaxed">
          We work with a limited number of brands each month to ensure every client gets the attention they deserve. If your brand is doing ₹5L+/month and you want profitable growth — let&apos;s talk.
        </p>
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
          <Button href="/book-strategy-call" size="lg" variant="primary" className="relative">
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
