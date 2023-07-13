const depart = require("../../models/Department");
const user = require("../../models/Student");

exports.createDept = async (req, res, next) => {
  const data = {
    name: req.body.name,
    studentId: req.body.studentId,
    teacherId: req.body.teacherId,
    code: req.body.code,
    fileName: process.env.APP_URL + req.file.filename,
    description: req.body.description,
  };
  if (!data || !req.body.code) {
    res.status(400).json({ error: "add all feilds" });
  }
  depart.create(data, (error, index) => {
    if (error) {
      return next(error);
    } else {
      res.json(index);
    }
  });
};
exports.getDepartment = async (req, res, next) => {
  const department = await user.findById({ _id: req.body.studentId });
  console.log(department);
  if (!department) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    res.json(department);
  }
};
exports.deleteDepartment = async (req, res, next) => {
  const department = await depart.findById({ _id: req.body.id });
  if (!department) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    department.delete();
    res.status(200).json({ message: "Done" });
  }
};
