var Base64 = require('base64');


// Define the string
const string = 'Hello World!';

// Encode the String
const encodedString = Base64.encode(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
const decodedString = Base64.decode(encodedString);
console.log(decodedString); // Outputs: "Hello World!"