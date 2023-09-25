import express from "express";
import upload from "../lib/multer";
import FileController from "../controller/FileController";

const FileRouter = express.Router();

FileRouter.post("/upload", upload.single("file"), FileController.UPLOAD_FILE);

FileRouter.get("/getfile/:id", FileController.GET_SINGLE_FILE);

FileRouter.delete("/deleteAll", FileController.DELETE_ALL_FILES);

FileRouter.delete("/delete/:id", FileController.DELETE_SINGLE_FILES);

export default FileRouter