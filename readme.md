# `iconic-react`

Love [Iconic icons](https://iconic.app/)? If you are working with React, you might want to convert the icons into React components so you can inline them in your React app. This package does exactly that!

This package exports the icons available on https://iconic.app/ as React components that accept the usual props that an `svg` would, except for 1 extra prop: `size`. By default, the size is `24`, but you can simply pass it a different value to get an appropriately sized icon for your use case!

The icons use `fill="currentColor"`, which means it will automatically follow its closest parent text color.

The library also supports tree-shaking as long as you are using ESM named imports and your bundler supports tree-shaking too; Your bundle size will only grow depending on how many icons you are using!

## Example

```tsx
import * as React from "react";
import { Announcement } from "iconic-react";

const Example = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Announcement size={16} />
      <Announcement size={24} />
      <Announcement size={32} />
      <Announcement size={48} />
      <Announcement size={64} />
      <Announcement size={80} />
    </div>
  );
};
```

For a more complete sample code, check out this [codesandbox](https://codesandbox.io/s/iconic-react-example-h1w2z?file=/src/App.js).

## Credits

- [Iconic](https://iconic.app) for the amazing collection of icons
- [svgr](https://github.com/gregberge/svgr) for a quick and easy way to transform SVG into React components
