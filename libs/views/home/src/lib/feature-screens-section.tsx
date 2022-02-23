const appScreenshot =
  'https://www.datocms-assets.com/62247/1644448694-green-project-app-screenshot.jpg';

const FeatureScreenSection = () => (
  <section className="relative pt-16 bg-gray-50 sm:pt-24 lg:pt-32">
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        <h2 className="text-base font-semibold tracking-wider uppercase text-cyan-600">
          Serverless
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          No server? No problem.
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Deploy directly to the edge using JAMStack and a headless CMS. Enjoy
          all the benefits of a modern micro frontend architecture using
          interoperable components. Perform authentication and authorization
          logic directly on the edge with stateless sessions using signed and
          encrypted cookies to store data.
        </p>
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

export default FeatureScreenSection;
