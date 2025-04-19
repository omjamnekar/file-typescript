import cloudinary from "../config/cloudinary";
import File from "../models/file.model";

import { Request, Response } from "express";
import fs from "fs";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });

    const newFile = await File.create({
      fileName: req.file.originalname,
      fileUrl: uploadResult.secure_url,
      fileType: req.file.mimetype,
    });

    fs.unlinkSync(req.file.path);

    res.status(200).json({ message: "Uploaded", data: newFile });
  } catch (err) {
    res.status(500).json({ error: "upload fail", details: err });
  }
};
