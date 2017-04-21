# Readable Coding Standards and Tools<br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] ![Dependencies][deps-img]

[deps-img]: https://david-dm.org/sebastian-software/readable-code.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/readable-code.svg
[npm-version-img]: https://img.shields.io/npm/v/readable-code.svg

Pool of configuration files and relevant plugins for typical linters.



## Links

- [GitHub](https://github.com/sebastian-software/readable-code)
- [NPM](https://www.npmjs.com/package/readable-code)



## Goals

- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even when many people are contributing to it.



## Features

- Automatic detection of Git tracked files for simple to use approach in all projects.

### JavaScript

- Includes a sophisticated ESLint configuration. Optimized for readability.
- Contains linting support for ES2017, React, JSX, Flow, Lodash, Accessiblity, etc.
- Includes configuration for [prettier](https://github.com/prettier/prettier) in conjunction with ESLints fix mode for automatic sane code configuration.
- Offers gulp tasks `lint:js` and `fix:js` for linting and auto formatting of JavaScript code.

### CSS

- Includes configuration for StyleLint 
- Offers gulp tasks `lint:css` and `fix:css` for linting and auto formatting of CSS code.




## Usage

You can copy the relevant files into your own project like `.editorconfig`. 

For ESLint/StyleLint there is a more sophisticated approach: The configuration can be included like shown below:

### ESLint Configuration

```yaml
extends:
  "./node_modules/readable-code/.eslintrc.yml"
```

### Stylelint Configuration

```yaml
extends:
  "./node_modules/readable-code/.stylelintrc.yml"
```

### Gulp Tasks

We also bundle the whole tooling aspect in here. 

You can just import "readable-core" into you `gulpfile.js` or `gulpfile.babel.js` for having easy access to some 
common tasks like `lint:js`, `lint:css`, `fix:js`, `fix:css`.




## Formatting Rules

### JavaScript

- Follow [clean code ideas for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- Indent with 2 spaces no tabs
- Double quotes for strings and JSX attributes
- Unix line breaks
- No trailing spaces 
- Tend to more spaces and whitespace in your code
- No dashes in file names (should match `^[a-zA-Z][a-zA-Z0-9.]+$`)
- All files have a `.js` extension, no `.jsx`
- No CommonJS - use only ES2015 modules
- Prefer efficient ES2015 language like template strings, spreading, arrow functions, ...
- Keep an eye on code complexity, nesting levels, file length, ...
- Prefer named parameters (destructing) over long parameter lists
- No usage of `labels`, `with` and `eval`.
- No magic numbers. Use variables to describe intention.

### CSS

- Use one discrete selector per line in multi-selector rulesets.
- Include a single space before the opening brace of a ruleset.
- Include one declaration per line in a declaration block.
- Use one level of indentation for each declaration.
- Include a single space after the colon of a declaration.
- Use lowercase and shorthand hex values, e.g., #aaa.
- Use double quotes.
- Quote attribute values in selectors, e.g., input[type="checkbox"].
- Where allowed, avoid specifying units for zero-values, e.g., margin: 0.
- Include a space after each comma in comma-separated property or function values.
- Include a semi-colon at the end of the last declaration in a declaration block.
- Separate each ruleset by a blank line.



## Technology Stack

### Gulp

- Predefined tasks to import into your custom `gulpfile.js`.

### Stylelint ([Project](https://github.com/stylelint/stylelint))

- PostCSS-based linter for CSS. Supports alternative dialects like SugarSS, SCSS and Sass.

#### Stylelint Plugins

- `order`: Grouping and sorting of rules and properties.

### Stylefmt ([Project](https://github.com/morishitter/stylefmt))

- The counterpart to Stylelint supports auto formatting stylesheets based on the Stylelint rules.

### ESLint ([Homepage](eslint.org))

- Effectively a successor of both [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/). Is configured to use the [Babel Parser](https://github.com/babel/babel-eslint) for full ES2017+ support.

#### ESLint Plugins

- `filenames`: Validation for file names matching some common sense requirements.
- `flowtype`: Support for checking FlowType syntax to match rules.
- `flowtype-errors`: Helps writing correct FlowType declarations.
- `import`: Checks whether imports map to valid entry points.
- `jsx-a11y`: Accessibility checks for JSX tags e.g. requiring `alt` tags on images.
- `lodash`: Lodash specific checks and hints to prefer common features over custom/builtin.
- `no-use-extend-native`: Prevent extending native objects/classes like `Array` or `String`.
- `node`: Prevents usage of deprecated features and other checks when developing NodeJS based apps.
- `promise`: Checks for correctly working with Promises.
- `react`: React specific checks for requiring specific structures of classes + preferring functional patterns.
- `security`: Checks for security issues in e.g. RegExps.

### Prettier ([Project](https://github.com/prettier/prettier))

- Auto formatting engine for JavaScript which intelligently supports limiting line length and other more advanced features.
- Advanced support for language features from ES2017, JSX, and Flow.

### Lint Staged ([Project](https://github.com/okonet/lint-staged))

- Auto linting for all `.css` and `.js` staged files when these are about to being committed to the repository.




## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/readable-code/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2017<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
