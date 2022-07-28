const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettingSchema = new Schema(
  {
    Evaluate: {
      type: Boolean,

      required: false,
    },
    Course:
    {
      type: Boolean,
      required: false,
    },

    Semester:
    {
      type: Boolean,

      required: false,
    },
    Term:
    {
      type: String,

      required: false,
    },

  },
  { timestamps: true }
);
module.exports =
  mongoose.models.Setting || mongoose.model("Setting", SettingSchema);
