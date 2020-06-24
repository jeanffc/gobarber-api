import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World 1!' }));

export default routes;
