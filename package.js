Package.describe({
    name: 'jhohlfeld:lessflex',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'A less file containing declarations for flexbox layouts.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/jhohlfeld/meteor-lessflex',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.5');
    api.addFiles('lessflex.less', 'client');
});
