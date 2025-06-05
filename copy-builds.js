// projekdir/copy-builds.js
const fs = require('fs-extra'); // Ensure fs-extra is installed (as per previous steps)
const path = require('path');   // Node.js built-in path module

// Define paths
const rootDistDir = path.join(__dirname, 'dist'); // The final destination for all builds
const clientSourceDir = path.join(__dirname, 'apps', 'client', 'dist'); // Source of client build
const adminSourceDir = path.join(__dirname, 'apps', 'admin', 'dist');   // Source of admin build
const adminDestinationDir = path.join(rootDistDir, 'admin');           // Destination for admin build

async function copyBuilds() {
  try {
    console.log('Starting combined build copy operation...');

    // 1. Copy Client app build to the root dist directory
    console.log(`Copying client build from: ${clientSourceDir}`);
    console.log(`To: ${rootDistDir}`);
    await fs.copy(clientSourceDir, rootDistDir, { overwrite: true }); // Overwrite if files exist
    console.log('Client build copied successfully to root!');

    // 2. Copy Admin app build to dist/admin directory
    console.log(`Copying admin build from: ${adminSourceDir}`);
    console.log(`To: ${adminDestinationDir}`);
    await fs.copy(adminSourceDir, adminDestinationDir, { overwrite: true }); // Overwrite if files exist
    console.log('Admin build copied successfully to dist/admin!');

    console.log('All builds copied to final dist folder.');
    process.exit(0); // Exit successfully
  } catch (err) {
    console.error('Error during build copy operation:', err);
    process.exit(1); // Exit with an error code to indicate failure
  }
}

copyBuilds();