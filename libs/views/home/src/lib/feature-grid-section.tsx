import { DivProps } from '@waweb/model';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { HomeFeature } from '../types/HomeFeature';
import iconsByName, { IconName } from './icons-by-name';

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
  const Icon = iconsByName[icon];
  if (!Icon) {
    throw new Error(
      `Invalid icon name (${icon}) provided to features-grid-section`
    );
  }
  return (
    <div className="pt-6" {...props}>
      <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="mt-5 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export interface FeatureGridSectionProps extends DivProps {
  features: HomeFeature[];
}
const FeatureGridSection = ({
  features,
  ...props
}: FeatureGridSectionProps) => (
  <section className="relative bg-white py-16 sm:py-24 lg:py-32" {...props}>
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-base font-semibold uppercase tracking-wider text-cyan-600">
        Deploy faster
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Everything you need to deploy your app
      </p>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </p>
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

export default FeatureGridSection;
