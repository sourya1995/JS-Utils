const glob = require('glob');

const srcDir = process.argv[2];
glob(`${srcDir}/**/*.*`, {ignore: '*.bck'}, (err, files) => {
    if(err){
        console.log(err);
    } else {
        for(const name of files) {
            console.log(name);
        }
    }
});