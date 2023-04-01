const mongoose = require("mongoose");

const premiumProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // ... other premium provider fields
});

const PremiumProvider = mongoose.model(
  "PremiumProvider",
  premiumProviderSchema
);

module.exports = PremiumProvider;
