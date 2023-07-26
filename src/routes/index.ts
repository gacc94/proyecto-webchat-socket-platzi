import { Request, Response, Router } from 'express';
import * as path from 'path';
import isLoggedIn from '../middlewares/isLoggedIn';

const router: Router = Router();
const views = path.join(`${__dirname}/../views`);


router.get('/', isLoggedIn, (req: Request, res: Response) => {
    res.sendFile(views);
});
router.get('/register', (req: Request, res: Response) => {
    res.sendFile(`${views}/register.html`);
});

export default router;