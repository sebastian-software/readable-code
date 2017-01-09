# JavaScript Coding Standards<br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] ![Dependencies][deps-img]

[deps-img]: https://david-dm.org/sebastian-software/s15e-javascript.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/s15e-javascript.svg
[npm-version-img]: https://img.shields.io/npm/v/s15e-javascript.svg

Pool of configuration files and relevant plugins for typical linters.

## Links

- [GitHub](https://github.com/sebastian-software/s15e-javascript)
- [NPM](https://www.npmjs.com/package/s15e-javascript)


## Usage

You can copy the relevant files into your own project like `.editorconfig`. For ESLint/Stylelint there is a more sophisticated approach: The configuration can be included like this:

```yaml
extends:
  "./node_modules/s15e-javascript/.eslintrc.yml"
```

```yaml
extends:
  "./node_modules/s15e-javascript/.stylelintrc.yml"
```

We also bundle the whole tooling aspect in here. You can just include our `gulpfile.js` into yours to have easy access to some common tasks like `lint:js`, `lint:css`, `fix:js`, `fix:css`.



## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/s15e-javascript/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2017-2016<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
