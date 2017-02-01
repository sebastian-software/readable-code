# Readable Coding Standards and Tools<br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] ![Dependencies][deps-img]

[deps-img]: https://david-dm.org/sebastian-software/readable-code.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/readable-code.svg
[npm-version-img]: https://img.shields.io/npm/v/readable-code.svg

Pool of configuration files and relevant plugins for typical linters.

## Links

- [GitHub](https://github.com/sebastian-software/readable-code)
- [NPM](https://www.npmjs.com/package/readable-code)


## Usage

You can copy the relevant files into your own project like `.editorconfig`. For ESLint/Stylelint there is a more sophisticated approach: The configuration can be included like this:

```yaml
extends:
  "./node_modules/readable-code/.eslintrc.yml"
```

```yaml
extends:
  "./node_modules/readable-code/.stylelintrc.yml"
```

We also bundle the whole tooling aspect in here. You can just include our `gulpfile.js` into yours to have easy access to some common tasks like `lint:js`, `lint:css`, `fix:js`, `fix:css`.



## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/readable-code/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2017<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
