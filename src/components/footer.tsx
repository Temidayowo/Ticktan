import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { getSiteSettings } from "@/lib/data/settings";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about#team", label: "Team" },
  { href: "/blog", label: "Blog" },
];

const Footer = async () => {
  const year = new Date().getFullYear();
  const settings = await getSiteSettings();

  const socialLinks = [
    { href: settings.twitterUrl, label: "X (Twitter)", icon: FaXTwitter },
    { href: settings.linkedinUrl, label: "LinkedIn", icon: FaLinkedinIn },
    { href: settings.instagramUrl, label: "Instagram", icon: FaInstagram },
    { href: settings.facebookUrl, label: "Facebook", icon: FaFacebookF },
  ].filter(
    (link): link is { href: string; label: string; icon: typeof FaXTwitter } =>
      Boolean(link.href)
  );

  return (
    <footer className="bg-navy">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 md:mx-16 md:py-20 lg:mx-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-sora text-2xl font-bold text-white">
              Ticktan
            </span>
            <p className="max-w-xs text-sm text-white/70">
              Design, construction and project management, delivered with
              precision, transparency and craftsmanship.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4 pt-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-coral hover:bg-coral"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <nav
              className="flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {companyLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-white/80 transition-colors hover:text-coral"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-3">
              {settings.contactAddress && (
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <FaLocationDot className="mt-0.5 size-4 shrink-0 text-coral" />
                  {settings.contactAddress}
                </li>
              )}
              {settings.contactEmail && (
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <FaEnvelope className="mt-0.5 size-4 shrink-0 text-coral" />
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="transition-colors hover:text-coral"
                  >
                    {settings.contactEmail}
                  </a>
                </li>
              )}
            </ul>
            <Link
              href="/get-a-quote"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-2xl bg-coral px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-coral/80"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {year} Ticktan Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
