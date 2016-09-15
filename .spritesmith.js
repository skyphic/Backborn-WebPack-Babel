module.exports = [
    {
        src: 'htdocs/src/img/sprite/header/*.png',
        destImage: 'htdocs/src/img/sprite-header.png',
        destCSS: 'htdocs/src/styl/sprite/header.styl',
        imgPath: '../img/sprite-header.png',
        cssFormat: 'stylus',
        algorithm: 'top-down',
        cssOpts: {functions: false},
        cssVarMap: (sprite) => {
            sprite.name = `header_${sprite.name}`;
        },
    },
];
