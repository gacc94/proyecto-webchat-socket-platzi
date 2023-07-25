import { Request, Response, Router } from 'express';
import * as path from 'path';

const router: Router = Router();
const views = path.join(`${__dirname}/../views`)

router.get('', (req: Request, res: Response) => {
    res.sendFile(views);
})

export default router;