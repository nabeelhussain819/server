const complain = require("../../models/Complain/Report");

exports.getReport = async (req, res, next) => {
    complain.find({})
      .populate("departId")
      .populate("studentId")
      .populate("courseId")
      .exec((err, data) => {
        if (err) {
          throw err;
        }
        res.json(data);
      });
  };