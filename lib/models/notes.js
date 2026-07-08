import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    className: {
      type: String,
      required: true,
      enum: ["9th Class", "10th Class", "11th Class", "12th Class"],
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      required: true,
      enum: ["Uploaded", "Coming Soon"],
      default: "Coming Soon",
    },
    pdfURL: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);