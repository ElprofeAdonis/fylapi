import express from "express";
import user from "../controllers/user";

const router = express.Router();

// rutas van aca

router.post("/rcuentabancaria", user.createRcuentabancaria);

router.get("/rcuentabancaria/:id_r", user.readRcuentabancaria);

module.exports = router;
