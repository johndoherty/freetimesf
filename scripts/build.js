var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var layouts  = require('metalsmith-layouts');

var dev = (process.argv.length == 3) && (process.argv[2] == "dev");

var metalsmithConfig = Metalsmith(__dirname)
    .metadata({
        title: "Free Time SF",
        description: "Free Time SF connects volunteers with non-profits in San Francisco",
        url: "https://www.freetimesf.org",
        dev: dev,
    })
    .source('../src')
    .destination('../public')
    .use(markdown())
    .use(layouts({directory: '../layouts'}))

if (dev) {
    var serve = require('metalsmith-serve');
    var watch = require('metalsmith-watch');

    metalsmithConfig
        .use(watch({
            paths: {"${source}/**/*": "**/*", "../layouts/**/*": "**/*"},
            livereload: true}))
        .use(serve());
}

metalsmithConfig.build(function (err) { if(err) console.log(err) })
