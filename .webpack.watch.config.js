var _ = require('underscore');
var config = require('./.webpack.config.js');

module.exports =  _.extend(config, {
    cache: true,
    watch: true,
    keepalive: true,
    devtool: 'source-map',
    plugins: [
        function () {
            this.plugin('watch-run', (watching, callback) => {
                console.log('webpack watch-run');
                callback();
            });
        }
    ]
});
