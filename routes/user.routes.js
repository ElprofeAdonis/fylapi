import express from "express";
import user from "../controllers/user";

const router = express.Router();

// rutas rcuentabancaria

router.post("/rcuentabancaria", user.createRcuentabancaria);

router.get("/rcuentabancaria/:id_r", user.readRcuentabancaria);

router.put("/rcuentabancaria/:id_t", user.updateRcuentabancaria);

// rutas de montoregistro

router.post("/montoregistro", user.createMontoregistro);

router.get("/montoregistro/:id", user.readMontoregistro);

router.put("/montoregistro/:id", user.updateMontoregistro);

// rutas gastoregistro

router.post("/gastoregistro", user.createGastoregistro);

router.get("/gastoregistro/:id_g", user.readGastoregistro);

router.put("/gastoregistro/:id_t", user.updateGastoregistro);
module.exports = router;
