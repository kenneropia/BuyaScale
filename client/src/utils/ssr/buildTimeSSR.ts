import * as fs from "fs";
import { promisify } from "util";
import { postProcess } from "./postProcess";

export async function renderToString(): Promise<void> {
  type SSRTuple = [string, () => string];
  type SSRArray = Array<SSRTuple>;

  const ar: SSRArray = [];

  const getEntrypoints = require("../../../config/spa.config").getEntrypoints;

  for (const [key, value] of Object.entries(getEntrypoints())) {
    const ssrFileName = `${key}-SSR.txt`;
    const entryPointPath = (value as string).replace(/^\.\/src/, "../..").replace(/\.\w+$/, "");
    const { default: renderAsString } = await import(entryPointPath);
    !!renderAsString && ar.push([ssrFileName, renderAsString] as SSRTuple);
  }

  const writeFile = promisify(fs.writeFile);

  try {
    await Promise.all(ar.map(entry => {
      return writeFile('./dist/' + entry[0], entry[1]());
    }));
    await postProcess();
  } catch (e) {
    console.error(`Failed to create pre-built SSR file, exception: ${e}`);
    process.exit(1);
  }
}

renderToString().catch((e: Error) => {
  console.error(`SSR processing failed, error: ${e}`);
  process.exit(2);
});
