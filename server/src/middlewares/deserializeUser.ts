import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../service/user.service";
import { decode } from "../utils/jwt.utils";

const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
      ).trim();
    const refreshToken = get(req, "headers.x-refresh");

    if (!accessToken) return next();

    const {decoded, expired} = decode(accessToken);

    if (decoded) {
        // @ts-ignore
        req.user = decoded;
        return next();
    }

    if (expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({refreshToken});
        if (newAccessToken) {
            res.setHeader("x-access-token", newAccessToken);
            const {decoded} = decode(newAccessToken);
            
            // @ts-ignore
            req.user = decoded;
        }
        next();
    }
    next();
}

export default deserializeUser;