import { json } from "express";
import pool from "../database/keys";

const user = {};

// user.createRcuentabancaria = async (req, res) => {
//     const { id, t_comentario, t_foto } = req.body;
//     try {
//       await pool.query(
//         "INSERT INTO tweets (t_id, t_comentario, t_foto) VALUES ($1, $2, $3)",
//         [id, t_comentario, t_foto]
//       );
//       res.status(200).json({
//         message: "Se creo el tweets con exito",
//         tweets: {
//           id,
//           t_comentario,
//           t_foto,
//         },
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Algo salio mal",
//         error,
//       });
//     }
//   };

//   user.readRcuentabancaria = async (req, res) => {
//     const id = req.params.id_t;
//     try {
//       const tweets = await await pool.query(
//         "SELECT * FROM tweets WHERE id_t=$1",
//         [id]
//       );
//       res.status(200).json({ tweets });
//     } catch (error) {
//       res.status(500).json({
//         message: "A ocurrido un error",
//         error,
//       });
//     }
//   };

module.exports = user;
