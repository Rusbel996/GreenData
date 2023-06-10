const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true,},
    quantity: { type: Number, required: true, trim: true,},
    information: { type: String, required: true, trim: true },
    start: { type: Date, required: true, trim: true },
    expiration: { type: Date, required: true, trim: true },
    recommendation: { type: String, default: ""},
    videos: {type: [String], default: []},
    picture: {
      url: {
        type: String,
        required: true,
      },
      public_id: { type: String, default: "" }
    }
  },
  {
    timestamps: true
  }
);

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  }
});

module.exports = model("Product", productSchema);