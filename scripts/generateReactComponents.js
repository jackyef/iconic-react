const fs = require("fs");
const path = require("path");
const { titleCase } = require("title-case");

// Unfortunately, @svgr/core doesn't support mjs
// So we have to make this file a regular commonjs (.js) module
const svgr = require("@svgr/core").default;

const generateComponents = async () => {
  const iconsList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./processed/icons.json"), "utf-8")
  );

  const promises = iconsList.map(async (iconName) => {
    const svgCode = fs.readFileSync(`./svgs/${iconName}.svg`, "utf-8");
    const titleCasedIconName = titleCase(iconName).replace(/-/g, "");

    const jsCode = (
      await svgr(svgCode, {
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      })
    )
      .replace(
        `function SvgComponent(props) {`,
        `interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const ${titleCasedIconName} = ({ size = 24, ...props }: Props) => {`
      )
      .replace(
        "width={24} height={24}",
        'width={size} height={size} viewBox="0 0 24 24"'
      )
      .replace(
        "width={24}",
        'width={size}'
      )
      .replace(
        "height={24}",
        'height={size} viewBox="0 0 24 24"'
      )
      .replace("export default SvgComponent;", "");

    fs.writeFileSync(
      `./components/${titleCasedIconName}.tsx`,
      `/* This file is auto-generated */

${jsCode}`
    );

    return true;
  });

  return Promise.all(promises);
};

const generateIndexFile = () => {
  const iconsList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./processed/icons.json"), "utf-8")
  );

  const indexFileContent = iconsList.reduce((acc, v) => {
    const titleCasedIconName = titleCase(v).replace(/-/g, "");

    acc += `\nexport * from './${titleCasedIconName}'`;

    return acc;
  }, "/* This file is auto-generated */\n");

  fs.writeFileSync(`./components/index.tsx`, indexFileContent);
};

const generateReactComponents = async () => {
  await generateComponents();
  generateIndexFile();

  return true;
};

module.exports = generateReactComponents;
