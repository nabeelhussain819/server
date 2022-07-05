const complain = require("../../Models/Complain/DepartmentComplain");
const complain1 = require("../../Models/Complain/CourseComplain");
const complain2 = require("../../Models/Complain/TeacherComplain");
const complain3 = require("../../Models/Complain/ProgramComplain");
const complain4 = require("../../Models/Complain/SemesterComplain");
exports.departComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    departmentId: req.body.departmentId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.courseComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    courseId: req.body.courseId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain1.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.teacherComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    teacherId: req.body.teacherId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain2.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.programComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    programId: req.body.programId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain3.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.semesterComplain = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    semesterId: req.body.semesterId,
    studentId: req.body.studentId,
  };
  if (!data) {
    res.status(400).json({ error: "add all feilds" });
  }
  complain4.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.getDeptComplain = async (req, res, next) => {
  complain
    .find({})
    .populate("departmentId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.getProgComplain = async (req, res, next) => {
  complain3
    .find({})
    .populate("programId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.getSemComplain = async (req, res, next) => {
  complain4
    .find({})
    .populate("semesterId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.getTechComplain = async (req, res, next) => {
  complain2
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
exports.getCourseComplain = async (req, res, next) => {
  complain1
    .find({})
    .populate("courseId")
    .populate("studentId")
    .exec((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
};
exports.deleteComplains = async (req, res, next) => {
  const Complain = await complain.findById({ _id: req.body.id });
  const Complain1 = await complain1.findById({ _id: req.body.id });
  const Complain2 = await complain2.findById({ _id: req.body.id });
  const Complain3 = await complain3.findById({ _id: req.body.id });
  const Complain4 = await complain4.findById({ _id: req.body.id });
  if (Complain) {
    Complain.delete();
    res.status(200).json({ message: "Done" });
  } else if (Complain1) {
    Complain1.delete();
    res.status(200).json({ message: "Done" });
  } else if (Complain2) {
    Complain2.delete();
    res.status(200).json({ message: "Done" });
  } else if (Complain3) {
    Complain3.delete();
    res.status(200).json({ message: "Done" });
  } else if (Complain4) {
    Complain4.delete();
    res.status(200).json({ message: "Done" });
  } else {
    res.status(400).json({ error: "notFound" });
  }
};
