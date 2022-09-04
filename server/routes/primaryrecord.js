const express = require("express");

// primaryrecordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /primaryrecord.
const primaryrecordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the primaryrecords.
primaryrecordRoutes.route("/primaryrecord").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("primaryrecords")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single primaryrecord by id
primaryrecordRoutes.route("/primaryrecord/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("primaryrecords")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new primaryrecord.
primaryrecordRoutes.route("/primaryrecord/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      recorddate:req.body.recorddate ,
      term:req.body.term ,
      englishmarks:req.body.englishmarks ,
      mathsmarks:req.body.mathsmarks ,
      kiswahilimarks:req.body.kiswahilimarks ,
      sciencemarks:req.body.sciencemarks ,
      socialmarks:req.body.socialmarks , 
      cremarks:req.body.cremarks ,
  };
  db_connect.collection("primaryrecords").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a primaryrecord by id.
primaryrecordRoutes.route("/primaryrecord/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      recorddate:req.body.recorddate ,
      term:req.body.term ,
      englishmarks:req.body.englishmarks ,
      mathsmarks:req.body.mathsmarks ,
      kiswahilimarks:req.body.kiswahilimarks ,
      sciencemarks:req.body.sciencemarks ,
      socialmarks:req.body.socialmarks , 
      cremarks:req.body.cremarks ,
    },
  };
  db_connect
    .collection("primaryrecords")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a primaryrecord
primaryrecordRoutes.route("/primaryrecord/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("primaryrecords").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = primaryrecordRoutes;
