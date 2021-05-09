import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./processed/icons.json"), "utf-8")
);

const iconDownloadUrl = `https://iconic.app/icons/iconic/svg/{:iconName}.svg`;

export const downloadIcons = async () => {
  const promises = iconsList.map(async (iconName) => {
    const response = await fetch(
      iconDownloadUrl.replace(`{:iconName}`, iconName)
    );
    const text = await response.text();

    fs.writeFileSync(`./svgs/${iconName}.svg`, text);

    return true;
  });

  return Promise.all(promises);
};
