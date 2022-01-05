const mammoth = require("mammoth");
const argv = require("minimist")(process.argv.slice(2));
const file = argv?.file ? argv.file : "./datasets/file-sample.docx";

mammoth.extractRawText({ path: `${file}` }).then(function (result) {
  console.log(result.value);
  return result.value;
});
