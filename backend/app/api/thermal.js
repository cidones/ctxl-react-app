const { Router } = require('express');
const ThermalTable = require('../thermal/table');

const router = new Router();


router.post('/thermal-add', (req, res, next) => {
    const {
        visit_date, drug_combination, thermal_combination_1,
        thermal_combination_2, thermal_combination_3, thermal_combination_4,
        sensor_pain_1, sensor_pain_2, sensor_pain_3, sensor_pain_4, sensor_pain_5, sensor_pain_6,
        affective_pain_1, affective_pain_2, affective_pain_3, affective_pain_4, affective_pain_5, affective_pain_6,
        redness, disorientation, other_adverse, other_adverse_senso
     } = req.body;

    ThermalTable.storeThermal({ 
        visit_date, drug_combination, thermal_combination_1,
        thermal_combination_2, thermal_combination_3, thermal_combination_4,
        sensor_pain_1, sensor_pain_2, sensor_pain_3, sensor_pain_4, sensor_pain_5, sensor_pain_6,
        affective_pain_1, affective_pain_2, affective_pain_3, affective_pain_4, affective_pain_5, affective_pain_6,
        redness, disorientation, other_adverse, other_adverse_senso})
        .then(() => res.json({ message: 'success!' }))
        .catch(error => next(error));
});


module.exports = router;