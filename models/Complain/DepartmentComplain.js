const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DepartmentComplainSchema = new mongoose.Schema(
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

const departmentComplain = mongoose.model(
  "DepartmentComplain",
  DepartmentComplainSchema
);

module.exports = departmentComplain;
