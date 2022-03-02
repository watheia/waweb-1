import { HomeProps } from '../types/HomeProps';
import BlogSection from './blog-section';
import CtaSection from './cta-section';
import FeaturesSection from './features-section';
import AboutSection from './about-section';
import HeroSection from './hero-section';
import TestimonialSection from './testimonial-section';

export default function Home({
  className = 'w-full h-full',
  features,
  posts,
}: HomeProps) {
  return (
    <div className={className} data-testid="waweb.views/home">
      <HeroSection />
      <AboutSection />
      <FeaturesSection features={features} />
      <TestimonialSection />
      <BlogSection posts={posts} />
      <CtaSection />
    </div>
  );
}
