# Readable Coding Standards and Tools<br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] ![Dependencies][deps-img]

[deps-img]: https://david-dm.org/sebastian-software/readable-code.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/readable-code.svg
[npm-version-img]: https://img.shields.io/npm/v/readable-code.svg

Pool of configuration files and relevant plugins for typical linters.

## Links

- [GitHub](https://github.com/sebastian-software/readable-code)
- [NPM](https://www.npmjs.com/package/readable-code)


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

You can just import "readable-core" into you `gulpfile.js` for having easy access to some common tasks like `lint:js`, `lint:css`, `fix:js`, `fix:css`.



## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/readable-code/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2017<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
