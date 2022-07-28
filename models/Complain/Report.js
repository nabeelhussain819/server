const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ComplainSchema = new mongoose.Schema(
  {
    issue: {
      type: String,
      required: false,
    },
    complain: {
      type: String,
      required: false,
    },
    studentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: false,
      },
    ],
    departId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: false,
        default:null
      },
    ],
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
        default:null
      },
    ],
    reply: 
      {
        type: String,
        required: false,
        default:null
      },
    
    teacherId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: false,
        default:null
      },
    ],
  },
  { timestamps: true }
);

const Complain = mongoose.model(
  "Complain",
  ComplainSchema
);

module.exports = Complain;
