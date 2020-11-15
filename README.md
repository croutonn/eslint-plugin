# @croutonn/eslint-plugin

[![npm version](https://img.shields.io/npm/v/@croutonn/eslint-plugin.svg)](https://www.npmjs.com/package/@croutonn/eslint-plugin)
[![Downloads/month](https://img.shields.io/npm/dm/@croutonn/eslint-plugin.svg)](http://www.npmtrends.com/@croutonn/eslint-plugin)
[![Build Status](https://travis-ci.org/croutonn/eslint-plugin.svg?branch=main)](https://travis-ci.org/croutonn/eslint-plugin)
[![Dependency Status](https://david-dm.org/croutonn/eslint-plugin.svg)](https://david-dm.org/croutonn/eslint-plugin)

This is a plugin that puts the ESLint rules I have wanted into one place.
It also contains rules for existing plug-ins with additional auto-fixer.

## Installation

Use [npm](https://www.npmjs.com/) or a compatibility tool to install.

```
$ npm install --save-dev eslint @croutonn/eslint-plugin
```

### Requirements

- Node.js v8.10.0 or newer versions.
- ESLint v5.16.0 or newer versions.

## Usage

Write your config file such as `.eslintrc.yml`.

```yml
plugins:
  - "@croutonn"
rules:
  "@croutonn/func-style":
    - error
    - arrow
    - topLevelStyle: declaration
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Configs

- `@croutonn/recommended` ... enables the recommended rules.

## Rules

<!--RULE_TABLE_BEGIN-->

### Best Practices

| Rule ID                                                                                                  | Description                                                                                                                                                                               |       |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: |
| [@croutonn/exports-last](./docs/rules/exports-last.md)                                                   | This rule enforces that all exports are declared at the bottom of the file. This rule will report any export declarations that comes before any non-export statements.                    | ⭐️✒️ |
| [@croutonn/group-exports](./docs/rules/group-exports.md)                                                 | Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file | ⭐️✒️ |
| [@croutonn/jsx-a11y-anchor-has-content](./docs/rules/jsx-a11y-anchor-has-content.md)                     | Enforce that anchors have content and that the content is accessible to screen readers                                                                                                    |       |
| [@croutonn/jsx-a11y-control-has-associated-label](./docs/rules/jsx-a11y-control-has-associated-label.md) | Enforce that a control (an interactive element) has a text label                                                                                                                          |       |
| [@croutonn/typescript-react-component-type](./docs/rules/typescript-react-component-type.md)             | enforce `FC` and `FunctionComponent` types to one or the other                                                                                                                            | ⭐️✒️ |
| [@croutonn/typescript-react-require-props-suffix](./docs/rules/typescript-react-require-props-suffix.md) | require that prop interface names be suffixed with `Props`                                                                                                                                |  ⭐️  |
| [@croutonn/typescript-react-require-props-type](./docs/rules/typescript-react-require-props-type.md)     | require an props type to be provided to a React component                                                                                                                                 |  ⭐️  |

### Stylistic Issues

| Rule ID                                            | Description                                                      |       |
| :------------------------------------------------- | :--------------------------------------------------------------- | :---: |
| [@croutonn/func-style](./docs/rules/func-style.md) | enforce consistent use of `function` declarations or expressions | ⭐️✒️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Changelog

- [GitHub Releases](https://github.com/croutonn/eslint-plugin/releases)

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm version <TYPE>` updates the package version. And it updates `lib/configs/recommended.js`, `lib/index.js`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.
