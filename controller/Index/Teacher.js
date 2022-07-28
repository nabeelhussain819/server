const teacher = require("../../models/Teacher");

exports.teacher = async (req, res, next) => {
  teacher
    .find({})
    .populate({
      path: "deptId",
    })

    .populate("programId")
    .populate("courseId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.deleteTeacher = async (req, res, next) => {
  const Course = await teacher.findById({ _id: req.body.id });
  if (!Course) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    Course.delete();
    res.status(200).json({ message: "Done" });
  }
};
