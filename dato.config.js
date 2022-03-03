// dato.config.js
const contentDir = 'libs/datocms/src/data';

module.exports = (dato, root, i18n) => {
  // Export blog record
  root.createDataFile(`${contentDir}/blog.json`, 'json', dato.blog.toMap());

  // Export all "Post" records...
  root.directory(`${contentDir}/posts`, (destDir) => {
    dato.posts.forEach((entry) => {
      destDir.createDataFile(`${entry.slug}.json`, 'json', entry.toMap());
    });
  });
};
