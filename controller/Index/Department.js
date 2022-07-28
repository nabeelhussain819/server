const depart = require("../../models/Department");

exports.readDept = async (req, res, next) => {
  depart
    .find({})
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
};
exports.editDepart = async (req, res, next) => {
  const department = await depart.findById({ _id: req.body.id });
  if(req.body.name =="" || req.body.code == ""){
    res.status(400).json({ error: "add all feilds" });
  }else{
    if (!department) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      department.update(req.body, (error, index) => {
        if (error) {
          return next(error);
        } else {
          res.json(index);
        }
      });
  
    }
  }
  
};