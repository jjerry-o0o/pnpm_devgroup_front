// @ts-check

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'
import tanstack from '@tanstack/eslint-plugin-query'
import { fixupPluginRules } from "@eslint/compat"

// typescript-eslint 에서 제공하는 config() 와 @ts-check 주석 사용시 속성에 대한 타입 오류 확인 가능
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...reactPlugin.configs.recommended,
  ...reactHooks.configs.recommended,
  ...tanstack.configs.recommended,
  prettierPluginRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.disableTypeChecked]
  }, // 구성이 적용될 파일 패턴
  { languageOptions: {  // parser, 전역 변수 등 언어 관련 옵션
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        tsconfigRoot: import.meta.dirname,  // 현재 모듈의 dir 경로
        project: ["tsconfig.node.json", "tsconfig.app.json"],
      },
    },
  },
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": fixupPluginRules(reactHooks),
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactPlugin.config["recommended"].rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "warn"
    }
  }
)
