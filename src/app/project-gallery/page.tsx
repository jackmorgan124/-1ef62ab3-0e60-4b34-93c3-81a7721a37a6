import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import Gallery from '@/components/blocks/gallery';
import CtaSplit from '@/components/blocks/cta-split';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Project Gallery | Harris Landscaping & Gardens',
  description:
    'Browse our portfolio of completed landscaping projects across South-West Sydney — from dramatic before-and-after transformations to stunning new-build outdoor spaces.',
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
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Backyard Makeover — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Paving & Turf — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall & Planting — Camden', before: '/images/before-3.jpg' },
          { after: '/images/after-4.jpg', label: 'Decking & Garden Design — Picton', before: '/images/before-4.jpg' },
        ]}
        heading="Before & After Transformations"
        subheading="See the dramatic difference our team makes — from overgrown or bare blocks to stunning, finished outdoor spaces across South-West Sydney."
      />
      <Gallery
        images={[
          { alt: 'Completed paving project in Campbelltown', src: '/images/gallery-1.jpg' },
          { alt: 'Lush turf installation in Narellan', src: '/images/gallery-2.jpg' },
          { alt: 'Custom timber deck in Camden', src: '/images/gallery-3.jpg' },
          { alt: 'Retaining wall construction in Picton', src: '/images/gallery-4.jpg' },
          { alt: 'Garden design and planting in South-West Sydney', src: '/images/gallery-5.jpg' },
          { alt: 'Irrigation system installation by Harris Landscaping', src: '/images/gallery-6.jpg' },
          { alt: 'Outdoor entertaining area paving in Macarthur', src: '/images/gallery-7.jpg' },
          { alt: 'Composite decking installation in Campbelltown', src: '/images/gallery-8.jpg' },
          { alt: 'Full backyard transformation in Narellan', src: '/images/gallery-9.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our portfolio of completed landscaping projects across South-West Sydney — from dramatic before-and-after transformations to stunning new-build outdoor spaces in Campbelltown, Camden, Narellan, and Picton."
      />
      <CtaSplit
        cta="Start Your Transformation"
        image="/images/cta-outdoor.jpg"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        imageAlt="Beautiful landscaped outdoor space completed by Harris Landscaping & Gardens"
        subheading="Get in touch with the Harris Landscaping team today for an obligation-free quote. Clear pricing, realistic timelines, and premium results guaranteed."
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
