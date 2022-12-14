const teacher = require("../../models/Teacher");
const session = require("../../models/Session");
const program = require("../../models/Program");
const semester = require("../../models/Semester");
const section = require("../../models/Section");
const department = require("../../models/Department");
const student = require("../../models/Student");
const course = require("../../models/Course");

exports.register = async (req, res, next) => {
  try{
    const { email, password, phone, u_id, name } = req.body;
    const existingUserU = await student.findOne({ u_id: u_id });
    const existingUser = await student.findOne({ email: email });
    const existingUserPhone = await teacher.findOne({ phone: phone });
    const existingUserU1 = await teacher.findOne({ u_id: u_id });
    const existingUser1 = await teacher.findOne({ email: email });
    const existingUserPhone1 = await teacher.findOne({ phone: phone });
    var term = req.body.u_id;
    var user = new RegExp(/[A-Z]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
    var re = new RegExp(/[TEC]{3,}-[0-9]{2,2}[FS]-[0-9]{3,3}/gm);
    var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/gm);
    if (!email || !password || !phone || !u_id || !name) {
      res.status(400).json({ error: "add all feilds" });
    } else if (password.length < 5) {
      return res
        .status(400)
        .json({ error: "The password needs to be at least 5 characters long." });
    } else if (existingUser || existingUser1) {
      return res
        .status(400)
        .json({ error: "An account with this email already exists." });
    } else if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ error: "Invalid email." });
    } else if (existingUserU || existingUserU1) {
      return res
        .status(400)
        .json({ error: "An account with this University Id already exists." });
    } else if (existingUserPhone || existingUserPhone1) {
      return res
        .status(400)
        .json({ error: "An account with this Phone Number already exists." });
    } else if (re.test(term)) {
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        u_id: req.body.u_id,
        phone: req.body.phone,
        isTeacher: true,
      };
      const Teacher = new teacher(data);
      await Teacher.save();
      res.status(200).json(Teacher);
    } else if (user.test(term)) {
  
      const Student = new student(req.body);
      await Student.save();
  
  
      res.status(200).json(Student);
  
    } else {
      return res.status(400).json({ error: "ID isnot valid" });
    }
  }catch(error){
    return next(error);
  }
 
};
exports.extendedRegister = async (req, res, next) => {

  const { deptId, studentId, teacherId, programId, semesterId, sessionId } = req.body;
  console.log(req.body)
  if (!deptId || !programId || !sessionId) {
    console.log(req.body)
    return res
      .status(400)
      .json({ error: "Add All Feilds" });
  } else {

    if (teacherId) {

      const Teacher = await teacher.findById({ _id: teacherId });
      Teacher.deptId.push(req.body.deptId);
      Teacher.updateOne({ isVerified: true }, (error, index) => {
        if (error) {
          return next(error);
        } else {
          res.json(index);
        }
      });
      await Teacher.save();

      const Depart = await department.findById({ _id: deptId });
      Depart.teacherId.push(teacherId);
      await Depart.save();

      Teacher.programId.push(req.body.programId);
      await Teacher.save();

      const Program = await program.findById({ _id: programId });
      Program.teacherId.push(teacherId);
      await Program.save();


      const Session = await session.findById({ _id: sessionId });
      Session.teacherId.push(teacherId);
      await Session.save();
      res.status(200).json({ message: "registerd" });
    } else {
      const Student = await student.findById({ _id: req.body.studentId });
      Student.deptId.push(req.body.deptId);
      Student.updateOne({ isVerified: true }, (error, index) => {
        if (error) {
          return next(error);
        }
      });
      await Student.save();

      const Depart = await department.findById({ _id: deptId });
      Depart.studentId.push(req.body.studentId);
      await Depart.save();


      Student.programId.push(programId);
      await Student.save();

      const Program = await program.findById({ _id: programId });
      Program.studentId.push(req.body.studentId);
      await Program.save();

      Student.semesterId.push(semesterId);
      await Student.save();

      Student.sessionId.push(sessionId);
      await Student.save();

      const Session = await session.findById({ _id: sessionId });
      Session.studentId.push(req.body.studentId);
      await Session.save();


      res.status(200).json({ message: "registerd" });

    }
  }
};
exports.addCourse = async (req, res, next) => {
  const { courseId, studentId, teacherId } = req.body;
  if (!courseId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {

    if (teacherId) {
      const Teacher = await teacher.findById({ _id: teacherId });

      if (Teacher.courseId.includes(req.body.courseId)) {
        return res
          .status(400)
          .json({ error: "Already Enrolled In This Course" });
      } else {
        Teacher.courseId.push(req.body.courseId);
        await Teacher.save();

        const Course = await course.findById({ _id: courseId });
        Course.teacherId.push(teacherId);
        await Course.save();
        res.status(200).json({ courseId });
      }

    } else {

      const Student = await student.findById({ _id: studentId });

      if (Student.courseId.includes(req.body.courseId)) {
        return res
          .status(400)
          .json({ error: "Already Enrolled In This Course" });
      } else {
        Student.courseId.push(req.body.courseId);
        await Student.save();

        const Course = await course.findById({ _id: courseId });
        Course.studentId.push(studentId);
        await Course.save();
        res.status(200).json({ courseId });
      }

    }

  }
};
exports.addSemester = async (req, res, next) => {
  const { semesterId, studentId, teacherId } = req.body;
  if (!semesterId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const Student = await student.findById({ _id: studentId });
    Student.semesterId.push(semesterId);
    await Student.save();

    const Semester = await semester.findById({ _id: semesterId });
    Semester.studentId.push(studentId);
    await Semester.save();
  }
};
exports.addSection = async (req, res, next) => {
  const { sectionId, studentId } = req.body;
  if (!sectionId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    const Student = await student.findById({ _id: studentId });
    Student.sectionId.push(sectionId);
    await Student.save();

    const Section = await section.findById({ _id: sectionId });
    Section.studentId.push(studentId);
    await Section.save();
  }
};
exports.addSession = async (req, res, next) => {
  const { sessionId, studentId, teacherId } = req.body;

  if (!sessionId) {
    return res
      .status(400)
      .json({ error: "An account with this email already exists." });
  } else {
    res.status(200).json({ message: "registerd" });
    if (teacherId) {
      const Teacher = await teacher.findById({ _id: teacherId });
      Teacher.sessionId.push(req.body.sessionId);
      await Teacher.save();
      const Session = await session.findById({ _id: sessionId });
      Session.teacherId.push(teacherId);
      await Session.save();
    } else {
      const Student = await student.findById({ _id: studentId });
      Student.sessionId.push(sessionId);
      await Student.save();

      const Session = await session.findById({ _id: sessionId });
      Session.studentId.push(studentId);
      await Session.save();
    }
  }
};
