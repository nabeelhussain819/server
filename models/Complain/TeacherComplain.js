const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TeacherComplainSchema = new mongoose.Schema(
  {
    complain: {
      type: String,
      required: true,
    },
    studentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: false,
      },
    ],
    teacherId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const teacherComplain = mongoose.model(
  "TeacherComplain",
  TeacherComplainSchema
);

module.exports = teacherComplain;
