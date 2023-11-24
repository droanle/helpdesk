const mongoose = require("mongoose");

class ClientClass {}

const schema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      require: true,
      default: true,
    },
    dateOfBirth: Date,
    city: String,
  },
  { collection: "Clients" }
);

schema.loadClass(ClientClass);

module.exports = mongoose.model("Client", schema);
