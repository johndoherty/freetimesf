/*
    Generate files for static site:
    - Home
    - About
    - Survey
    - Data
*/

"use strict";

var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var markdown = require("markdown").markdown;
var pretty = require('pretty');
var Handlebars = require('handlebars');

var project = path.join(__dirname, "..");
var layouts = path.join(project, "layouts");
var sources = path.join(project, "src");
var docs = path.join(project, "docs");

var outputDir = path.join(project, "public");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Template
var primaryLayoutFile = path.join(layouts, "primary.hbs");
var primaryLayout = fs.readFileSync(primaryLayoutFile, 'utf8');
var primaryTemplate = Handlebars.compile(primaryLayout);

/* Shared Style */
var styleBase = "style.css";
fs.copyFileSync(path.join(sources, styleBase), path.join(outputDir, styleBase));

/* Home */
var indexBase = "index.html";
var indexFile = path.join(sources, indexBase);
var indexContentHTML = fs.readFileSync(indexFile, 'utf8');
var indexContext = {title: "Free Time SF", contents: indexContentHTML};
var indexHTML = pretty(primaryTemplate(indexContext));
fs.writeFileSync(path.join(outputDir, indexBase), indexHTML);

/* Survey */
var surveyBase = "survey.html";
var surveyStyleBase = "survey.css";
var surveyFile = path.join(sources, surveyBase);
var surveyContentHTML = fs.readFileSync(surveyFile, 'utf8');
var surveyContext = {
	title: "Survey - Free Time SF",
	contents: surveyContentHTML,
	stylesheet: [surveyStyleBase],
};

var surveyHTML = pretty(primaryTemplate(surveyContext));
fs.writeFileSync(path.join(outputDir, surveyBase), surveyHTML);
fs.copyFileSync(path.join(sources, surveyStyleBase), path.join(outputDir, surveyStyleBase));

/* About */
var aboutBase = "about.html";
var aboutFile = path.join(docs, "about.md");
var aboutMD = fs.readFileSync(aboutFile, 'utf8');
var aboutContentHTML = markdown.toHTML(aboutMD);
var aboutContext = {title: "About - Free Time SF", contents: aboutContentHTML};
var aboutHTML = pretty(primaryTemplate(aboutContext));
fs.writeFileSync(path.join(outputDir, aboutBase), aboutHTML);
