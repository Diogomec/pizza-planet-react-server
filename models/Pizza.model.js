const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    sauce: String,
    ingredients: [String],
    sizes: [
      {
        name: String,
        price: Number
      }
    ],
    description: String,
    imageUrl: String
  },
  {   
    timestamps: true
  }
);

const Pizza = model("Pizza", pizzaSchema);

module.exports = Pizza;
