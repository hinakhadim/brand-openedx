const fs = require("fs-extra");
const { execSync } = require('child_process');
const path = require('path');

const theme = process.env.npm_config_theme;
console.log("------theme-----", theme)

let srcDir, destDir;

switch (theme) {
    case 'light':
      console.log('Installing sub-package-light...');
      srcDir = path.resolve(__dirname, 'light/paragon/_variables.scss');
      throw 'hina';
      destDir = path.resolve(process.cwd(), 'node_modules', '@edx/brand/paragon');
      console.log("----src-path-----", srcDir, destDir)

// Copy the src directory to the destination
        fs.copyFileSync(srcDir, destDir);
    //   execSync('npm install sub-package-light', { stdio: 'inherit' });
      break;
    case 'dark':
      console.log('Installing sub-package-dark...');
      srcDir = path.resolve(__dirname, 'dark/paragon/_variables.scss');
      console.log("-----src path-----", srcDir)
      
      destDir = path.resolve('node_modules', '@edx/brand/paragon');
      console.log("-----path-----", srcDir, destDir)
      console.log(__dirname);
        console.log(process.cwd());
        console.log(process.env.PWD);
      throw 'hinia';

// Copy the src directory to the destination
        fs.copySync(srcDir, destDir);
    //   execSync('npm install sub-package-dark', { stdio: 'inherit' });
      break;
    default:
      console.error('Invalid theme specified during installation.');
      break;
  }