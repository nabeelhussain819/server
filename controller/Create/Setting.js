const setting = require("../../models/Setting");
exports.updateSetting = async (req, res) => {
    const data = {
        Course: !req.body.course ? setting.Course : req.body.course,
        Semester: !req.body.semester ? setting.Semester : req.body.semester,
        Evaluate: !req.body.evaluate ? setting.Evaluate : req.body.evaluate,
        Term: !req.body.term ? setting.Term : req.body.term,
    };
    const Change = await setting.findOne({});
    Change.updateOne(data, (error, index) => {
        if (error) {
            res.status(400).json({ message: "Setting Have Been Changed" });
        } else {
            res.status(200).json({ message: "Setting Have Been Changed" });
        }
    });
};
exports.readSetting = async (req, res) => {
    setting
        .find({})
        .exec((err, data) => {
            if (err) {
                throw err;
            }
            res.json(data);
        });
};