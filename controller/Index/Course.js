const course = require("../../Models/Course");

exports.readCourse = async (req, res) => {
  course
    .find({})
    .populate("teacherId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.editCourse = async (req, res, next) => {
  const Course = await course.findById({ _id: req.body.id });
  if(req.body.name =="" || req.body.code == ""){
    res.status(400).json({ error: "add all feilds" });
  }else{
    if (!Course) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      Course.update(req.body, (error, index) => {
        if (error) {
          return next(error);
        } else {
          res.json(index);
        }
      });
  
    }
  }
  
};