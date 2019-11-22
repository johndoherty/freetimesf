# Free Time SF

This is the code for Free Time SF, a site designed to link up volunteers and organizations in San Francisco. We collect information about interested volunteers through a survey. We aggregate that data and make it public to help guide organizers. Then we send volunteers a weekly newsletter with events and organizations that best match their preferences.

The code is made public to inspire trust and to serve as a starting point for anyone else trying to do something similar in other cities.

## Website

The website is a pretty simple static site that is built using metalsmith. To view it locally you will need npm installed. To build the site, clone the repo run:

```
npm install
npm run build
```

The output will be in the `public` directory.

If you would like to actively work on the site you can use:

```
npm run dev
```

This will serve the `public` and trigger a rebuild everytime a file has changed.
The build script is `scripts/build.js`.

## Email

TODO: There will eventually be a script which takes the form responses as a CSV, and a set of upcoming events, and will generate a personalized email for each volunteer.

## Data

TODO: There will eventually be a script which takes the form responses as a CSV, and converts them to a JSON format which can be viewed on the web by organizers.
