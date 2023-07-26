import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction ) => {
    // if (req.cookies?.username) {
    //     next();
    // } else {
    //     // res.redirect('register');
    // }
    next()
};