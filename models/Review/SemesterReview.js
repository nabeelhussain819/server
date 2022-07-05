const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SemesterCommentSchema = new mongoose.Schema(
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

const semesterComment = mongoose.model(
  "SemesterComment",
  SemesterCommentSchema
);

module.exports = semesterComment;
