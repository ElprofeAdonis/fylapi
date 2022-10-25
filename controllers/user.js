import { json } from "express";
import pool from "../database/keys";

const user = {};

user.createRcuentabancaria = async (req, res) => {
  const { id, r_namebanco, r_numcuenta, r_url } = req.body;
  try {
    await pool.query(
      "INSERT INTO rcuentabancaria (r_id, r_namebanco,r_numcuenta, r_url) VALUES ($1, $2, $3, $4)",
      [id, r_namebanco, r_numcuenta, r_url]
    );
    res.status(200).json({
      message: "Se creo el registro cuenta bancariase creo con exito",
      user: {
        id,
        r_namebanco,
        r_numcuenta,
        r_url,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

user.readRcuentabancaria = async (req, res) => {
  const id = req.params.id_r;
  try {
    const rcuentabancaria = await pool.query(
      "SELECT * FROM rcuentabancaria WHERE id_r=$1",
      [id]
    );
    res.status(200).json({ rcuentabancaria });
  } catch (error) {
    res.status(500).json({
      message: "A ocurrido un error",
      error,
    });
  }
};

module.exports = user;
