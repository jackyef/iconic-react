import { execSync } from "child_process";

import "./getRawHtml.mjs";
import "./getIconsList.mjs";

// At this point, if there's any changed file, we need to update the icons
const diff = execSync("git diff").toString('utf-8');

if (!diff) {
  console.log('No updates needed!')
  process.exit(0)
}

console.log({ diff });
//
// require('./downloadIcons')
// require('./generateReactComponents')
