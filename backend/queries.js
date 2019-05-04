const pool = require('./databasePool');


const createBaseline = (request, repsonse) => {
    pool.query(
        `INSERT INTO baseline(baseline_date, first_name, date_of_birth) VALUES ($1, $2, $3)`,
        [baseline_date, first_name, date_of_birth],
                (error, results) => {
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