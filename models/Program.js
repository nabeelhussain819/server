const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    sessionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Session",
      },
    ],
    departmentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
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
  mongoose.models.Program || mongoose.model("Program", ProgramSchema);
