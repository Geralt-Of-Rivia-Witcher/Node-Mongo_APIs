import { User } from "../../models/user.model.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

function updateUser(token, userId, res) {
    return new Promise((resolve, reject) => {
        if (!userId) {
            res.status(400);
            reject({ message: "userId is required." });
        }
        isAuthenticated(token)
            .then(() => {
                User.findByIdAndDelete(userId, (err, result) => {
                    if (err) {
                        res.status(500);
                        reject({
                            message: "some error occured",
                            error: err,
                        });
                    } else {
                        resolve({ message: "User deleted successfully" });
                    }
                });
            })
            .catch(() => {
                res.status(401);
                reject({ message: "Not authorised to perform this action." });
            });
    });
}

export default updateUser;
