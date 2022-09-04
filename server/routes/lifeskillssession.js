const express = require("express");

// lifeskillssessionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /lifeskillssession.
const lifeskillssessionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the lifeskillssessions.
lifeskillssessionRoutes.route("/lifeskillssession").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("lifeskillssessions")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single lifeskillssession by id
lifeskillssessionRoutes.route("/lifeskillssession/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("lifeskillssessions")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new lifeskillssession.
lifeskillssessionRoutes.route("/lifeskillssession/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      sessiondate:req.body.sessiondate,
      clinic: req.body.clinic,
      class: req.body.class,
      secondary: req.body.secondary,
      topics: req.body.topics,
      additionalcomments: req.body.additionalcomments,
  };
  db_connect.collection("lifeskillssessions").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a lifeskillssession by id.
lifeskillssessionRoutes.route("/lifeskillssession/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      sessiondate:req.body.sessiondate,
      clinic: req.body.clinic,
      class: req.body.class,
      secondary: req.body.secondary,
      topics: req.body.topics,
      additionalcomments: req.body.additionalcomments,
    },
  };
  db_connect
    .collection("lifeskillssessions")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a lifeskillssession
lifeskillssessionRoutes.route("/lifeskillssession/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("lifeskillssessions").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = lifeskillssessionRoutes;
