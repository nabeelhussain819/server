const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    //   get: (image) => { 
    //     return `${process.env.APP_URL}/${image}`;
    // },
    },
    sessionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Session",
        required: false,
      },
    ],
    programId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: false,
      },
    ],
    rating: [
      {
        type: Number,
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

const department = mongoose.model("Department", DepartmentSchema);

module.exports = department;
