import jwt from "jsonwebtoken";

import { TOKEN_KEY } from "../../config/config.js";

const isAuthenticated = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject({ message: "Token unavailable." });
        }
        try {
            const decoded = jwt.verify(token, TOKEN_KEY);
            resolve(decoded);
        } catch (err) {
            reject({ message: "Invalid Token." });
        }
    });
};

export default isAuthenticated;
