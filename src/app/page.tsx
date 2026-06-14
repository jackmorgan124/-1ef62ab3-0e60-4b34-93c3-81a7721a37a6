import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import HeroSplit from '@/components/blocks/hero-split';
import ServicesGrid from '@/components/blocks/services-grid';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import ReviewsCarousel from '@/components/blocks/reviews-carousel';
import FooterColumns from '@/components/blocks/footer-columns';

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'From concept to completion, Harris Landscaping & Gardens delivers stunning, custom outdoor spaces built to last. Serving Campbelltown, Camden, Narellan, Picton, and beyond.',
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Premium Outdoor Transformations Across South-West Sydney"
        imageAlt="Premium landscaping transformation by Harris Landscaping & Gardens in South-West Sydney"
        trustBadge="Trusted by 500+ South-West Sydney homeowners"
        subheadline="From concept to completion, Harris Landscaping & Gardens delivers stunning, custom outdoor spaces built to last. Serving Campbelltown, Camden, Narellan, Picton, and beyond."
      />
      <ServicesGrid
        items={[
          'Paving — Durable, beautifully finished paving for driveways, paths, and entertaining areas',
          'Turf Installation — Lush, expertly laid turf that thrives in South-West Sydney\'s climate',
          'Decking — Custom timber and composite decks designed for everyday living',
          'Retaining Walls — Structurally sound, attractive retaining walls for any slope or garden',
          'Garden Design — Tailored planting and layout plans that bring your outdoor vision to life',
          'Irrigation & Maintenance — Smart irrigation systems and ongoing care to keep your garden thriving',
        ]}
        heading="Full-Service Landscaping, One Reliable Team"
        subheading="Whether you're building new or transforming an existing outdoor space, we offer everything you need under one roof — delivered with 15-plus years of hands-on expertise."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Backyard Transformation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Paving & Turf Installation — Narellan', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall & Garden Design — Camden', before: '/images/before-3.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our portfolio of completed landscaping projects across South-West Sydney — from dramatic before-and-after transformations to stunning new-build outdoor spaces."
      />
      <ReviewsCarousel
        items={[
          { name: 'Sarah M.', rating: '5', review: 'Harris Landscaping completely transformed our backyard. Professional, on time, and the results are stunning. Highly recommend!', location: 'Campbelltown' },
          { name: 'James T.', rating: '5', review: 'From the quote to the final clean-up, the whole experience was seamless. Our new deck and paving look incredible.', location: 'Narellan' },
          { name: 'Melissa R.', rating: '5', review: 'We had a tricky sloped block and Harris built us a beautiful retaining wall and garden. Couldn\'t be happier with the outcome.', location: 'Camden' },
        ]}
        heading="What Our Clients Are Saying"
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
