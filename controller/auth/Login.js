const student = require("../../models/Student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const teacher = require("../../models/Teacher");

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
      if (userLogin.isVerified == false) {
        res.status(400).json({ message: "Verfy Your Account First" });
      } else {
        token = await userLogin.generateAuthToken();
        if (password !== userLogin.password) {
          console.log(userLogin)
          res.status(400).json({ message: "Wrong Passord" });
        } else {
          const token = jwt.sign({ _id: student._id }, process.env.KEY);
          const name = userLogin;
          res.send({
            token,
            name,
          });
        }
      }

    } else if (teacherLogin) {
      const isMatch = await bcrypt.compare(password, teacherLogin.password);
      token = await teacherLogin.generateAuthToken();
      if (teacherLogin.isVerified == false) {
        res.status(400).json({ message: "Verfy Your Account First" });
      } else {
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
      }

    } else if (email == "admin@admin.com" && password == "admin@123") {

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
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.check = async (req, res) => {
  try {
    const { email, u_id } = req.body;

    const Student = await student.findOne({ email: req.body.email })
    const Student1 = await student.findOne({ u_id: req.body.u_id })
    if (!email || !u_id) {
      res.status(400).json({ error: "add all feilds" });
    } else {
      if (!Student) {
        res.status(400).json({ error: "email not Found" });
      } else if (!Student1) {
        res.status(400).json({ error: "University ID doesn't Exist" });
      } else if (Student1.email == req.body.email) {

        res.status(200).json(Student._id);
      } else {
        res.status(400).json({ error: "User doesn't Exist" });
      }
    }

  } catch (error) {
    res.status(400).json({ error: error });
  }
}
exports.forget = async (req, res) => {
  try {
    const { pass } = req.body;
    const Student = await student.findById({ _id: req.body.id })

    if (!pass) {
      res.status(400).json({ error: "add Password" });
    } else {
      if (!Student) {
        res.status(400).json({ error: "User Not Found" });
      } else {
        Student.updateOne({ password: req.body.pass }, (error, index) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).json({ message: "Password Updated SuccessFully" });
          }
        });
      }

    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
}