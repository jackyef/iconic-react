const fs = require("fs");
const path = require("path");
const { titleCase } = require("title-case");
const svgr = require("@svgr/core").default;

const iconsList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./processed/icons.json"), "utf-8")
);

const generateReactComponents = () => {
  iconsList.forEach(async (iconName) => {
    const svgCode = fs.readFileSync(`./svgs/${iconName}.svg`, "utf-8");

    const jsCode = await svgr(svgCode, {
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
    });

    const titleCasedIconName = titleCase(iconName.replace("-", ""));

    fs.writeFileSync(`./components/${titleCasedIconName}.tsx`, jsCode);
  });
};

generateReactComponents();
