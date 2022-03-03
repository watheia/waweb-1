import { DivProps } from '@waweb/model';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { HomeFeature } from '../types/HomeFeature';
import icons, { IconName } from '@waweb/icons';
import { Text, Header } from '@waweb/atoms';

type FeatureItemProps = {
  name: string;
  icon: IconName;
  description:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};

const FeatureItem = ({
  name,
  description,
  icon,
  ...props
}: FeatureItemProps) => {
  const Icon = icons[icon];
  if (!Icon) {
    throw new Error(
      `Invalid icon name (${icon}) provided to features-grid-section`
    );
  }
  return (
    <div className="pt-6" {...props}>
      <div className="flow-root px-6 pb-8 rounded-lg">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-teal-700">
              <Icon className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <Header element="h3" variant="header2">
            {name}
          </Header>
          <Text variant="body2" className="mt-5">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};

export interface FeaturesSectionProps extends DivProps {
  features: HomeFeature[];
}
const FeaturesSection = ({ features, ...props }: FeaturesSectionProps) => (
  <section
    id="features"
    className="relative py-16 sm:py-24 lg:py-32"
    {...props}
  >
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <Header element="h2" variant="subtitle">
        Deploy faster
      </Header>
      <Header element="p" variant="title">
        Everything you need to deploy your app
      </Header>
      <Text variant="lead">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </Text>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureItem key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
