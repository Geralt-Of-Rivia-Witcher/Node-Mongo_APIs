import express from "express";

const router = express.Router();

import signup from "../api/controllers/signUp.js";
import login from "../api/controllers/login.js";
import addUser from "../api/controllers/addUser.js";
import getUsers from "../api/controllers/getUsers.js";
import updateUser from "../api/controllers/updateUser.js";
import deleteUser from "../api/controllers/deleteUser.js";

router.post("/signup", (req, res) => {
    signup(req.body.username, req.body.password, res)
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/login", (req, res) => {
    login(req.body.username, req.body.password, res)
        .then((success) => {
            res.status(200).json(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/addUser", (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    addUser(token, req.body.firstName, req.body.lastName, req.body.age, res)
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get("/getUser", (req, res) => {
    getUsers(req.query.sort, req.query.ageFilter, res)
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/updateUser", (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    updateUser(
        token,
        req.body.userId,
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        res
    )
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post("/deleteUser", (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    deleteUser(token, req.body.userId, res)
        .then((success) => {
            res.status(200).send(success);
        })
        .catch((err) => {
            res.send(err);
        });
});

export default router;
