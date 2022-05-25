const { pool } = require("./config");

// get all plant names
const getPlants = (request, response) => {
  pool.query("SELECT plant_name FROM plants", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getPlants,
};
