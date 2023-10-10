import { getConnection } from "./../database/database";

const getPlayer = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from players");
  console.log(result);
  res.json(result);
};

const getApectos = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from aspectos");
  console.log(result);
  res.json(result);
};

const getPreguntas = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from preguntas");
  console.log(result);
  res.json(result);
};

const getAsignaciones = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from asignaciones");
  console.log(result);
  res.json(result);
};

export const methods = {
  getPlayer,
  getApectos,
  getPreguntas,
  getAsignaciones,
};
