const express = require("express");

// schoolsessionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /schoolsession.
const schoolsessionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the schoolsessions.
schoolsessionRoutes.route("/schoolsession").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("schoolsessions")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single schoolsession by id
schoolsessionRoutes.route("/schoolsession/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("schoolsessions")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new schoolsession.
schoolsessionRoutes.route("/schoolsession/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      sessiondate:req.body.sessiondate,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      clinic: req.body.clinic,
      gender: req.body.gender,
  };
  db_connect.collection("schoolsessions").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a schoolsession by id.
schoolsessionRoutes.route("/schoolsession/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      sessiondate:req.body.sessiondate,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      clinic: req.body.clinic,
      gender: req.body.gender,
    },
  };
  db_connect
    .collection("schoolsessions")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a schoolsession
schoolsessionRoutes.route("/schoolsession/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("schoolsessions").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = schoolsessionRoutes;
