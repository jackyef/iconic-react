import * as React from "react";
import fs from "fs";
import path from "path";
import { render } from "@testing-library/react";

const componentsDir = path.resolve(__dirname, "../components");
const components = fs.readdirSync(componentsDir);

components.forEach((compFile) => {
  if (compFile === "index.tsx") return;

  const compName = compFile.replace(".tsx", "");

  describe(`${compName} icon`, () => {
    it("renders without error", () => {
      const IconComponent = require(path.resolve(componentsDir, compFile))[
        compName
      ];

      const { container } = render(<IconComponent />);

      expect(container.querySelector("svg")).not.toBeNull();
    });
  });
});
