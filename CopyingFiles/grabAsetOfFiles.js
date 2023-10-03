const glob = require('glob');

glob('**/*.*', (err, files) => {
    if(err) {
        console.log(err);
    } else {
        for(const filename of files){
            console.log(filename);
        }
    }
}); //recursively grab all files




