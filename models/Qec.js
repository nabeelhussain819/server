const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QecSchema = new Schema(
  {
    term: {
      type: String,
      required: true,
    },
    rating:{
        type: Number,
        required: true,
      },
      description:{
        type: String,
        required: true,
      }, 
      star:{
        type: Number,
        required: true,
      }, 
      grade:{
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
    teacherId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
        required: false,
      },
    ],
    courseId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: false,
      },
    ],
  },
  { timestamps: true }
);
module.exports =
  mongoose.models.Qec || mongoose.model("Qec", QecSchema);
