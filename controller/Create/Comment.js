const Comment = require("../..//Models/Review/DepartmentReview");
const Comment1 = require("../../Models/Review/CourseReview");
const Comment2 = require("../../Models/Review/TeacherReview");
const Comment3 = require("../../Models/Review/SemesterReview");
const Teacher = require("../../Models/Teacher");
exports.departComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    departmentId: req.body.departmentId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.courseComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    courseId: req.body.courseId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment1.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.teacherComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    teacherId: req.body.teacherId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  console.log( req.body.teacherId)
  const teacher = await Teacher.findById({ _id: req.body.teacherId });
  teacher.comment.push(req.body.comment)
  await teacher.save();

  Comment2.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } 
  }
  );

  res.status(200).json({ message: "add all feilds" });
};

exports.semesterComment = async (req, res, next) => {
  const data = {
    comment: req.body.comment,
    semesterId: req.body.semesterId,
    studentId: req.body.studentId,
    value: req.body.value,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  Comment3.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.getDeptComment = async (req, res, next) => {
  Comment.find({})
    .populate("departmentId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};

exports.getSemComment = async (req, res, next) => {
  Comment3.find({})
    .populate("semesterId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.getTechComment = async (req, res, next) => {
  Comment2.find({})
    .populate("teacherId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.getCourseComment = async (req, res, next) => {
  Comment1.find({})
    .populate("courseId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.deleteComments = async (req, res, next) => {
  const comment1 = await Comment1.findById({ _id: req.body.id });
  const comment = await Comment.findById({ _id: req.body.id });
  const comment2 = await Comment2.findById({ _id: req.body.id });
  const comment3 = await Comment3.findById({ _id: req.body.id });
  if (comment) {
    comment.delete();
    res.status(200).json({ message: "Done" });
  } else if (comment1) {
    comment1.delete();
    res.status(200).json({ message: "Done" });
  } else if (comment2) {
    comment2.delete();
    res.status(200).json({ message: "Done" });
  } else if (comment3) {
    comment3.delete();
    res.status(200).json({ message: "Done" });
  } else {
    res.status(400).json({ error: "notFound" });
  }
};
