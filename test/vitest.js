const fs = require("fs");
const path = require("path");
const { transform } = require("cjstoesm");

const autoloadPath = "node_modules/@fastify/autoload";
const indexJs = "index.js";
const indexTs = "index.ts";

main();

function main() {
  const [state] = process.argv.slice(2);
  changePackageType(state === "on");
  convertToESM();
}

function changePackageType(isOn = false) {
  const packagePath = path.join(autoloadPath, "package.json");
  const packageFile = fs.readFileSync(packagePath, "utf8");
  const updatedPackageFile = packageFile.replace(
    `"main": "${isOn ? indexJs : indexTs}"`,
    `"main": "${isOn ? indexTs : indexJs}"`
  );
  fs.writeFileSync(packagePath, updatedPackageFile);
}

async function convertToESM() {
  const indexTsPath = path.join(autoloadPath, indexTs);
  if (fs.existsSync(indexTsPath)) {
    return;
  }
  const result = await transform({
    input: path.join(autoloadPath, indexJs),
    write: false,
  });
  for (const { fileName, text } of result.files) {
    fs.writeFileSync(indexTsPath, text);
  }
}
