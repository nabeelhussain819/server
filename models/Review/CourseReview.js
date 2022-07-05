const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CourseCommentSchema = new mongoose.Schema(
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
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const courseComment = mongoose.model("CourseComment", CourseCommentSchema);

module.exports = courseComment;
