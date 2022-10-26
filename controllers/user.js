import { json } from "express";
import pool from "../database/keys";

const user = {};

//reguistro de cuanta bancaria
//--------------------

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

user.updateRcuentabancaria = async (req, res) => {
  const id = req.params.id_r;
  const { r_namebanco, r_numcuenta, r_url } = req.body;
  try {
    await pool.query(
      "UPDATE rcuentabancaria SET r_namebanco$1,r_numcuenta$2, r_url$3 WHERE id_r=$4",
      [r_namebanco, r_numcuenta, r_url, id],
      res.status(200).json({
        message: "Todo se actualiso con exito",
        tweets: [r_namebanco, r_numcuenta, r_url],
      })
    );
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

//reguistro de gastos
//--------------------
user.createGastoregistro = async (req, res) => {
  const { id, g_namegasto, g_monto, g_descripcion } = req.body;
  try {
    await pool.query(
      "INSERT INTO gastoregistro ( g_namegasto, g_monto,g_descripcion) VALUES ($1, $2, $3)",
      [id, g_namegasto, g_monto, g_descripcion]
    );
    res.status(200).json({
      message: "Se creo el tweets con exito",
      tweets: {
        id,
        g_namegasto,
        g_monto,
        g_descripcion,
      },
    });
  } catch (error) {}
};

user.readGastoregistro = async (req, res) => {
  const id = req.params.id_g;
  try {
    const gastoregistro = await pool.query(
      "SELECT * FROM gastoregistro WHERE id_g=$1",
      [id]
    );
    res.status(200).json({ gastoregistro });
  } catch (error) {
    res.status(500).json({
      message: "A ocurrido un error",
      error,
    });
  }
};

user.updateGastoregistro = async (req, res) => {
  const id = req.params.id_g;
  const { g_namegasto, g_monto, g_descripcion } = req.body;

  try {
    await pool.query(
      "UPDATE gastoregistro SET g_namegasto$1,g_monto$2, g_descripcion$3 WHERE id_g=$3",
      [g_namegasto, g_monto, g_descripcion, id],
      res.status(200).json({
        message: "Todo se actualiso con exito",
        gastoregistro: [g_namegasto, g_monto, g_descripcion],
      })
    );
  } catch (error) {}
};

module.exports = user;
