CREATE DATABASE adluis;

CREATE TABLE user(
    id_s SERIAL PRIMARY KEY,
    s_username TEXT NOT NULL,
    s_email TEXT NOT NULL UNIQUE,
    s_password TEXT NOT NULL 
);

/* regitro de cuenta bancaria */
CREATE TABLE rcuentabancaria(
    id_r SERIAL PRIMARY KEY,
    r_id INTEGER REFERENCES user(id_s)
    r_namebanco TEXT NOT NULL,
    r_numcuenta TEXT NOT NULL,
    r_url TEXT NOT NULL
);

/* registro de monto */
CREATE TABLE montoregistro(
    id_m SERIAL PRIMARY KEY,
    m_id INTEGER REFERENCES rcuentabancaria(id_r)
    m_banco TEXT NOT NULL,
    m_monto TEXT NOT NULL,
    m_detalle TEXT NOT NULL
);

/* Registro de gastos */
CREATE TABLE gastoregistro(
    id_g SERIAL PRIMARY KEY,
    g_namegasto TEXT NOT NULL,
    g_monto TEXT NOT NULL,
    g_descripcion TEXT NOT NULL
);

/*Regitro de pagos*/
CREATE TABLE pagosregistro(
    id_p SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES gastoregistro(id_g)
    p_monto TEXT NOT NULL,
    p_descriocion TEXT NOT NULL

);