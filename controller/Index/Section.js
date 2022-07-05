const Section = require("../../Models/Section");

exports.section = async (req, res) => {
  Section.find({})
    .populate("semesterId")
    .populate("courseId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
