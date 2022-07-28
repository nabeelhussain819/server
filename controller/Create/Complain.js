const Complain = require("../../models/Complain/Report");
exports.report = async (req, res, next) => {
  const data = {
    complain: req.body.complain,
    courseId: req.body.courseId ? req.body.courseId : null,
    studentId: req.body.studentId,
    departId: req.body.departId ? req.body.departId : null,
    issue: req.body.issue,
    teacherId: req.body.teacherId ? req.body.teacherId : null,
  };
  Complain.create(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};

exports.reply = async (req, res, next) => {
  const data = {
    complainId: req.body.complainId,
    reply: req.body.reply,
  };
  const complain = Complain.findById({ _id: req.body.complainId });
  complain.updateOne(data, (error, index) => {
    if (error) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      res.status(200).json({ message: "add all feilds" });
    }
  });
};
exports.deleteComplains = async (req, res, next) => {
  const complain = await Complain.findById({ _id: req.body.id });
  if (!complain) {
    res.status(400).json({ error: "add all feilds" });
  } else {
    complain.delete();
    res.status(200).json({ message: "Done" });
  }
};
// exports.deleteComplains = async (req, res, next) => {
//   const Complain = await complain.findById({ _id: req.body.id });
//   const Complain1 = await complain1.findById({ _id: req.body.id });
//   const Complain2 = await complain2.findById({ _id: req.body.id });
//   const Complain3 = await complain3.findById({ _id: req.body.id });
//   const Complain4 = await complain4.findById({ _id: req.body.id });
//   if (Complain) {
//     Complain.delete();
//     res.status(200).json({ message: "Done" });
//   } else if (Complain1) {
//     Complain1.delete();
//     res.status(200).json({ message: "Done" });
//   } else if (Complain2) {
//     Complain2.delete();
//     res.status(200).json({ message: "Done" });
//   } else if (Complain3) {
//     Complain3.delete();
//     res.status(200).json({ message: "Done" });
//   } else if (Complain4) {
//     Complain4.delete();
//     res.status(200).json({ message: "Done" });
//   } else {
//     res.status(400).json({ error: "notFound" });
//   }
// };
