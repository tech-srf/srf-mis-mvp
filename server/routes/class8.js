const express = require("express");

// class8Routes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /class8.
const class8Routes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the class8s.
class8Routes.route("/class8").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("class8s")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single class8 by id
class8Routes.route("/class8/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("class8s")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new class8.
class8Routes.route("/class8/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      sessiondate:req.body.sessiondate,
      respondent: req.body.respondent,
      numberofdependents: req.body.numberofdependents,
      currentperformance: req.body.currentperformance,
      finalexamscore: req.body.finalexamscore,
      highschoolexpectation: req.body.highschoolexpectation,
      highschoolreason: req.body.highschoolreason,
      numberofsrfbeneficiaries: req.body.numberofsrfbeneficiaries,
      activemembers: req.body.activemembers,
      reasonforinactivity: req.body.reasonforinactivity,
      srfimpact: req.body.srfimpact,
      srfimpactyes: req.body.srfimpactyes,
      recommendationstosrf: req.body.recommendationstosrf,
  };
  db_connect.collection("class8s").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a class8 by id.
class8Routes.route("/class8/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      sessiondate:req.body.sessiondate,
      respondent: req.body.respondent,
      numberofdependents: req.body.numberofdependents,
      currentperformance: req.body.currentperformance,
      finalexamscore: req.body.finalexamscore,
      highschoolexpectation: req.body.highschoolexpectation,
      highschoolreason: req.body.highschoolreason,
      numberofsrfbeneficiaries: req.body.numberofsrfbeneficiaries,
      activemembers: req.body.activemembers,
      reasonforinactivity: req.body.reasonforinactivity,
      srfimpact: req.body.srfimpact,
      srfimpactyes: req.body.srfimpactyes,
      recommendationstosrf: req.body.recommendationstosrf,
    },
  };
  db_connect
    .collection("class8s")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a class8
class8Routes.route("/class8/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("class8s").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = class8Routes;
