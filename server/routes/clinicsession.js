const express = require("express");

// signupRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /signup.
const clinicsessionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the clinicsessions.
clinicsessionRoutes.route("/clinicsession").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("clinicsessions")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single clinicsession by id
clinicsessionRoutes.route("/clinicsession/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("clinicsessions")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new clinicsession.
clinicsessionRoutes.route("/clinicsession/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      clinic: req.body.clinic,
      team: req.body.team,
      attendance: req.body.attendance,
  };
  db_connect.collection("clinicsessions").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a clinicsession by id.
clinicsessionRoutes.route("/clinicsession/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      clinic: req.body.clinic,
      team: req.body.team,
      attendance: req.body.attendance,
    },
  };
  db_connect
    .collection("clinicsessions")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a clinicsession
clinicsessionRoutes.route("/clinicsession/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("clinicsessions").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = clinicsessionRoutes;
