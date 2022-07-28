const Student = require("../../models/Student");
const Teacher = require("../../models/Teacher");
const Qec = require("../../models/Qec");
const Course = require("../../models/Course");
const GPA = require("../../models/Gpa");
const Program = require("../../models/Program");
const Semester = require("../../models/Semester");
const Depart = require("../../models/Department");
const Comment2 = require("../../models/Review/TeacherReview");
exports.AuthUser = async (req, res, next) => {
  const student = await Student.findById({ _id: req.body.id }).populate({
    path: "deptId",
  }).populate("courseId")
    .populate("sessionId")
    .populate("semesterId")
    .populate("programId")
    .populate("qec")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthTeacher = async (req, res, next) => {
  const student = await Teacher.findById({ _id: req.body.id }).populate({
    path: "deptId",
  }).populate("courseId")
    .populate("sessionId")
    .populate("programId")
    .populate("qec")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthTeacherComment = async (req, res, next) => {
  const comment = await Comment2.find({ teacherId: req.body.id }).populate({
    path: "deptId",
  }).populate("teacherId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthQec = async (req, res, next) => {
  const qec = await Qec.find({ studentId: req.body.id })
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
exports.AuthTeacher = async (req, res, next) => {
  const teacher = await Teacher.findById({ _id: req.body.id }).populate({
    path: "deptId",
  }).populate("courseId")
    .populate("programId")
    .populate("isQec")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthTeacherQec = async (req, res, next) => {
  const qec = await Qec.find({ teacherId: req.body.id })
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
exports.AuthTeacherStudents = async (req, res, next) => {
  const course = await Course.find({ teacherId: req.body.id })
    .populate("teacherId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthStudentRating = async (req, res, next) => {
  const gpa = await GPA.find({ studentId: req.body.id })
    .populate("teacherId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthStudentProgram = async (req, res, next) => {
  const program = await Program.find({ studentId: req.body.id })
    .populate("semesterId")
    .populate("sessionId")
    .populate("departmentId")
    .populate("studentId")
    .populate("teacherId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.AuthStudentSemesterCourse = async (req, res, next) => {
  if (!req.body.semesterId) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    const semester = await Semester.find({ _id: req.body.semesterId })
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
  }

};
exports.AuthStudentTeacher = async (req, res, next) => {
  if (!req.body.id) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    const course = await Course.find({ studentId: req.body.id })
      .populate("teacherId")
      .populate("studentId")
      .exec((err, data) => {
        if (err) {
          throw err;
        }
        res.json(data);
      });
  }

};
exports.AuthStudentDepartment = async (req, res, next) => {
  if (!req.body.id) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    const depart = await Depart.find({ studentId: req.body.id })

      .populate("programId")
      .populate("sessionId")
      .populate("studentId")
      .populate("teacherId")
      .exec((err, data) => {
        if (err) {
          throw err;
        }
        res.json(data);
      });
  }

};

exports.AuthNonEvaluateCourse = async (req, res, next) => {
  if (!req.body.id) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    const course = await Course.find({ isCourse: req.body.id })

      .populate("teacherId")
      .populate("studentId")
      .exec((err, data) => {
        if (err) {
          throw err;
        }
        res.json(data);
      });
  }

};