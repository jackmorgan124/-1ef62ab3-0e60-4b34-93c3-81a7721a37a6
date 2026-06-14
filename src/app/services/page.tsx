import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import ServicesAlternating from '@/components/blocks/services-alternating';
import TrustBadges from '@/components/blocks/trust-badges';
import CtaBanner from '@/components/blocks/cta-banner';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Full-service landscaping tailored to your outdoor vision — paving, turf, decking, retaining walls, garden design, and irrigation across South-West Sydney.',
};

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/gallery', label: 'Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ServicesAlternating
        items={[
          { image: '/images/service-paving.jpg', title: 'Paving', imageAlt: 'Professional paving installation in South-West Sydney', description: 'From driveways to outdoor entertaining areas, our paving services deliver clean, durable finishes in a range of materials and styles to suit your home.' },
          { image: '/images/service-turf.jpg', title: 'Turf Installation', imageAlt: 'Lush turf installation by Harris Landscaping', description: 'We supply and lay premium turf varieties suited to South-West Sydney conditions, ensuring even coverage, proper drainage, and long-lasting lushness.' },
          { image: '/images/service-decking.jpg', title: 'Decking', imageAlt: 'Custom decking construction in South-West Sydney', description: "Custom-designed timber and composite decks built to complement your home's architecture and handle the demands of daily outdoor living." },
          { image: '/images/service-retaining.jpg', title: 'Retaining Walls', imageAlt: 'Retaining wall construction by Harris Landscaping & Gardens', description: "Engineered for stability and finished for style, our retaining walls solve erosion and level-change challenges while enhancing your garden's appearance." },
          { image: '/images/service-garden.jpg', title: 'Garden Design & Planting', imageAlt: 'Garden design and planting in Campbelltown', description: 'Our tailored garden design service combines creative planting schemes with practical layouts to create spaces that are beautiful and easy to maintain.' },
          { image: '/images/service-irrigation.jpg', title: 'Irrigation & Garden Maintenance', imageAlt: 'Irrigation system installation by Harris Landscaping', description: 'We install smart irrigation systems for efficient watering and offer ongoing maintenance programs to keep your outdoor space looking its best year-round.' },
        ]}
        heading="Landscaping Services Tailored to Your Outdoor Vision"
      />
      <TrustBadges
        items={[
          { icon: '/icons/badge-experience.svg', label: '15+ Years Experience' },
          { icon: '/icons/badge-insured.svg', label: 'Fully Insured' },
          { icon: '/icons/badge-projects.svg', label: '500+ Projects Completed' },
          { icon: '/icons/badge-rating.svg', label: '5-Star Google Rating' },
          { icon: '/icons/badge-quote.svg', label: 'Free Obligation-Free Quotes' },
          { icon: '/icons/badge-local.svg', label: 'Local South-West Sydney Team' },
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Get Started on Your Outdoor Project?"
        subheading="Contact Harris Landscaping & Gardens today for an obligation-free quote. We'll provide clear pricing and a realistic timeline tailored to your needs."
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens is South-West Sydney's trusted full-service landscaping specialist, delivering premium paving, turf, decking, retaining walls, and garden design with 15-plus years of proven experience."
        email="info@harrislandscaping.com.au"
        phone="02 XXXX XXXX"
        columns={[
          {
            links: [
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#turf-installation', label: 'Turf Installation' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#garden-design', label: 'Garden Design' },
              { href: '/services#irrigation', label: 'Irrigation & Maintenance' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/gallery', label: 'Project Gallery' },
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/contact', label: 'Contact' },
            ],
            heading: 'Company',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
              { href: '/service-areas/south-west-sydney', label: 'South-West Sydney' },
            ],
            heading: 'Service Areas',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
