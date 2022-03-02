import { Text, Header } from '@waweb/atoms';
const appScreenshot =
  'https://www.datocms-assets.com/62247/1644448694-green-project-app-screenshot.jpg';

const AboutSection = () => (
  <section id="about" className="relative pt-16 sm:pt-24 lg:pt-32">
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        <Header element="h2" variant="subtitle">
          What is this?
        </Header>
        <Header element="p" variant="title">
          A capabilities test of the modern web
        </Header>
        <Text variant="lead">
          There is more to this site than meets the eye. Beyond serving as a
          sleek minimalist design system for our homepage, Watheia Labs is an
          open-source showcase of best practices on developing modern, real-time
          serverless web applications. For security reasons, we require an
          account to enable real-time multi-tenant mode. This process intends to
          be as seamless as possible without sacrificing security. Please enjoy
          your stay.
        </Text>
      </div>
      <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
        <img
          className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
          src={appScreenshot}
          alt=""
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
