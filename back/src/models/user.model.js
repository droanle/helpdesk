const mongoose = require("mongoose");

class UserClass {}

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: String,
    nivel: Number,
    relatedSectors: {
      type: mongoose.Types.ObjectId,
      ref: "Sector",
    },
  },
  { collection: "Users" }
);

schema.loadClass(UserClass);

module.exports = mongoose.model("User", schema);
