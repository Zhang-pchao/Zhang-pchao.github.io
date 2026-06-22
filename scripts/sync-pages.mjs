import { cp, copyFile, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const rootAssets = resolve(root, "assets");
const distAssets = resolve(dist, "assets");

await copyFile(resolve(dist, "index.html"), resolve(dist, "404.html"));
await writeFile(resolve(dist, ".nojekyll"), "");

for (const file of await readdir(rootAssets)) {
  if (/^index-.*\.(css|js)$/.test(file)) {
    await rm(resolve(rootAssets, file));
  }
}

await mkdir(distAssets, { recursive: true });
await cp(rootAssets, distAssets, { recursive: true });
await cp(resolve(root, "papers"), resolve(dist, "papers"), { recursive: true });

await copyFile(resolve(dist, "index.html"), resolve(root, "index.html"));
await copyFile(resolve(dist, "404.html"), resolve(root, "404.html"));
await writeFile(resolve(root, ".nojekyll"), "");

for (const file of await readdir(distAssets)) {
  if (/^index-.*\.(css|js)$/.test(file)) {
    await copyFile(resolve(distAssets, file), resolve(rootAssets, file));
  }
}
