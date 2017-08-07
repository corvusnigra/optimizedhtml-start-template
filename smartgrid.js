const smartgrid = require('smart-grid');

const settings = {
    debug: true,
    outputStyle: 'scss',
    columns: 12,
    offset: '32px',
    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    oldSizeStyle: false
};

smartgrid('./app/sass', settings);