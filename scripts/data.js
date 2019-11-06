/*
    Generate aggregate JSON data from survey responses.
*/

var fs = require('fs');

if (process.argv.length < 3) {
	console.error("No data file provided");
	return;
}

var dataFile = process.argv[2];
var data = fs.readFileSync(dataFile, 'utf8');
console.log(data);