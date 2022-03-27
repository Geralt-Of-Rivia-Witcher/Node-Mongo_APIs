import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Admin } from "../../models/admin.model.js";
import { TOKEN_KEY } from "../../config/config.js";

const login = (username, password, res) => {
    return new Promise((resolve, reject) => {
        if (!(username && password)) {
            res.status(400);
            reject({ message: "All input is required" });
        }
        Admin.findOne({ username: username }, (err, userData) => {
            if (err) {
                res.status(500);
                reject({ message: "Login unsuccessful.", error: err });
            } else {
                if (userData) {
                    if (bcrypt.compareSync(password, userData.password)) {
                        const token = jwt.sign(
                            { user_id: username },
                            TOKEN_KEY,
                            {
                                expiresIn: "1h",
                            }
                        );
                        resolve({
                            message: "Successfully signed in.",
                            token: token,
                        });
                    } else {
                        res.stauts(403);
                        reject({ message: "Incorrect Password." });
                    }
                } else {
                    res.status(404);
                    reject({ message: "Username not found." });
                }
            }
        });
    });
};

export default login;
