import bcrypt from "bcryptjs";

import { Admin } from "../../models/admin.model.js";

const salt = bcrypt.genSaltSync(10);

const signup = (username, password, res) => {
    return new Promise((resolve, reject) => {
        if (!(username && password)) {
            res.status(400);
            reject({ message: "All inputs are required." });
        }

        Admin.findOne({ username: username }, (err, userData) => {
            if (err) {
                res.status(500);
                reject({ message: "Sign up unsuccessful.", error: err });
            } else {
                if (userData) {
                    res.status(409);
                    reject({ message: "Username already exists" });
                } else {
                    const hashedPassword = bcrypt.hashSync(password, salt);
                    const admin = new Admin({
                        username: username,
                        password: hashedPassword,
                        joinedAt: new Date(),
                    });
                    admin
                        .save()
                        .then(() => {
                            resolve({
                                message: "Successfully signed up.",
                            });
                        })
                        .catch((err) => {
                            res.status(500);
                            reject({
                                message: "Sign up unsuccessful.",
                                error: err,
                            });
                        });
                }
            }
        });
    });
};

export default signup;
