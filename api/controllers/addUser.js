import { User } from "../../models/user.model.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

function addUser(token, firstName, lastName, age, res) {
    return new Promise((resolve, reject) => {
        if (!(firstName && lastName && age)) {
            res.status(400);
            reject({ message: "All fields are required." });
        }
        isAuthenticated(token)
            .then(() => {
                const user = new User({
                    firstName: firstName,
                    lastName: lastName,
                    age: age,
                    createdAt: new Date(),
                });
                user.save()
                    .then(() => resolve({ message: "User added successfully" }))
                    .catch((err) => {
                        res.status(500);
                        reject({
                            message: "Some error occured.",
                            error: err,
                        });
                    });
            })
            .catch(() => {
                res.status(401);
                reject({ message: "Not authorised to perform this action." });
            });
    });
}

export default addUser;
