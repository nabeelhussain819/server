const student = require("../../Models/Student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const teacher = require("../../Models/Teacher");

exports.login = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "add all feilds" });
    }

    const userLogin = await student
      .findOne({ email: req.body.email })
    const teacherLogin = await teacher
      .findOne({ email: req.body.email })
    if (userLogin) {
     
      console.log(password == userLogin.password)
      token = await userLogin.generateAuthToken();
      if (password !== userLogin.password) {
        res.status(400).json({ message: "Wrong Passord" });
      } else {
        const token = jwt.sign({ _id: student._id }, process.env.KEY);
        const name = userLogin;
        res.send({
          token,
          name,
        });
      }
    } else if (teacherLogin) {
      const isMatch = await bcrypt.compare(password, teacherLogin.password);
      token = await teacherLogin.generateAuthToken();
      if (password !== teacherLogin.password) {
        res.status(400).json({ message: "Invalid Credentials" });
      } else {
        const token = jwt.sign({ _id: teacher._id }, process.env.KEY);
        const name = teacherLogin;
        res.send({
          token,
          name,
        });
      }
    }else if (email == "admin@admin.com" && password == "admin@123") {
     
      const adminLogin = {
        email: "admin@admin.com",
        name: "admin",
      };
      const token = "admin";
      const name = adminLogin;
      res.send({
        token,
        name,
      });
    }  else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};
