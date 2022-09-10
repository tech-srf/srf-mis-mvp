const express = require("express");

// counselingRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /counseling.
const counselingRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the counselings.
counselingRoutes.route("/counseling").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("counselings")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single counseling by id
counselingRoutes.route("/counseling/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("counselings")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new counseling.
counselingRoutes.route("/counseling/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      sessiondate:req.body.sessiondate,
      clienttype: req.body.clienttype,
      sessioncategory: req.body.sessioncategory,
      sessiontype: req.body.sessiontype,
      issuesaddressed: req.body.issuesaddressed,
      attitudebehaviour: req.body.attitudebehaviour,
      challenges: req.body.challenges,
      nextsteps: req.body.nextsteps,
      treatmentplan: req.body.treatmentplan,
      comments: req.body.comments,
      casestatus: req.body.casestatus,
  };
  db_connect.collection("counselings").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a counseling by id.
counselingRoutes.route("/counseling/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      sessiondate:req.body.sessiondate,
      clienttype: req.body.clienttype,
      sessioncategory: req.body.sessioncategory,
      sessiontype: req.body.sessiontype,
      issuesaddressed: req.body.issuesaddressed,
      attitudebehaviour: req.body.attitudebehaviour,
      challenges: req.body.challenges,
      nextsteps: req.body.nextsteps,
      treatmentplan: req.body.treatmentplan,
      comments: req.body.comments,
      casestatus: req.body.casestatus,
    },
  };
  db_connect
    .collection("counselings")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a counseling
counselingRoutes.route("/counseling/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("counselings").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = counselingRoutes;
