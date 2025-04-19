# 📁 File Upload API

A simple API built with **TypeScript**, **Express.js**, and **Multer** to upload, store, and serve files (images or documents). Supports integration with **Cloudinary**/**Amazon S3** and **MongoDB** for real-world use cases.

---

## 🔧 Features

- Upload files (e.g., `.jpg`, `.png`, `.pdf`, etc.)
- Store uploaded files locally or optionally in Cloudinary/S3
- Access uploaded files via URL
- Extendable with MongoDB for file metadata

---

## 🚀 Tech Stack

- TypeScript
- Node.js & Express.js
- Multer (for file handling)
- MongoDB (optional for metadata)
- Cloudinary / Amazon S3 (optional for cloud storage)

---

## 📂 Project Structure

```
file-typescript/
│
├── assets/               # Local test files (images)
│   ├── goals.jpg         # Input file for upload
│   └── image.png         # Example of processed result
│
├── src/
│   ├── config/           # Config files (Mongo, Cloudinary)
│   ├── routes/           # API routes
│   ├── controllers/      # Upload logic
│   └── index.ts          # App entry point
```

---

## 📷 Input & Output Example

### Files in `assets/`:

- `goals.jpg`: Used as a **sample input image** to test the upload API.
- `image.png`: Example **output/result image** that might be generated after processing the input.

> These images help you simulate how the API behaves with real files — `goals.jpg` represents the file being uploaded, and `image.png` shows what a resulting image might look like after backend processing.

---

### Example
![goal image](./assets/image.png)

### Sample
![result](./assets/image.png)

## 🛠️ Setup & Run

```bash
npm install
npm run dev
```

> Make sure `assets/` contains the files you want to test with (e.g., `goals.jpg`).

---

## 📬 API Endpoints

### ✅ Upload File

**POST** `/api/upload`

**Headers:**
```
Content-Type: multipart/form-data
```

**Body (form-data):**
```
file: <select a file from assets/ e.g. goals.jpg>
```

**Sample Response:**
```json
{
  "filename": "goals.jpg",
  "url": "http://localhost:5000/uploads/goals.jpg"
}
```

---

## 📂 Example HTTP Request File (`upload.http`)

```http
### Upload a file
POST http://localhost:5000/api/upload
Content-Type: multipart/form-data

file=@assets/goals.jpg
```

---

## 📌 Use Case

This API is perfect for:

- Uploading and serving images in web/mobile apps
- Image classification or analysis pipelines
- File metadata storage
- Any project needing temporary or permanent file storage

---

## 💡 Future Improvements

- Add authentication
- Connect to MongoDB to track uploaded files
- Integrate image compression or resizing
- Add output generation logic (e.g., saving `image.png` from processing logic)

---

## 👨‍💻 Author

> Built with ❤️ by **Om Jamnekar**