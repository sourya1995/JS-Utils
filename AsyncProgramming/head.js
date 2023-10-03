const glob = require ("glob-promise");
const { createReadStream } = require("fs");

const main = async (srcDir, linesToPrint) => {
  const files = await glob(`${srcDir}/**/*.*`);
  for (const filename of files) {
    const lines = await readFirstLines(filename, linesToPrint);
    console.log(`First ${linesToPrint} lines of ${filename}:`);
    console.log(lines.join('\n'));
  }
};

const readFirstLines = async (filename, linesToRead) => {
  return new Promise((resolve, reject) => {
    const lines = [];
    let lineCount = 0;
    const readStream = createReadStream(filename, { encoding: "utf-8" });
    readStream.on("data", (data) => {
      const chunkLines = data.split('\n');
      for (const line of chunkLines) {
        if (lineCount >= linesToRead) {
          readStream.close();
          resolve(lines);
          return;
        }
        lines.push(line);
        lineCount++;
      }
    });
    readStream.on("end", () => {
      resolve(lines);
    });
    readStream.on("error", (err) => {
      reject(err);
    });
  });
};

const srcDir = process.argv[3];
const linesToPrint = parseInt(process.argv[2], 10) || 5;
main(srcDir, linesToPrint);
