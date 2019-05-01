const { Router } = require('express');


const router = new Router();


router.get('/baseline', (req, res) => {
    console.log('it works');
});

module.exports = router;