"use strict";

module.exports = {
  plugins: ["@typehut"],
  rules: {
    "func-style": "off",
    "react/prop-types": "off",
    "import/group-exports": "off",
    "import/exports-last": "off",
    "@typehut/func-style": ["error", "arrow", { topLevelStyle: "declaration" }],
    "@typehut/group-exports": ["error"],
    "@typehut/exports-last": ["error"],
    "@typehut/typescript-react-component-type": ["error", "omit"],
    "@typehut/typescript-react-require-props-suffix": ["error"],
    "@typehut/typescript-react-require-props-type": ["error"],
  },
};
