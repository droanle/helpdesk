const mongoose = require("mongoose");

class ClientClass {}

const schema = mongoose.Schema(
  {
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
    name: String,
    dateOfBirth: Date,
    city: String,
  },
  { collection: "Clients" }
);

schema.loadClass(ClientClass);

module.exports = mongoose.model("Client", schema);
