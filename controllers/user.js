import { json } from "express";
import pool from "../database/keys";

const user = {};

//post monto registro
user.createMontoregistro = async (req, res) => {
  const { id, m_banco, m_monto, m_detalle} = req.body;
  try {
    await pool.query(
      "INSERT INTO montoregistro (m_id, m_banco, m_monto, m_detalle) VALUES ($1, $2, $3, $4)",
      [id, m_banco, m_monto, m_detalle]);
      res.status(200).json({
        message: "Se creo el monto con exito",
        body: {
          id,
          m_banco,
          m_monto,
          m_detalle,
        },
      });
    }
    catch (error) {
      res.status(500).json({
        message: "Algo salio mal, intentelo de nuevo",  error, });
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
  

module.exports = user;
