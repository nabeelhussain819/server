const Student = require("../../Models/Student");

exports.student = async (req, res, next) => {
  Student.find({})
    .populate({
      path: "deptId",
    })  .populate("courseId")
    .populate("sessionId")
    .populate("semesterId")
    .populate("programId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
