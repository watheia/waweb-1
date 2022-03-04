import { Header, Text } from '@waweb/atoms';
import icons, { IconName } from '@waweb/icons';
import { DivProps } from '@waweb/model';
import model from '../fixtures/features.json';

type FeatureItem = {
  name: string;
  icon: IconName;
  description: string;
};

const FeatureItem = ({ model }: { model: FeatureItem }) => {
  const Icon = icons[model.icon];
  if (!Icon) {
    throw new Error(
      `Invalid icon name (${model.icon}) provided to features-grid-section`
    );
  }
  return (
    <div className="pt-6">
      <div className="flow-root px-6 pb-8 rounded-lg">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-4 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-teal-700">
              <Icon color="white" className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <Header element="h3" variant="header2">
            {model.name}
          </Header>
          <Text variant="body2" className="mt-5">
            {model.description}
          </Text>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = (props: DivProps) => (
  <section
    id="features"
    className="relative py-16 sm:py-24 lg:py-32"
    {...props}
  >
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <Header element="h2" variant="subtitle">
        {model.title}
      </Header>
      <Header element="p" variant="title">
        {model.subTitle}
      </Header>
      <Text variant="lead">{model.content}</Text>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {model.features.map((it) => (
            <FeatureItem key={it.name} model={it as FeatureItem} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
