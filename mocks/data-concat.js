const jsonConcat = require('json-concat');

jsonConcat(
    {
        src: 'mocks/data',
        dest: 'mocks/data.json'
    },
    () => {
        console.log('data.json generated');
    }
);
