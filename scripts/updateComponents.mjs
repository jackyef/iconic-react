import { execSync } from "child_process";

import { getRawHtml } from "./getRawHtml.mjs";
import { getIconsList } from "./getIconsList.mjs";
import { downloadIcons } from "./downloadIcons.mjs";
import generateReactComponents from "./generateReactComponents.js";

const run = async () => {
  await getRawHtml();
  console.log("✅  Fetched new raw HTML from iconic.app!");
  await getIconsList();
  console.log("✅  Scraped new icons list from the HTML!");

  // At this point, if there's any changed file, we need to update the icons
  const diff = execSync("git diff").toString("utf-8");

  if (!diff) {
    console.log("✅  No updates needed!");
    process.exit(0);
  }

  await downloadIcons();
  console.log("✅  Downloaded icons!");
  await generateReactComponents();
  console.log("✅  Generated react components for the icons!");

  console.log("✅  Updates done, please check the staged changes!");
};

run();
