import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconDownloadUrl = `https://iconic.app/icons/iconic/svg/{:iconName}.svg`;

const run = async () => {
  // The iconic.app website seems to be doing some kind of HTML stitching to make
  // the web feels like an SPA. This POST request returns a part of HTML document
  // containing the icons
  const response = await fetch("https://iconic.app/", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,id;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
      "sec-ch-ua-mobile": "?1",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer: "https://iconic.app/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body:
      "action=load-contents&setup%5Btrigger%5D=auto&setup%5Bobject_type%5D=icon&setup%5Btemplate_part_id%5D=icon-grid-icon&setup%5Bnone_part_id%5D=&setup%5Bmore_part_id%5D=icon-grid-load-more&setup%5Bsource%5D=all&setup%5Bquery%5D=alphabetical&setup%5Bcount%5D=150&setup%5Bdelay%5D=0&setup%5Boffset%5D=0",
    method: "POST",
    mode: "cors",
  });

  const text = await response.text();

  fs.writeFileSync(path.join(__dirname, "./raw/icons-list.html"), text);
};

run();
