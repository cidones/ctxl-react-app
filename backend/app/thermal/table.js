const pool = require('../../databasePool');

class ThermalTable {
    static storeThermal({ 
        visit_date, drug_combination, thermal_combination_1,
        thermal_combination_2, thermal_combination_3, thermal_combination_4,
        sensor_pain_1, sensor_pain_2, sensor_pain_3, sensor_pain_4, sensor_pain_5, sensor_pain_6,
        affective_pain_1, affective_pain_2, affective_pain_3, affective_pain_4, affective_pain_5, affective_pain_6,
        redness, disorientation, other_adverse, other_adverse_senso
        }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO thermal(visit_date, drug_combination, thermal_combination_1,
                    thermal_combination_2, thermal_combination_3, thermal_combination_4,
                    sensor_pain_1, sensor_pain_2, sensor_pain_3, sensor_pain_4, sensor_pain_5, sensor_pain_6,
                    affective_pain_1, affective_pain_2, affective_pain_3, affective_pain_4, affective_pain_5, affective_pain_6,
                    redness, disorientation, other_adverse, other_adverse_senso) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`,

                [visit_date, drug_combination, thermal_combination_1,
                    thermal_combination_2, thermal_combination_3, thermal_combination_4,
                    sensor_pain_1, sensor_pain_2, sensor_pain_3, sensor_pain_4, sensor_pain_5, sensor_pain_6,
                    affective_pain_1, affective_pain_2, affective_pain_3, affective_pain_4, affective_pain_5, affective_pain_6,
                    redness, disorientation, other_adverse, other_adverse_senso],

                (error, response) => {
                    if (error) return reject(error);
                    
                    resolve();
                }
            )
        }); 
    }
}
module.exports = ThermalTable;