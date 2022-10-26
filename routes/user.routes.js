import express from "express";
import user from "../controllers/user";

const router = express.Router();

// rutas de montoregistro


router.post("/montoregistro", user.createMontoregistro);

router.get("/montoregistro/:id", user.readMontoregistro);

router.put("/montoregistro/:id", user.updateMontoregistro);

module.exports = router;
