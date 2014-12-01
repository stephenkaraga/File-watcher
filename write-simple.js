const fs = require('fs');
fs.writeFile('target.txt', "Text to be written", function(err) {
	if (err) {
		throw err;
	}
	console.log("File saved!");
});