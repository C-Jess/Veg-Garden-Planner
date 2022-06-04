const { pool } = require("./config");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// get all plant names
const getPlants = (request, response) => {
  pool.query("SELECT * FROM plants", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getPlants,
};
