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
      <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600">
              <Icon className="w-6 h-6 text-white" aria-hidden="true" />
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
  <section className="relative py-16 bg-white sm:py-24 lg:py-32" {...props}>
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider uppercase text-cyan-600">
        Deploy faster
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Everything you need to deploy your app
      </p>
      <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
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
