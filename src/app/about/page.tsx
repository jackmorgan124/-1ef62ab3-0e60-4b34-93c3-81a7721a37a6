import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import AboutSplit from '@/components/blocks/about-split';
import AboutValues from '@/components/blocks/about-values';
import StatsCounter from '@/components/blocks/stats-counter';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    "South-West Sydney's trusted landscaping specialists with 15-plus years of experience transforming outdoor spaces.",
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
      <AboutSplit
        body="Harris Landscaping & Gardens has been transforming outdoor spaces across South-West Sydney for over 15 years. Our fully insured, detail-obsessed team brings the same level of care and craftsmanship to every project — whether it's a backyard makeover in Campbelltown or a full new-build landscape in Narellan. We pride ourselves on clear communication, realistic timelines, and results that exceed expectations."
        image="/images/about-team.jpg"
        stats={[
          { label: 'Years Experience', value: '15+' },
          { label: 'Projects Completed', value: '500+' },
          { label: 'Fully Insured', value: '100%' },
        ]}
        heading="South-West Sydney's Trusted Landscaping Specialists"
        imageAlt="Harris Landscaping & Gardens team working on a South-West Sydney project"
      />
      <AboutValues
        items={[
          { title: 'Experience You Can See', description: 'With 15-plus years transforming gardens across South-West Sydney, we bring deep local knowledge and a proven portfolio to every project.' },
          { title: 'Clear Communication', description: "We provide detailed quotes, realistic timelines, and regular updates — so you're never left wondering what's happening with your project." },
          { title: 'Premium Quality, Every Time', description: 'We use only high-quality materials and time-tested techniques, ensuring every retaining wall, paved surface, and planted garden looks great for years to come.' },
        ]}
        heading="Why Homeowners Choose Harris"
        subheading="We combine premium materials, proven expertise, and genuine client care to deliver outdoor spaces that stand the test of time."
      />
      <StatsCounter
        items={[
          { label: 'Years of Experience', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
          { label: 'Star Google Rating', value: '5', suffix: '★' },
        ]}
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
