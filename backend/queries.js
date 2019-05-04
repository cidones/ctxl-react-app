const pool = require('./databasePool');


const createBaseline = (request, repsonse) => {
    pool.query(
        `INSERT INTO baseline(id, baseline_date, first_name, date_of_birth) VALUES ($1, $2, $3, $4)`,
        [id, baseline_date, first_name, date_of_birth],
                (error, results) => {
                    console.log(id, baseline_date, first_name, date_of_birth)
                    if (error) {
                    throw error
                }
                repsonse.status(201).send(`Baseline values : ${results}`);
            }
        )
    }

module.exports = {
createBaseline
}