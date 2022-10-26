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

//post monto registro
user.createMontoregistro = async (req, res) => {
  const { id, m_banco, m_monto, m_detalle } = req.body;
  try {
    await pool.query(
      "INSERT INTO montoregistro (m_id, m_banco, m_monto, m_detalle) VALUES ($1, $2, $3, $4)",
      [id, m_banco, m_monto, m_detalle]
    );
    res.status(200).json({
      message: "Se creo el monto con exito",
      body: {
        id,
        m_banco,
        m_monto,
        m_detalle,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal, intentelo de nuevo",
      error,
    });
  }
};

//get monto registro
user.readMontoregistro = async (req, res) => {
  const id = req.params.id_m;
  try {
    const montoregistro = await await pool.query(
      "SELECT * FROM montoregistro WHERE id_m = $1",
      [id]
    );
    res.status(200).json({ montoregistro });
  } catch (error) {
    res.status(500).json({
      message: "A ocurrido un error",
      error,
    });
  }
};

//put monto registro
user.updateMontoregistro = async (req, res) => {
  const id = req.params.id_m;
  const { m_banco, m_monto, m_detalle } = req.body;
  try {
    await pool.query(
      "UPDATE montoregistro SET m_banco = $1, m_monto = $2, m_detalle = $3 WHERE id_m = $4",
      [m_banco, m_monto, m_detalle, id]
    );
    res.status(200).json({
      message: "Se actualizo el monto con exito",
      body: {
        id,
        m_banco,
        m_monto,
        m_detalle,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "A ocurrido un error",
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
