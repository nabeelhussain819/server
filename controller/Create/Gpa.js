const cgpa = require("../../models/Gpa");
const student = require("../../models/Student");
exports.createCgpa = async (req, res) => {
  try {
    const data = {
      term: req.body.term,
      studentId: req.body.studentId,
      courseId: req.body.courseId,
      teacherId: req.body.teacherId,
      rating: req.body.rating,
      star: req.body.starR,
      description: req.body.des,
      grade: req.body.category,

    };
    const Cgpa = await new cgpa(data);
    await Cgpa.save();

    const Student = await student.findById({ _id: req.body.studentId });
    Student.Rate.push(Cgpa._id)
    await Student.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
exports.readGpa = async (req, res) => {
  cgpa
    .find({})
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};