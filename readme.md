# JavaScript Coding Standards<br/>![Downloads][npm-version-img] ![Downloads][npm-downloads-img] ![Dependencies][deps-img]

[deps-img]: https://david-dm.org/sebastian-software/s15e-javascript.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/s15e-javascript.svg
[npm-version-img]: https://img.shields.io/npm/v/s15e-javascript.svg

Pool of configuration files for sharing coding standards between different projects.

## Links

- [GitHub](https://github.com/sebastian-software/s15e-javascript)
- [NPM](https://www.npmjs.com/package/s15e-javascript)


## Usage

You can copy the relevant files into your own project like `.editorconfig` or `.babelrc`. For ESLint there is a more sophisticated approach: The configuration can be included like this:

```yaml
extends:
  "./node_modules/s15e-javascript/.eslintrc.yml"
```

For Node.js environment use the following ESLint configuration:

```yaml
extends:
  "./node_modules/s15e-javascript/.eslintrc.node.yml"
```


## Copyright

<img src="https://raw.githubusercontent.com/sebastian-software/s15e-javascript/master/assets/sebastiansoftware.png" alt="Sebastian Software GmbH Logo" width="250" height="200"/>

Copyright 2015-2016<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
