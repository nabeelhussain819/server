const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const multer = require("multer");
const {
  register,
  extendedRegister,
  addCourse,
} = require("../controller/auth/Register");
const { createCourse, deleteCourse } = require("../controller/Create/Course");
const {
  createDept,
  getDepartment,
  deleteDepartment,
} = require("../controller/Create/Department");
const {
  createProgram,
  deleteProgram,
} = require("../controller/Create/Program");
const { createSection } = require("../controller/Create/Section");
const { createSemes } = require("../controller/Create/Semester");
const {
  createSession,
  deleteSession,
} = require("../controller/Create/Session");
const { readCourse, editCourse } = require("../controller/Index/Course");
const { readDept, editDepart } = require("../controller/Index/Department");
const { readProgram, editProgram } = require("../controller/Index/Program");
const { section } = require("../controller/Index/Section");
const {
  readSemes,
  deleteSemester,
  editSemester,
} = require("../controller/Index/Semester");
const { session, editSession } = require("../controller/Index/Session");
const { student } = require("../controller/Index/Student");
const { teacher, deleteTeacher } = require("../controller/Index/Teacher");
const { login, check, forget } = require("../controller/auth/Login");
const { Commend } = require("../controller/Create/teacher");
const { report, reply, deleteComplains } = require("../controller/Create/Complain");
const {
  departComment,
  teacherComment,
  courseComment,
  semesterComment,
  getTechComment,
  getSemComment,
  getDeptComment,
  getCourseComment,
  deleteComments,
} = require("../controller/Create/Comment");
const {
  createQec,
  readQec,
  readMidQec,
  readFinalQec,
} = require("../controller/Create/Qec");
const { createCgpa, readGpa } = require("../controller/Create/Gpa");
const {
  AuthUser,
  AuthQec,
  AuthTeacher,
  AuthTeacherStudents,
  AuthTeacherQec,
  AuthStudentRating,
  AuthStudentProgram,
  AuthStudentSemesterCourse,
  AuthStudentTeacher,
  AuthStudentDepartment,
  AuthNonEvaluateCourse,
  AuthEvaluateCourse,
  AuthTeacherComment,CheckEvaluatedCourse,TeacherCheckEvaluatedCourse,CourseById,AuthStudentRating1
} = require("../controller/SpecificData/AuthUser");
const { getReport } = require("../controller/Index/Complain");
const { updateSetting, readSetting } = require("../controller/Create/Setting");
const { uploadImg } = require("../helper/uploadFile");



app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
// for authentication
router.route("/signup").post(register);
router.route("/signin").post(login);
router.route("/check").post(check);
router.route("/forget").post(forget);
router.route("/extendedRegister").post(extendedRegister);
router.route("/add-course").post(addCourse);
// getting users data
router.route("/students").get(student);
router.route("/teachers").get(teacher);
router.route("/commend").post(Commend);
// for sessions
router.route("/sessions").get(session);
router.route("/create-session").post(createSession);
router.route("/edit-sessions").post(editSession);
router.route("/delete-sessions").post(deleteSession);
//for department
router.route("/create-department").post(uploadImg.single("fileName"),createDept);
router.route("/delete-departments").post(deleteDepartment);
router.route("/edit-departments").post(editDepart);
router.route("/departments").get(readDept);
router.route("/get-depart").post(getDepartment);
// for semester
router.route("/create-semester").post(createSemes);
router.route("/delete-semesters").post(deleteSemester);
router.route("/semesters").get(readSemes);
// for course
router.route("/create-course").post(createCourse);
router.route("/delete-courses").post(deleteCourse);
router.route("/edit-courses").post(editCourse);
router.route("/courses").get(readCourse);
// for program
// router.route("/create-program", upload.single("image")).post(createProgram);
router.route("/programs").get(readProgram);
router.route("/delete-programs").post(deleteProgram);
router.route("/edit-programs").post(editProgram);
router.route("/create-program").post(createProgram);
// for section
router.route("/create-section").post(createSection);
router.route("/sections").get(section);
// for Complain
router.route("/reply").post(reply);
router.route("/complain").post(report);
router.route("/delete-complains").post(deleteComplains);
router.route("/get-complain").get(getReport);
// router.route("/delete-complains").post(deleteComplains);
// for Comment
router.route("/comment-departments").post(departComment);
router.route("/comment-teachers").post(teacherComment);
router.route("/comment-courses").post(courseComment);
router.route("/comment-semesters").post(semesterComment);
router.route("/comments-departments").get(getDeptComment);
router.route("/comments-semesters").get(getSemComment);
router.route("/comments-courses").get(getCourseComment);
router.route("/comments-teachers").get(getTechComment);
router.route("/delete-comments").post(deleteComments);
// for Qec
router.route("/qec-results").get(readQec);
router.route("/qec-mid-results").get(readMidQec);
router.route("/qec-final-results").get(readFinalQec);
router.route("/qec").post(createQec);
// for gpa
router.route("/dd").get(readGpa);
router.route("/gpaRate").post(createCgpa);

// Specific Data
router.route("/delete-teachers").post(deleteTeacher);
router.route("/AuthUser").post(AuthUser);
router.route("/AuthTeacher").post(AuthTeacher);
router.route("/AuthQec").post(AuthQec);
router.route("/AuthTeacherComment").post(AuthTeacherComment);
router.route("/AuthTeacher").post(AuthTeacher);
router.route("/AuthStudentRating").post(AuthStudentRating);
router.route("/AuthTeacherQec").post(AuthTeacherQec);
router.route("/AuthTeacherStudent").post(AuthTeacherStudents);
router.route("/AuthStudentProgram").post(AuthStudentProgram);
router.route("/AuthStudentSemesterCourse").post(AuthStudentSemesterCourse);
router.route("/AuthStudentTeacher").post(AuthStudentTeacher);
router.route("/AuthStudentDepartment").post(AuthStudentDepartment);
router.route("/AuthNonEvaluateCourse").post(AuthNonEvaluateCourse);
router.route("/AuthEvaluateCourse").post(AuthEvaluateCourse);
router.route("/CheckEvaluatedCourse").post(CheckEvaluatedCourse);
router.route("/TeacherCheckEvaluatedCourse").post(TeacherCheckEvaluatedCourse);
router.route("/AuthStudentRating1").get(AuthStudentRating1);

router.route("/CourseById").post(CourseById);
//  Setting
router.route("/setting").post(updateSetting);
router.route("/readSetting").get(readSetting);
// admin
module.exports = router;
