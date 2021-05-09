# `iconic-react`

Love [Iconic icons](https://iconic.app/)? If you are working with React, you might want to convert the icons into React components so you can inline them in your React app. This package does exactly that!

This package exports the icons available on https://iconic.app/ as React component that accepts 1 prop, `size`. By default, the size is `24`, but you can simply pass it a different value to get an appropriately sized icon for your use case!

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

## Credits

- [Iconic](https://iconic.app) for the amazing collection of icons
- [svgr](https://github.com/gregberge/svgr) for a quick and easy way to transform SVG into React components
