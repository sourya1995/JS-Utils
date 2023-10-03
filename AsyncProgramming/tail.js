import { glob } from "glob-promise";
import { createReadStream, statSync } from "fs";

const main = async (srcDir, linesToPrint) => {
  const files = await glob(`${srcDir}/**/*.*`);
  for (const filename of files) {
    const lines = await readLastLines(filename, linesToPrint);
    console.log(`Last ${linesToPrint} lines of ${filename}:`);
    console.log(lines.join('\n'));
  }
};

const readLastLines = async (filename, linesToRead) => {
  const stats = statSync(filename);
  const fileSize = stats.size;

  return new Promise((resolve, reject) => {
    const lines = [];
    let buffer = Buffer.alloc(0);
    let bytesRead = 0;
    const readStream = createReadStream(filename, { encoding: "utf-8" });

    readStream.on("data", (data) => {
      buffer = Buffer.concat([buffer, Buffer.from(data)]);
      bytesRead += data.length;
      while (bytesRead > fileSize) {
        buffer = buffer.slice(1);
        bytesRead--;
      }
    });

    readStream.on("end", () => {
      const chunkLines = buffer.toString("utf-8").split('\n');
      for (const line of chunkLines) {
        if (lines.length >= linesToRead) {
          break;
        }
        lines.push(line);
      }
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
