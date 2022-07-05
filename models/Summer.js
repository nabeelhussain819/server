const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const SummerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
    ],
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
const summer = mongoose.model("Summer", SummerSchema);

module.exports = summer;
