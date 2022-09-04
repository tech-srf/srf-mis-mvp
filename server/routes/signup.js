const express = require("express");

// signupRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /signup.
const signupRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the signups.
signupRoutes.route("/signup").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("signups")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single signup by id
signupRoutes.route("/signup/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("signups")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new signup.
signupRoutes.route("/signup/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      date: req.body.date,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      dateofbirth: req.body.dateofbirth,
      age:req.body.age,
      gender: req.body.gender,
      caregivernames: req.body.caregivernames,
      phonenumber: req.body.phonenumber,
      relationship: req.body.relationship,
      clinic: req.body.clinic,
      team: req.body.team,
  };
  db_connect.collection("signups").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a signup by id.
signupRoutes.route("/signup/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      date: req.body.date,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      dateofbirth: req.body.dateofbirth,
      age:req.body.age,
      gender: req.body.gender,
      caregivernames: req.body.caregivernames,
      phonenumber: req.body.phonenumber,
      relationship: req.body.relationship,
      clinic: req.body.clinic,
      team: req.body.team,
    },
  };
  db_connect
    .collection("signups")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a signup
signupRoutes.route("/signup/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("signups").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = signupRoutes;
