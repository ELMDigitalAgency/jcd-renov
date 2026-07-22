import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "legacy/**",
      ".next/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
      "scripts/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      // 1 seul H1 par page, garanti par construction : seul PageTitle rend <h1>
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name='h1']",
          message:
            "N'utilise jamais <h1> directement — utilise <PageTitle> (src/components/ui/PageTitle.tsx), seul émetteur de h1 autorisé (règle SEO : 1 h1/page).",
        },
      ],
    },
  },
  {
    files: ["src/components/ui/PageTitle.tsx"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
];

export default eslintConfig;
