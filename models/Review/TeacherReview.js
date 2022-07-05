const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TeacherCommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
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

const teacherComment = mongoose.model("TeacherComment", TeacherCommentSchema);

module.exports = teacherComment;
