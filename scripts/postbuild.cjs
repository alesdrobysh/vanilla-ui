const fs = require("fs");
const path = require("path");
const assert = require("assert");

const dist = path.join(__dirname, "..", "dist");
const packages = fs.readdirSync(path.join(__dirname, "..", "packages"));

packages.forEach((packageName) => {
  console.log(`Copying ${packageName} dist...`);

  const packagePath = path.join(__dirname, "..", "packages", packageName);
  const packageDist = path.join(packagePath, "dist");
  if (fs.existsSync(packageDist)) {
    fs.mkdirSync(path.join(dist, packageName), { recursive: true });
    fs.readdirSync(packageDist).forEach((file) => {
      fs.copyFileSync(
        path.join(packageDist, file),
        path.join(dist, packageName, file),
      );
    });
  }

  console.log(`${packageName} copied!`);
});
