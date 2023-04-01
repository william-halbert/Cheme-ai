const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
    // Add a validator if needed, e.g. for card number format
  },
  // ... other credit card fields
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
