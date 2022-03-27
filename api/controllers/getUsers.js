import { User } from "../../models/user.model.js";

function getUsers(sort, ageFilter, res) {
    return new Promise((resolve, reject) => {
        if (sort) {
            if (sort == "alpha") {
                User.aggregate([{ $sort: { firstName: 1 } }])
                    .then((foundUsers) => {
                        resolve({ foundUsers: foundUsers });
                    })
                    .catch((err) => {
                        res.status(500);
                        reject({ messgae: "Some error occured", error: err });
                    });
            } else if (sort == "age") {
                User.aggregate([{ $sort: { age: 1 } }])
                    .then((foundUsers) => {
                        resolve({ foundUsers: foundUsers });
                    })
                    .catch((err) => {
                        res.status(500);
                        reject({ messgae: "Some error occured", error: err });
                    });
            }
        } else if (ageFilter) {
            User.find({ age: ageFilter }, (err, foundUsers) => {
                if (err) {
                    res.status(500);
                    reject({ messgae: "Some error occured", error: err });
                } else {
                    resolve({ foundUsers: foundUsers });
                }
            });
        } else {
            User.find({}, (err, foundUsers) => {
                if (err) {
                    res.status(500);
                    reject({ messgae: "Some error occured", error: err });
                } else {
                    resolve({ foundUsers: foundUsers });
                }
            });
        }
    });
}

export default getUsers;
