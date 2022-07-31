const qec = require("../../models/Qec");
const teacher = require("../../models/Teacher");
const course = require("../../models/Course");
const student = require("../../models/Student");

exports.createQec = async (req, res, next) => {
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
    if(!req.body.des || !req.body.starR|| !req.body.rating || !req.body.category ){
      res.status(400).json({ error: "Add All Feilds" });
    }else{
      const Teacher = await teacher.findById({ _id: req.body.teacherId });
      const Course = await course.findById({ _id: req.body.courseId });
      const Student = await student.findById({ _id: req.body.studentId });
  
      if (Teacher) {
        const Qec = await new qec(data);
        await Qec.save();
        res.status(200).json({ success: true });
  
        Student.qec.push(Qec._id);
        await Student.save();
  
        Course.isCourse.push(Qec._id);
        await Course.save();
  
        Teacher.isQec.push(Qec._id);
        await Teacher.save();
      } else {
        res.status(400).json({ message: "teacher Not FOund" });
      }
    }
   
  } catch (err) {
    console.log(err);
  }
};
exports.readQec = async (req, res) => {
  qec
    .find({})
    .populate("studentId")
    .populate("teacherId")
    .populate("courseId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.readMidQec = async (req, res) => {
  const Qec = qec
    .find({ term: "Mid" })
    .populate("studentId")
    .populate("teacherId")
    .populate("courseId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.readFinalQec = async (req, res) => {
  const Qec = qec
    .find({ term: "Final" })
    .populate("studentId")
    .populate("teacherId")
    .populate("courseId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
