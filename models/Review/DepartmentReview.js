const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DepartmentCommentSchema = new mongoose.Schema(
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
    departmentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const departmentComment = mongoose.model(
  "DepartmentComment",
  DepartmentCommentSchema
);

module.exports = departmentComment;
