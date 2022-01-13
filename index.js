const fs = require("fs");
const path = require('path');
const mammoth = require("mammoth");
const argv = require("minimist")(process.argv.slice(2));
const file = argv?.file ? argv.file : "./datasets/file-sample.docx";

let write = async ({ slug, content, flag }) => {
  try {
    if (!fs.existsSync(path.dirname(slug))) {
      fs.mkdirSync(path.dirname(slug), { recursive: true });
    }

    fs.writeFileSync(slug, content, { flag: flag });
    console.log(slug);
  } catch (err) {
    console.error(err);
  }
};

mammoth.extractRawText({ path: `${file}` }).then(function (result) {
  console.log(result.value);

  write({
    slug: `./datasets/taps.prompt.txt`,
    content: `${result.value}\n`,
  });

  write({
    slug: `./datasets/taps.completion.txt`,
    content: `${result.value}\n`,
  });
});
