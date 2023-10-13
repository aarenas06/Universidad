import { getConnection } from "./../database/database";

const getPlayer = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from players");
  console.log(result);
  res.json(result);
};

const RespondeList = async (req, res) => {
  const preguntaId = req.body.preguntaId;
  const respuesta = req.body.respuesta;

  const connection = await getConnection();
  const result = await connection.query(
    "SELECT * FROM asignaciones WHERE IdPreguntas = ? AND Valor = ?",
    [preguntaId, respuesta]
  );
  // Envía la respuesta JSON con el resultado de la consulta
  res.json(result);
};

const getPreguntas = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from preguntas");
  console.log(result);
  res.json(result);
};

export const methods = {
  getPlayer,
  RespondeList,
  getPreguntas,
};
