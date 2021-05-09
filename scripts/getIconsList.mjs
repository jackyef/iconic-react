import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawHtml = fs.readFileSync(
  path.resolve(__dirname, "./raw/icons-list.html"),
  "utf-8"
);

let temp = rawHtml;
const startElement = `<span class="font-size-12 detect-text-overflow">`;
let startIndex = temp.indexOf(
  '<span class="font-size-12 detect-text-overflow">'
);
const endElement = `</span>`;
let endIndex = temp.indexOf(endElement, startIndex);

const foundIcons = [];

export const getIconsList = () => {
  while (startIndex > -1 && endIndex > -1) {
    foundIcons.push(temp.substring(startIndex + startElement.length, endIndex));

    // Cut-off the already searched part
    temp = temp.substring(endIndex + endElement.length);

    // Search for next occurence
    startIndex = temp.indexOf(
      '<span class="font-size-12 detect-text-overflow">'
    );
    endIndex = temp.indexOf(endElement, startIndex);
  }

  fs.writeFileSync(
    path.join(__dirname, "./processed/icons.json"),
    JSON.stringify(foundIcons, null, 2)
  );
};

getIconsList();
