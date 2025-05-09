import { AnimatedLink } from "@/components/ui/animated-link";

export default function ContactSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-4">
            <p className="md:text-lg">
              For more details about our services, projects, and the exciting
              work we&apos;re involved in, don&apos;t hesitate to reach out.
              Whether you have inquiries about collaborations, partnerships, or
              any other aspects of our work, we&apos;re here to help and would
              love to connect with you. Get in touch to learn more about the
              possibilities and let&apos;s explore how we can work together.
            </p>
            <AnimatedLink href="mailto:someone@example.com?subject=Let%27s%20Connect&body=Hey%2C%20I%20loved%20your%20work%20and%20wanted%20to%20say%20hi.">
              <span className="font-medium">Send Message via Email</span>
            </AnimatedLink>
          </div>

          <div className="h-px w-full bg-gray-200" />

          <div className="flex flex-col gap-4">
            <p className="md:text-lg">
              Want to reach out? If you&apos;re exploring job opportunities or
              collaborations, drop us a line and let&apos;s start a
              conversation.
            </p>
            <AnimatedLink href="mailto:someone@example.com?subject=Let%27s%20Connect&body=Hey%2C%20I%20loved%20your%20work%20and%20wanted%20to%20say%20hi.">
              <span className="font-medium">Send CV via Email</span>
            </AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
