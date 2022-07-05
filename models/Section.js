const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
      },
    ],
    rating: [
      {
        type: Number,
        required: false,
      },
    ],
    semesterId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Semes",
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

const section = mongoose.model("Section", SectionSchema);

module.exports = section;
