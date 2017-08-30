var fs = require("fs");
var path = require("path");

var ext = "."+process.argv[3];

fs.readdir(process.argv[2],function (err,files) {
    ff = filterFiles(files,ext);
    for (var i = 0; i < ff.length; i++) {
        console.log(ff[i]);
    }
});

function filterFiles(files,ext) {
    result = [];
    for (var i = 0; i < files.length; i++) {
        if(path.extname(files[i]) == ext) {
            result.push(files[i]);
        }
    }
    return result;
}
