var fs = require("fs");

buff = fs.readFileSync(process.argv[2]);
bstr = buff.toString();

console.log(bstr.split("\n").length-1);