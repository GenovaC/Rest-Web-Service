const router = require('express').Router();

const middlewares = require('./middlewares');

const apiPetsRouter = require('./api/pets');
const apiUsersRouter = require('./api/users');

router.use('/pets', middlewares.checkToken, apiPetsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;