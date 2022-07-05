const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SemesterComplainSchema = new mongoose.Schema(
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
    semesterId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Semes",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const semesterComplain = mongoose.model(
  "SemesterComplain",
  SemesterComplainSchema
);

module.exports = semesterComplain;
