const mongoose = require("mongoose");

class TicketClass {}

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    creater: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "Client",
    },
    creationDate: {
      type: Date,
      require: true,
      default: Date.now,
    },
    closingDate: {
      type: Date,
    },
    priority: {
      type: Number,
    },
    status: {
      type: Number,
      require: true,
      default: 0,
    },
    relatedUsers: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    sectors: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "Sector",
    },
    discourse: [
      {
        name: String,
        content: mongoose.Mixed,
        date: Date,
      },
    ],
  },
  { collection: "Tickets" }
);

schema.loadClass(TicketClass);

module.exports = mongoose.model("Ticket", schema);
