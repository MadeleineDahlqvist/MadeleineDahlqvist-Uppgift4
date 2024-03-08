import express from 'express';

const loginRouter = express.Router();

loginRouter.get('/', async (_req, res) => {
    res.render('login');
});

export default loginRouter;