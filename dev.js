var express = require('express')
   , stylus = require('stylus')
    , nib = require('nib');

var app = express();

// stylus
app.use(stylus.middleware({
    src: __dirname + '/htdocs/src/styl',
    dest: __dirname + '/htdocs/css/',
    compile: function compile(src, path) {
        return stylus(src)
            .set('filename', path)
            .set('compress', true)
            .use(nib())
            .import('nib');
    }
}));

// set static file dir
app.use('/htdocs/css', express.static(__dirname + '/htdocs/css'));
app.use(express.static('htdocs'));

var port = 3000;
app.listen(port,function(){
    console.log('http://localhost:3000でサーバーが起動しました')
});