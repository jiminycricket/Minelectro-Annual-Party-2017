var fs = require('fs');
var index = fs.readFileSync('./dist/index.html', "utf8");
var writeFile = require('write');

insertHtml = index.replace("// window.votes = '{{{ votes }}}';", "window.votes = '{{{ votes }}}';");

writeFile('./dist/index.html', insertHtml, function(err) {
  if (err) console.log(err);
});
