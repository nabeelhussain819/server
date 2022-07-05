const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GPASchema = new Schema(
  {
    Rate: {
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
  mongoose.models.GPA || mongoose.model("GPA", GPASchema);
