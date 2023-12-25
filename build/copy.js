const fs = require('fs');
const path = require('path');

const mkdir = (path) => {
  fs.existsSync(path) || fs.mkdirSync(path, { recursive: true });
};

const getSrc = (dir) => {
  return path.join(__dirname, `../src/images/`, dir);
};

const getDest = (dir) => {
  return path.join(__dirname, `../public/static/`, dir);
};

const copy = (dirname) => {
  const srcPath = getSrc(dirname);
  const destPath = getDest(dirname);
  mkdir(destPath);
  fs.readdir(srcPath, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.copyFileSync(path.join(srcPath, file), path.join(destPath, file));
    });
  });
};

const copySvgs = () => copy('svgs');

const copyGifs = () => copy('gifs');

const copyWebps = () => copy('webps');

module.exports = {
  copySvgs,
  copyGifs,
  copyWebps,
  mkdir,
};
