const qec = require("../../models/Qec");
const teacher = require("../../models/Teacher");
const course = require("../../models/Course");
exports.createQec = async (req, res, next) => {
  try {    
    const data = {
      term: req.body.term,
      studentId: req.body.studentId,
      courseId: req.body.courseId,
      teacherId: req.body.teacherId,
      rating:  req.body.rating,
    };
    const Teacher = await teacher.findById({ _id: req.body.teacherId });
    const Course = await course.findById({ _id: req.body.courseId });
    if(Teacher){
        const Qec = await new qec(data);
        await Qec.save();
        res.status(200).json({ success: true });
        Teacher.isQec.push(req.body.studentId)
        await Teacher.save();
        Course.isCourse.push(req.body.studentId)
        await Course.save();
    }  else{
      res.status(400).json({ message: "teacher Not FOund" });
    }

  } catch (err) {
    console.log(err);
  }
};
exports.readQec= async (req, res) => {
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