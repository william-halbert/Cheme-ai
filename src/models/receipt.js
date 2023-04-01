const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  // ... receipt fields
});

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = Receipt;
