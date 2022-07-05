const teacher = require("../../Models/Teacher");

exports.Commend = async (req, res) => {
 
  try {
    const { isHelpfull, isFriendly, isProfessional, teacherId } = req.body;

    if (
      req.body.isProfessional == [] ||
      req.body.isFriendly == [] ||
      req.body.isHelpfull == []
    ) {
      res.status(400).json({ success: false, message: "ooo" });
    } else {
      const Teacher = await teacher.findById({ _id: req.body.teacherId });
    
      Teacher.isHelpfull.push(req.body.isHelpfull);
      Teacher.isFriendly.push(req.body.isFriendly);
      Teacher.isProfessional.push(req.body.isProfessional);
      await Teacher.save();
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
