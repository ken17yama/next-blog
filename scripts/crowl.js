const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://ken17yama.github.io/next-blog/', {
	filepath: './out/sitemap.xml',
	stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
	// sitemaps created
});

// start the crawler
generator.start();
