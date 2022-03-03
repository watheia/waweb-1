import { Header, Text } from '@waweb/atoms';
import { DivProps, ImageModel } from '@waweb/model';
import Image from 'next/image';

export interface AboutModel {
  title: string;
  subTitle: string;
  lead: string;
  image: ImageModel;
}

export interface AboutSectionProps extends DivProps {
  model?: AboutModel;
}

const fixtures: AboutModel = {
  title: 'What is this?',
  subTitle: 'A capabilities test of the modern web',
  lead: `There is more to this site than meets the eye. Beyond serving as a
         sleek minimalist design system for our homepage, Watheia Labs is an
         open-source showcase of best practices on developing modern, real-time
         serverless web applications.`,
  image: {
    width: 1216,
    height: 880,
    uri: 'https://www.datocms-assets.com/63265/1646248817-1644448694-green-project-app-screenshot.jpg'
  }
};

const AboutSection = ({ model = fixtures, ...props }: AboutSectionProps) => (
  <section className="relative" {...props}>
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        <Header element="h2" variant="subtitle">
          {model.title}
        </Header>
        <Header element="p" variant="title">
          {model.subTitle}
        </Header>
        <Text variant="lead">{model.lead}</Text>
      </div>
      <div className="mt-12">
        <Image
          width={model.image.width}
          height={model.image.height}
          className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
          src={model.image.uri}
          alt=""
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
