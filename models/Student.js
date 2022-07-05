const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
mongoose.models = {};
const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    u_id: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    comment: [
      {
        type: String,
        required: false,
      },
    ],
    cgpaRate: [
      {
        type: Schema.Types.ObjectId,
        ref: "GPA",
        required: false,
      },
    ],
    sessionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Session",
        required: false,
      },
    ],
    sectionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
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
    rating: [
      {
        type: Number,
        required: false,
      },
    ],
    isTeacher: {
      type: Boolean,
      default: false,
    },
    deptId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
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
    programId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: false,
      },
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// StudentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
StudentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const student = mongoose.model("Student", StudentSchema);

module.exports = student;
