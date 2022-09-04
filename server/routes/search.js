
const express = require("express");

// searchRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /signup.
const searchRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;


// This section will help you get a single signup by id
searchRoutes.route("/search").get(function (req, res) {
    let db_connect = dbo.getDb("players");
db_connect
    const { q } = req.query;
    console.log(q)

    const keys = ["first_name", "last_name", "age"];

    const search = (data) => {
        return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Players).slice(0, 10)) : res.json(Players.slice(0, 10));
});

module.exports = searchRoutes;
