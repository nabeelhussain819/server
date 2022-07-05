const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProgramComplainSchema = new mongoose.Schema(
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
    programId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const programComplain = mongoose.model(
  "ProgramComplain",
  ProgramComplainSchema
);

module.exports = programComplain;
