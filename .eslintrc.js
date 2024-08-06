/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  env: {
    es2022: true,
    browser: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "script",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "@tanstack/query"],
  rules: {
    "@typescript-eslint/no-empty-function": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/stable-query-client": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
    "**/dist/**",
  ],
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "object-curly-spacing": ["error", "always"],
        "jsx-quotes": ["error", "prefer-double"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
