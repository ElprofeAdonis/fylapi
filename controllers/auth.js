import pool from "../database/keys";

const authentication = {};

authentication.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await pool.query(
      "INSERT INTO userr (s_username, s_email, s_password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    res.status(200).json({
      message: "Muy bien usuario creado",
      superusuario: { name, email, password },
    });
  } catch (error) {
    if (error.constraint == "userr_s_email_key") {
      res.status(500).json({
        message: "El correo digitado ya es parte de un usuario",
        error,
      });
    } else {
      res.status(500).json({
        message:
          "Hola Adonis no te rindas Dios esta contigo el error pasara animo",
        error,
      });
    }
  }
};

authentication.singIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userr = await (
      await pool.query(
        "SELECT * FROM userr WHERE s_email=$1 AND s_password=$2",
        [email, password]
      )
    ).rows;
    if (userr.length > 0) {
      res.status(200).json({
        id: userr[0].id_s,
        name: userr[0].s_username,
        email: userr[0].s_email,
      });
    } else {
      res.status(200).json({
        message: "El userr fue creado con existe",
        NotFound: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error",
    });
  }
};

module.exports = authentication;
