// src/utils/multer.ts
import multer from "multer";

const storage = multer.diskStorage({}); // we don’t save locally
const upload = multer({ storage });

export default upload;
