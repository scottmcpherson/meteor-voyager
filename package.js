Package.describe({
  name: 'scottmcpherson:voyager',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Synchronous style scraping with jQuery like selectors',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/scottmcpherson/meteor-voyager.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "cheerio": "0.19.0",
  "request": "2.55.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('http');
  api.use('underscore');

  api.addFiles('constants.js', 'server');
  api.addFiles('voyager.js', 'server');

  api.export('HTTV', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('scottmcpherson:voyager');
  api.addFiles('voyager-tests.js');
});
