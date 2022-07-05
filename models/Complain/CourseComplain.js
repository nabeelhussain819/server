const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CourseComplainSchema = new mongoose.Schema(
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

const courseComplain = mongoose.model("CourseComplain", CourseComplainSchema);

module.exports = courseComplain;
