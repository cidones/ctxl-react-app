const { Router } = require('express');
const TitleTable = require('../title/table.js');

const router = new Router();

router.post('/create-project', (req, res, next)=> {
    const { user_id, title } = req.body;

    TitleTable.storeTitle({ user_id, title })
    .then(() => res.json({ message: 'title inserted'}))
    .catch( error => next(error))
});

router.get('/project-title', (req, res, next) => {
    const { user_id, title } = req.body;

    TitleTable.getTitle({user_id, title})
    .then(() => res.json({ message: 'title returned'}))
    .catch( error => next (error))
});

module.exports = router;