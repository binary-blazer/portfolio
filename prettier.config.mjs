/** @type {import('prettier').Config} */

const config = {
  importOrder: [
    // prettier
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^@/env(.*)$",
    "^types$",
    "^@/types/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
    "<THIRD_PARTY_MODULES>",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
