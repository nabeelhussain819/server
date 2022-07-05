const semes = require("../../models/Semester");

exports.readSemes = async (req, res) => {
  semes
    .find({})
    .populate("courseId")
    .populate("programId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.deleteSemester = async (req, res, next) => {
  const Semes = await semes.findById({ _id: req.body.id });
  if (!Semes) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    Semes.delete();
    res.status(200).json({ message: "Done" });
  }
};
