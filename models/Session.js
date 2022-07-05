const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    departmentId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
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

const sessions = mongoose.model("Session", SessionSchema);

module.exports = sessions;
