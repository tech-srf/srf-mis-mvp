const express = require("express");

// casemanagementRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /casemanagement.
const casemanagementRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the casemanagement records.
casemanagementRoutes.route("/casemanagement").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("casemanagements")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single casemanagement record by id
casemanagementRoutes.route("/casemanagement/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("casemanagements")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new casemanagement record.
casemanagementRoutes.route("/casemanagement/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      sessiondate:req.body.sessiondate,
      clienttype: req.body.clienttype,
      issuesaddressed: req.body.issuesaddressed,
      challenges: req.body.challenges,
      nextsteps: req.body.nextsteps,
      additionalcomments: req.body.additionalcomments,
  };
  db_connect.collection("casemanagements").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a casemanagement by id.
casemanagementRoutes.route("/casemanagement/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      sessiondate:req.body.sessiondate,
      clienttype: req.body.clienttype,
      issuesaddressed: req.body.issuesaddressed,
      challenges: req.body.challenges,
      nextsteps: req.body.nextsteps,
      additionalcomments: req.body.additionalcomments,
    },
  };
  db_connect
    .collection("casemanagements")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a casemanagement
casemanagementRoutes.route("/casemanagement/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("casemanagements").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = casemanagementRoutes;
