// Taken and adjusted from from how @chakra-ui builds their components
// https://github.com/chakra-ui/chakra-ui/blob/620f0b7d756ffb6bfc6ddf0459e96f774ffbb9be/babel.config.js
const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs";
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm";

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        loose: true,
        modules: isCommonJS ? "commonjs" : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ];

  return {
    presets,
  };
};
