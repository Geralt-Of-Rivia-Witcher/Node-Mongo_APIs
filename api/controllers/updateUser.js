import { User } from "../../models/user.model.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

function updateUser(token, userId, firstName, lastName, age, res) {
    return new Promise((resolve, reject) => {
        if (!(firstName && lastName && age && userId)) {
            res.status(400);
            reject({ message: "All fields are required." });
        }
        isAuthenticated(token)
            .then(() => {
                User.findByIdAndUpdate(
                    userId,
                    { firstName: firstName, lastName: lastName, age: age },
                    (err, result) => {
                        if (err) {
                            res.status(500);
                            reject({
                                message: "some error occured",
                                error: err,
                            });
                        } else {
                            resolve({ message: "User updated successfully" });
                        }
                    }
                );
            })
            .catch(() => {
                res.status(401);
                reject({ message: "Not authorised to perform this action." });
            });
    });
}

export default updateUser;
