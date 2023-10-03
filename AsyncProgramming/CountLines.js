import fs from 'fs-extra-promise';

const filename = process.argv[2];

fs.readFileAsync(filename, { encoding: 'utf8' })
.then(data => {
    const length = data.split('\n').length - 1;
})
.catch(err => {
    console.error(err.message)
});

/*
* UTF-8 specifies how characters are stored as bytes
*/