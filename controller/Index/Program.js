const program = require("../../models/Program");

exports.readProgram = async (req, res) => {
  program
    .find({})
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
exports.editProgram = async (req, res, next) => {
  const Program = await program.findById({ _id: req.body.id });
  if (req.body.name == "") {
    res.status(400).json({ error: "add all feilds" });
  } else {
    if (!Program) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      Program.update(req.body, (error, index) => {
        if (error) {
          return next(error);
        } else {
          res.json(index);
        }
      });

    }
  }

};