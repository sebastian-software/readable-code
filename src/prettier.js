import through from "through2"
import gutil from "gulp-util"
import prettier from "prettier"

var PluginError = gutil.PluginError

export default function(options) {
  function transform(file, encoding, callback) {
    if (file.isNull()) return callback(null, file)
    if (file.isStream()) return callback(new PluginError("gulp-prettier", "Streaming not supported"))

    let data
    let content = file.contents.toString("utf-8")

    try {
      data = prettier.format(content, options)
    } catch (error) {
      return callback(new PluginError("gulp-prettier", error))
    }

    file.contents = new Buffer(data)
    callback(null, file)
  }

  return through.obj(transform)
}
