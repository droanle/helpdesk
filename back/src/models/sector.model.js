const mongoose = require("mongoose");

class SectorClass {}

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    responseSpeed: [
      {
        priority: Number,
        value: Number,
      },
    ],
    responseNumber: [
      {
        priority: Number,
        value: Number,
      },
    ],
  },
  { collection: "Sectors" }
);

schema.loadClass(SectorClass);

module.exports = mongoose.model("Sector", schema);
