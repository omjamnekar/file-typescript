import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  fileName: String,
  fileUrl: String,
  fileType: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("File", fileSchema);
