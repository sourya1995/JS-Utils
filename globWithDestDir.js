const glob = require('glob');

const [srcDir, destDir] = process.argv.slice(2);

glob(`${srcDir}/**/*.*`, { ignore: '*.bck' }, (err, files) => {
    if (err) {
        console.error(err);
    }

    else {
        for (const srcName of files) {
            const dstName = srcName.replace(srcDir, dstDir);
            console.log(srcName, dstName);
        }
    }
});