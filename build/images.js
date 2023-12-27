const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const { copyGifs, copySvgs, copyWebps, mkdir } = require('./copy');

/**
 * Any source file residing in the resources directory which is used to
 * generate high and low res images for the site.
 * @param {string} absolutePath
 * @returns a boolean value
 */
const isResource = ({ internal, absolutePath }) => {
  const { type } = internal;
  return type === 'File' && absolutePath.indexOf('/resources/source/') >= 0;
};

const toDestinationPath = (destinationPath, sourcePath) => {
  return path.join(destinationPath, path.basename(sourcePath));
};

/**
 * Uses sharp to create an image of specific dimensions, fit, position and kernel
 * and save to disk.
 * @param {string} absolutePath
 * @param {string} destinationPath
 * @param {number} quality
 * @param {number} width
 * @param {number} height
 * @param {any} fit
 * @param {any} position
 * @param {object} reporter
 */
const processImage = (
  absolutePath,
  destinationPath,
  quality,
  width,
  height,
  fit,
  position,
  reporter,
) => {
  sharp(absolutePath)
    .jpeg({ quality })
    .png({ quality })
    .webp({ quality })
    .resize({
      width,
      height,
      fit,
      position,
      kernel: sharp.kernel.nearest,
    })
    .toFile(destinationPath, (err) => {
      const message = `image [optimize]: ${absolutePath} -> ${destinationPath}`;
      if (err) {
        reporter.error(`${message}\n${err}`);
      } else {
        reporter.verbose(message);
      }
    });
};

const processHighRes = (sourcePath, reporter) => {
  const destPath = 'src/images/covers';
  const quality = 100;
  const destinationPath = toDestinationPath(destPath, sourcePath);
  const width = 3840;
  const height = 2160;
  const fit = sharp.fit.cover;
  const position = sharp.strategy.attention;

  reporter.verbose(`image [high res]: ${path.basename(sourcePath)}`);
  mkdir(destPath);
  processImage(
    sourcePath,
    destinationPath,
    quality,
    width,
    height,
    fit,
    position,
    reporter,
  );
};

const processLowRes = (width, height, imageCategory, sourcePath, reporter) => {
  mkdir(`src/images/social-media/${imageCategory}`);
  const quality = 80;
  const destinationPath = toDestinationPath(
    `src/images/social-media/${imageCategory}`,
    sourcePath,
  );
  const fit = sharp.fit.cover;
  const position = sharp.strategy.attention;

  reporter.verbose(`image [low res]: ${path.basename(sourcePath)}`);
  processImage(
    sourcePath,
    destinationPath,
    quality,
    width,
    height,
    fit,
    position,
    reporter,
  );
};

exports.process = (node, reporter) => {
  const { absolutePath } = node;
  if (isResource(node)) {
    processHighRes(absolutePath, reporter);
    processLowRes(1200, 630, 'facebook', absolutePath, reporter);
    processLowRes(1500, 500, 'twitter', absolutePath, reporter);
    processLowRes(1980, 1020, '', absolutePath, reporter);
    reporter.success(`image [processed]: ${absolutePath}`);
  }
};

exports.bulk = () => {
  const reporter = {
    error: (message) => console.error(message),
    verbose: (message) => console.log(message),
    success: (message) => console.log(message),
  };
  const sourcePath = path.join(__dirname, '../resources/source');
  const filenames = fs.readdirSync(sourcePath);
  filenames.map((filename) =>
    this.process(
      {
        absolutePath: path.join(__dirname, '../resources/source', filename),
        internal: {
          type: 'File',
        },
      },
      reporter,
    ),
  );

  copyGifs();
  copySvgs();
  copyWebps();
};
