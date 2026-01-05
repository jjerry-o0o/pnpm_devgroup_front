module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
    //
  extends: [
    'eslint:recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {jsx: true},
    parser: "@typescript-eslint/parser",
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'no-var': 'error',
      'prettier/prettier': 'error',
      eqeqeq: ['error', 'always'],
      'no-nested-ternary': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off',  // TS 규칙 사용할거라 js 기본 규칙 off
      '@typescript-eslint/no-explicit-any': 'error',    // any 타입 사용 금지
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],  // 안 쓰는 변수 에러 처리, _로 시작시 허용
      '@typescript-eslint/consistent-type-imports': [ 'error', { prefer: 'type-imports' },],    // 타입 import 시 type 강제 및 없는 경우 자동 추가해줌
      '@typescript-eslint/no-empty-function': 'off',    // 빈 함수 금지 여부
      'react/react-in-jsx-scope': 'off',    // React 17+ 버전에서는 import React 생략 가능
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],    // 확장자 제한
      'react/prop-types': 'off',
      // TanStack 관련 설정은 extends 에 있는걸로 사용
      'import/order': [
          'error',
          {
            groups: [           // 그룹 단위 정렬 순서
                'builtin',      // Node.js 내장모듈
                'external',     // 외부 라이브러리
                [ 'internal',   // 별칭 사용하는 경우 ex.@/components...
                  'parent',     // 상대 경로
                  'sibling',
                  'index' ],
                'object',       // 특수 형태 ex.import log
                'type',         // 타입 전용 ex.import type {}
            ],
            'newline-between': 'always',
              pathGroups: [ // 그룹 안에서 아래 규칙대로 정렬
                  { pattern: 'react', group: 'external', position: 'before' },
                  { pattern: '@tanstack/**', group: 'external', position: 'after' },
              ],
              pathGroupsExcludedImportTypes: ['react'], // react 단어 포함된 다른 타입 import 들과 섞이지 않도록 예외처리
              alphabetize: { order: 'asc', caseSensitive: true },   // 오름차순
          }
      ]
    }
}
