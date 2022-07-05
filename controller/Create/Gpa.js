const cgpa = require("../../Models/Gpa");
const student = require("../../Models/Student");
exports.createCgpa = async (req, res) => {
  try {
    const data = {
      Rate: req.body.gpa,
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,

    };
    const Cgpa = await new cgpa(data);
    await Cgpa.save();
    const Student = await student.findById({ _id: req.body.studentId });
    Student.rating.push(req.body.rating)
    Student.cgpaRate.push(req.body.Rate)
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