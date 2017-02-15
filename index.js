var fs = require('fs');
var SitemapGenerator = require('sitemap-generator');
 
// create generator
var generator = new SitemapGenerator(''); // ENTER SITE URL HERE
 
// register event listeners
generator.on('done', function (sitemap) {
  console.log(sitemap); // => prints xml sitemap
  fs.writeFile('sitemap.xml', sitemap, function(err) {
  	if (err) { return console.log(err) }
 	console.log('Sitemap saved successfully');
  });
});
 
generator.on('fetch', function (status, url) {
 console.log(url);
 console.log(status);
});

// start the crawler
generator.start();
