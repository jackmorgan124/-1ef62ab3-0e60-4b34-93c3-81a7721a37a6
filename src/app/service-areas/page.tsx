import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ServiceAreaGrid from "@/components/blocks/service-area-grid";
import ImageTextSplit from "@/components/blocks/image-text-split";
import CtaBanner from "@/components/blocks/cta-banner";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Service Areas | Harris Landscaping & Gardens — Serving South-West Sydney",
  description:
    "Harris Landscaping & Gardens proudly serves Campbelltown, Camden, Narellan, Picton, Macarthur, and the wider South-West Sydney region with premium landscaping services.",
};

export default function ServiceAreasPage() {
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
      <ServiceAreaGrid
        areas={[
          { href: "/service-areas/campbelltown", name: "Campbelltown" },
          { href: "/service-areas/camden", name: "Camden" },
          { href: "/service-areas/narellan", name: "Narellan" },
          { href: "/service-areas/picton", name: "Picton" },
          { href: "/service-areas/macarthur", name: "Macarthur Region" },
          { href: "/service-areas/south-west-sydney", name: "South-West Sydney" },
        ]}
        heading="Proudly Serving South-West Sydney"
        subheading="Harris Landscaping & Gardens delivers premium outdoor transformations across the South-West Sydney region. Select your suburb below to learn more about our local services."
      />
      <ImageTextSplit
        cta="Get a Free Quote in Your Area"
        body="We've been working across South-West Sydney for over 15 years, which means we understand local soil conditions, council requirements, and the outdoor living styles that suit the region. Whether you're in a new estate in Narellan or an established property in Picton, our team brings the same premium-quality service to every suburb we cover. We're on your doorstep and ready to help."
        image="/images/service-areas-map.jpg"
        ctaHref="/contact"
        heading="Local Expertise, Premium Results — Wherever You Are in South-West Sydney"
        imageAlt="Harris Landscaping & Gardens serving South-West Sydney suburbs"
        imagePosition="right"
      />
      <CtaBanner
        cta="Get a Free Quote in Your Area"
        ctaHref="/contact"
        heading="Servicing Your Suburb — Ready When You Are"
        subheading="Get in touch with Harris Landscaping & Gardens for an obligation-free quote tailored to your local area and project needs."
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
