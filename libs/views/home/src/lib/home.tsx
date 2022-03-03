import BlogSection from './blog-section';
import CtaSection from './cta-section';
import FeaturesSection from './features-section';
import AboutSection from './about-section';
import HeroSection from './hero-section';
import TestimonialSection from './testimonial-section';
import { DivProps, PostSummary } from '@waweb/model';

export interface HomeProps extends DivProps {
  posts: PostSummary[];
}

export default function Home({
  className = 'w-full h-full',
  posts
}: HomeProps) {
  return (
    <div className={className} data-testid="waweb.views/home">
      <HeroSection id="intro" />
      <AboutSection id="about" />
      <FeaturesSection id="features" />
      <TestimonialSection id="testimonial" />
      <BlogSection id="firehose" posts={posts} />
      <CtaSection id="cta" />
    </div>
  );
}
