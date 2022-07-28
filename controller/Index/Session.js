const Sessions = require("../../models/Session");

exports.session = async (req, res) => {
  Sessions.find({})
    .populate("programId")
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
exports.editSession = async (req, res, next) => {
  const session = await Sessions.findById({ _id: req.body.id });
  if(req.body.name =="" ){
    res.status(400).json({ error: "add all feilds" });
  }else{
    if (!session) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      session.update(req.body, (error, index) => {
        if (error) {
          return next(error);
        } else {
          res.json(index);
        }
      });
  
    }
  }
  
};