const express = require("express");

// secondaryrecordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /secondaryrecord.
const secondaryrecordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the secondaryrecords.
secondaryrecordRoutes.route("/secondaryrecord").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("secondaryrecords")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single secondaryrecord by id
secondaryrecordRoutes.route("/secondaryrecord/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("secondaryrecords")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new secondaryrecord.
secondaryrecordRoutes.route("/secondaryrecord/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      recorddate: req.body.recorddate,
      term: req.body.term,
      englishmarks: req.body.englishmarks,
      mathsmarks: req.body.mathsmarks,
      kiswahilimarks: req.body.kiswahilimarks,
      biologymarks: req.body.biologymarks,
      physicsmarks: req.body.physicsmarks,
      chemistrymarks: req.body.chemistrymarks,
      historymarks: req.body.historymarks,
      geographymarks: req.body.geographymarks,
      cremarks: req.body.cremarks,
      businessmarks: req.body.businessmarks,
      computermarks: req.body.computermarks,
      agriculturemarks: req.body.agriculturemarks,
      fineartmarks: req.body.fineartmarks,
  };
  db_connect.collection("secondaryrecords").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a secondaryrecord by id.
secondaryrecordRoutes.route("/secondaryrecord/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      recorddate: req.body.recorddate,
      term: req.body.term,
      englishmarks: req.body.englishmarks,
      mathsmarks: req.body.mathsmarks,
      kiswahilimarks: req.body.kiswahilimarks,
      biologymarks: req.body.biologymarks,
      physicsmarks: req.body.physicsmarks,
      chemistrymarks: req.body.chemistrymarks,
      historymarks: req.body.historymarks,
      geographymarks: req.body.geographymarks,
      cremarks: req.body.cremarks,
      businessmarks: req.body.businessmarks,
      computermarks: req.body.computermarks,
      agriculturemarks: req.body.agriculturemarks,
      fineartmarks: req.body.fineartmarks,
    },
  };
  db_connect
    .collection("secondaryrecords")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a secondaryrecord
secondaryrecordRoutes.route("/secondaryrecord/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("secondaryrecords").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = secondaryrecordRoutes;
