import through from 'through2'
import gutil from 'gulp-util'
import prettier from 'prettier'
import applySourceMap from 'vinyl-sourcemaps-apply'

var PluginError = gutil.PluginError;

export default function(options) {
  function transform(file, encoding, callback) {
    if (file.isNull())
      return callback(null, file);
    if (file.isStream())
      return callback(new PluginError(
        'gulp-prettier',
        'Streaming not supported'
      ));

    let data;
    let str = file.contents.toString('utf8');

    try {
      data = prettier.format(str, options);
    } catch (err) {
      return callback(new PluginError('gulp-prettier', err));
    }

    file.contents = new Buffer(data);
    callback(null, file);
  }

  return through.obj(transform);
};
