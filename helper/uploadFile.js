
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage , limits: {
    fileSize: 1024 * 1024 * 5
  },});

  exports.uploadImg = upload;