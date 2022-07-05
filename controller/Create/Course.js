const semester = require("../../models/Semester");
const course = require("../../models/Course");

exports.createCourse = async (req, res) => {
  console.log(req.body);
  try {
    const data = {
      name: req.body.name,
      semesterId: req.body.semesterId,
      teacherId: req.body.teacherId,
      studentId: req.body.studentId,
      comment: req.body.comment,
      description: req.body.description,
      code: (Math.random() + 1).toString(36).substring(5),
    };
    const Course = new course(data);
    await Course.save();
    const Semester = await semester.findById({ _id: req.body.semesterId });
    Semester.courseId.push(Course._id);
    await Semester.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
exports.deleteCourse = async (req, res, next) => {
  const Course = await course.findById({ _id: req.body.id });
  if (!Course) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    Course.delete();
    res.status(200).json({ message: "Done" });
  }
};
