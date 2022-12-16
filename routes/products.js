import express from "express"
import { getAllProd, getProdById, postProd } from "../controllers/products.js"

const router = express.Router()

router.get("/", getAllProd)
router.get("/:id", getProdById)
router.post("/", postProd)

export default router