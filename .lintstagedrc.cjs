const fs = require("fs");

const typeCheck = () => `tsc --project ./tsconfig.json --noEmit`;

module.exports = {
  "*.{js,cjs,json,css,md}": ["prettier --write"],
  "*.{ts,tsx}": [
    "eslint --report-unused-disable-directives --max-warnings 0 --cache --fix",
    typeCheck,
    "vitest related --run",
  ],
};
