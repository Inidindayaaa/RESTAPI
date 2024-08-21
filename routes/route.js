import express from "express";
import {createMahasiswa, getMahasiswa, getMahasiswaBynim, updateMahasiswa, } from "../controller/mahasiswaController.js";

const router = express.Router()

router.get("/", getMahasiswa)
router.get("/find", getMahasiswaBynim)
router.post("/create", createMahasiswa)
router.put("/update", updateMahasiswa)



export default router;