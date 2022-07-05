const section = require("../../Models/Section");
const semester = require("../../Models/Semester");

exports.createSection = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      departmentId: req.body.departmentId,
      semesterId: req.body.semesterId,
    };
    const Section = await new section(data);
    await Section.save();

    const Semester = await semester.findById({ _id: req.body.semesterId });
    Semester.sectionId.push(Section._id);
    await Semester.save();

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};
