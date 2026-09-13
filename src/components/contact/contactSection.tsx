import { FaEnvelope, FaLocationDot, FaPhone, FaRegClock } from "react-icons/fa6";
import ContactForm from "./contactForm";
import { getSiteSettings } from "@/lib/data/settings";

const ContactSection = async () => {
  const settings = await getSiteSettings();

  const contactDetails = [
    settings.contactAddress && {
      icon: FaLocationDot,
      label: "Office",
      value: settings.contactAddress,
    },
    settings.contactEmail && {
      icon: FaEnvelope,
      label: "Email",
      value: settings.contactEmail,
      href: `mailto:${settings.contactEmail}`,
    },
    settings.contactPhone && {
      icon: FaPhone,
      label: "Phone",
      value: settings.contactPhone,
      href: `tel:${settings.contactPhone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: FaRegClock,
      label: "Hours",
      value: "Mon – Fri, 9am – 5pm",
    },
  ].filter(Boolean) as {
    icon: typeof FaLocationDot;
    label: string;
    value: string;
    href?: string;
  }[];

  return (
    <section className="bg-white">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-16">
          <div className="flex flex-col gap-8 md:col-span-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-coral">
                Get In Touch
              </p>
              <h2 className="mt-4 text-2xl font-extrabold text-navy md:text-3xl">
                We&apos;d love to hear from you
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Reach out with a project brief, a question, or just to say
                hello — we typically respond within one business day.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-navy transition-colors hover:text-coral md:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-navy md:text-base">
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 md:col-span-3 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
