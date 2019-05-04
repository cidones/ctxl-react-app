const pool = require('../../databasePool');

class BaselineTable {
    static storeBaseline({id, baseline_date, first_name, last_name, date_of_birth, gender, race, p_height, p_weight, hair_color, dominant_hand, smoker, pregnant, drug_user}) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO baseline(id, baseline_date, first_name, last_name, date_of_birth,
                    gender, race, p_height, p_weight, hair_color, dominant_hand, smoker, pregnant, drug_user) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,

                [id, baseline_date, first_name, last_name, date_of_birth, gender, race, p_height, p_weight,
                    hair_color, dominant_hand, smoker, pregnant, drug_user],
                    
                (error, response) => {
                    
                    if (error) return reject(error);    
                    
                    resolve();
                }
            )
        }); 
    }
}
module.exports = BaselineTable;