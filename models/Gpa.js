const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GPASchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
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
module.exports =
  mongoose.models.GPA || mongoose.model("GPA", GPASchema);
