const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const { copyGifs, copySvgs, copyWebps } = require('./copy');
const { toHeroImageComponent, kebabToTitleCase } = require('./helpers');

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

exports.getComponentName = (text) => {
  return toHeroImageComponent(text);
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
  const quality = 100;
  const destinationPath = toDestinationPath(
    `src/components/Images`,
    sourcePath,
  );
  const width = 1920;
  const height = 1080;
  const fit = sharp.fit.cover;
  const position = sharp.strategy.attention;

  reporter.verbose(`image [high res]: ${path.basename(sourcePath)}`);
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

const processLowRes = (sourcePath, reporter) => {
  const quality = 80;
  const destinationPath = toDestinationPath(
    `src/images/social-media`,
    sourcePath,
  );
  const width = 1440;
  const height = 810;
  const fit = sharp.fit.contain;
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

const generateComponent = (sourcePath, reporter) => {
  const template = path.join(__dirname, 'image.jsx.template');
  fs.readFile(template, (err, data) => {
    if (err) {
      reporter.error(`Could not generate component: ${sourcePath}\n${err}`);
    } else {
      const componentsDest = path.join(__dirname, `../src/components/images/`);
      const filename = path.basename(sourcePath);
      const destFilename = filename.replace(path.extname(filename), `.js`);
      const destinationPath = path.join(componentsDest, destFilename);

      const component = data
        .toString()
        .replace(/%COMPONENT_NAME%/g, kebabToTitleCase(filename).split(".")[0])
        .replace(/%IMAGE_FILENAME%/g, path.basename(sourcePath))
        .replace(/%IMAGE_WIDTH%/, 1920);

      fs.writeFile(destinationPath, component, () => {
        reporter.verbose(`image [component]: ${filename}`);
      });
    }
  });
};

const getComponentsToBeIndexed = (sourcePath) => {
  const files = fs.readdirSync(sourcePath);

  let content = '';
  files.forEach((file) => {
    if (file.indexOf(`.keep`) > -1) return;

    const filename = path.basename(file).replace(path.extname(file), '');
    const componentName = kebabToTitleCase(filename);
    content += `\nComponent['${componentName}'] = (props) => (\n  require('./${filename}').default(props)\n);\n`;
  });
  return content;
};

exports.generateComponentIndex = (reporter) => {
  const sourcePath = path.join(__dirname, '../src/components/Images');
  const filename = 'index.js';
  const destinationRelativePath = '../src/components/Images';
  const destinationPath = path.join(
    __dirname,
    destinationRelativePath,
    filename,
  );
  const indexDb = getComponentsToBeIndexed(sourcePath);
  const template = path.join(__dirname, 'image.index.template');
  fs.readFile(template, (err, data) => {
    if (err) {
      reporter.error(`could not generate component index: ${err}`);
    } else {
      const component = data.toString().replace(/%INDEX%/, indexDb);
      fs.writeFile(destinationPath, component, () => {
        reporter.verbose(`image [index db]: ${path.basename(destinationPath)}`);
      });
    }
  });
};

exports.process = (node, reporter) => {
  const { absolutePath } = node;
  if (isResource(node)) {
    processHighRes(absolutePath, reporter);
    processLowRes(absolutePath, reporter);
    generateComponent(absolutePath, reporter);
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

  this.generateComponentIndex(reporter);
  copyGifs();
  copySvgs();
  copyWebps();
};
