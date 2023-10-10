import { getConnection } from "./../database/database";


const getPlayer = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query("select * from aspectos");
  console.log(result);
  res.json(result);
};

export const methods = {
  getPlayer,
};
