import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ContactForm from "@/components/blocks/contact-form";
import ContactMap from "@/components/blocks/contact-map";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Contact Us | Harris Landscaping & Gardens — Get a Free Quote in South-West Sydney",
  description:
    "Ready to transform your outdoor space? Contact Harris Landscaping & Gardens today for an obligation-free quote. Serving Campbelltown, Camden, Narellan, Picton, and South-West Sydney.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/gallery", label: "Gallery" },
          { href: "/service-areas", label: "Service Areas" },
          { href: "/contact", label: "Contact" },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ContactForm
        formCta="Send My Quote Request"
        heading="Let's Bring Your Outdoor Vision to Life"
        subheading="Ready to transform your outdoor space? Get in touch with our team today for an obligation-free quote. We'll provide clear pricing and a realistic timeline tailored to your project."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours={[
          { day: "Monday – Friday", time: "6:30am – 4:30pm" },
          { day: "Saturday", time: "By Appointment" },
          { day: "Sunday", time: "Closed" },
        ]}
        phone="02 XXXX XXXX"
        address="Campbelltown, NSW 2560"
        heading="Find Us in Campbelltown"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.0!2d150.8131!3d-34.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12e3b1a1a1a1a1%3A0x1!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1000000000000"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens is South-West Sydney's trusted full-service landscaping specialist, delivering premium paving, turf, decking, retaining walls, and garden design with 15-plus years of proven experience."
        email="info@harrislandscaping.com.au"
        phone="02 XXXX XXXX"
        columns={[
          {
            links: [
              { href: "/services#paving", label: "Paving" },
              { href: "/services#turf-installation", label: "Turf Installation" },
              { href: "/services#decking", label: "Decking" },
              { href: "/services#retaining-walls", label: "Retaining Walls" },
              { href: "/services#garden-design", label: "Garden Design" },
              { href: "/services#irrigation", label: "Irrigation & Maintenance" },
            ],
            heading: "Services",
          },
          {
            links: [
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Project Gallery" },
              { href: "/service-areas", label: "Service Areas" },
              { href: "/contact", label: "Contact" },
            ],
            heading: "Company",
          },
          {
            links: [
              { href: "/service-areas/campbelltown", label: "Campbelltown" },
              { href: "/service-areas/camden", label: "Camden" },
              { href: "/service-areas/narellan", label: "Narellan" },
              { href: "/service-areas/picton", label: "Picton" },
              { href: "/service-areas/macarthur", label: "Macarthur Region" },
              { href: "/service-areas/south-west-sydney", label: "South-West Sydney" },
            ],
            heading: "Service Areas",
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
