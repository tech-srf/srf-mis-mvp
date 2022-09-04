const express = require("express");

// registrationRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /registration.
const registrationRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the registrations.
registrationRoutes.route("/registration").get(function (req, res) {
  let db_connect = dbo.getDb("players");
  db_connect
    .collection("registrations")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single registration by id
registrationRoutes.route("/registration/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("registrations")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new registration.
registrationRoutes.route("/registration/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    registrationdate: req.body.registrationdate,
    schoolname: req.body.schoolname ,
    academiclevel: req.body.academiclevel ,
    classlevel: req.body.classlevel ,
    relationshiphh: req.body.relationshiphh ,
    maritalstatus: req.body.maritalstatus ,
    deceasedrelationship: req.body.deceasedrelationship ,
    yearofdeath:req.body.yearofdeath ,
    causeofdeath:req.body.causeofdeath ,
    deathdocumentation:req.body.deathdocumentation ,
    nodocuments: req.body.nodocuments ,
    householddescription: req.body.householddescription ,
    county: req.body.county ,
    area: req.body.area ,
    yearsatresidence: req.body.yearsatresidence ,
    homecondition: req.body.homecondition ,
    homesize: req.body.homesize ,
    assetbed:req.body.assetbed,
    assetmattress:req.body.assetmattress,
    assetbeddings:req.body.assetbeddings,
    assetfurniture:req.body.assetfurniture,
    assetstove:req.body. assetstove,
    assetgascooker:req.body.assetgascooker,
    assetelectricity:req.body.assetelectricity,
    assetsolarlamp:req.body.assetsolarlamp,
    assettelevision:req.body.assettelevision,
    assetradio:req.body.assetradio,
    assetfridge:req.body.assetfridge,
    childrensleep: req.body.childrensleep ,
    wateraccess: req.body.wateraccess ,
    ammenitiesaccess: req.body.ammenitiesaccess ,
    enviroment: req.body.enviroment ,
    foodcost: req.body.foodcost ,
    foodfrequency: req.body.foodfrequency ,
    rentcost: req.body.rentcost ,
    rentfrequency: req.body.rentfrequency ,
    electricitycost: req.body.electricitycost ,
    electricityfrequency: req.body.electricityfrequency ,
    watercost: req.body.watercost ,
    waterfrequency: req.body.waterfrequency ,
    toiletcost: req.body.toiletcost ,
    toiletfrequency: req.body.toiletfrequency ,
    medicalcost: req.body.medicalcost ,
    medicalfrequency: req.body.medicalfrequency ,
    membername: req.body.membername ,
    memberrelationship: req.body.memberrelationship ,
    medicalconcern: req.body.medicalconcern ,
    membertreatmentstatus: req.body.membertreatmentstatus ,
    nhif: req.body.nhif ,
    nhifnumber: req.body.nhifnumber ,
    substanceabuse: req.body.substanceabuse ,
    memberabused: req.body.memberabused ,
    substancetype: req.body.substancetype ,
    lenghtofabuse: req.body.lenghtofabuse ,
    parentalaction: req.body.briefsummary ,
    briefsummary:req.body.briefsummary ,
    communitybehaviour: req.body.communitybehaviour ,
    physicalabuse: req.body.physicalabuse ,
    sexualabuse: req.body.sexualabuse ,
    negligenceabuse: req.body.negligenceabuse ,
    emotionalabuse: req.body.emotionalabuse ,
    otherabuse: req.body.otherabuse ,
    none: req.body.none ,
    otherexplanation: req.body.otherexplanation ,
    childabuse: req.body.childabuse ,
    affectedmember: req.body.affectedmember ,
    relationship: req.body.relationship ,
    abusehistory: req.body.abusehistory ,
    srfassist: req.body.srfassist ,
    beneficiaryname: req.body.beneficiaryname ,
    yearofentry: req.body.yearofentry ,
    membershipstatus: req.body.membershipstatus ,
    caregiversconsent: req.body.caregiversconsent ,
    noconsent: req.body.noconsent ,
    caregiversname: req.body.caregiversname ,
    consentdate: req.body.consentdate,
    otherorganisation: req.body.otherorganisation,
    additionalcomments: req.body.additionalcomments,
    socialworkersummary: req.body.socialworkersummary,
    familyburden: req.body.familyburden,
    additonalskills: req.body.additonalskills,
    vulerabilityscale: req.body.vulerabilityscale,
    necessaryrecommendations: req.body.necessaryrecommendations,
  };
  db_connect.collection("registrations").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a registration by id.
registrationRoutes.route("/registration/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
    registrationdate: req.body.registrationdate,
    schoolname: req.body.schoolname ,
    academiclevel: req.body.academiclevel ,
    classlevel: req.body.classlevel ,
    relationshiphh: req.body.relationshiphh ,
    maritalstatus: req.body.maritalstatus ,
    deceasedrelationship: req.body.deceasedrelationship ,
    yearofdeath:req.body.yearofdeath ,
    causeofdeath:req.body.causeofdeath ,
    deathdocumentation:req.body.deathdocumentation ,
    nodocuments: req.body.nodocuments ,
    householddescription: req.body.householddescription ,
    county: req.body.county ,
    area: req.body.area ,
    yearsatresidence: req.body.yearsatresidence ,
    homecondition: req.body.homecondition ,
    homesize: req.body.homesize ,
    assetbed:req.body.assetbed,
    assetmattress:req.body.assetmattress,
    assetbeddings:req.body.assetbeddings,
    assetfurniture:req.body.assetfurniture,
    assetstove:req.body. assetstove,
    assetgascooker:req.body.assetgascooker,
    assetelectricity:req.body.assetelectricity,
    assetsolarlamp:req.body.assetsolarlamp,
    assettelevision:req.body.assettelevision,
    assetradio:req.body.assetradio,
    assetfridge:req.body.assetfridge,
    childrensleep: req.body.childrensleep ,
    wateraccess: req.body.wateraccess ,
    ammenitiesaccess: req.body.ammenitiesaccess ,
    enviroment: req.body.enviroment ,
    foodcost: req.body.foodcost ,
    foodfrequency: req.body.foodfrequency ,
    rentcost: req.body.rentcost ,
    rentfrequency: req.body.rentfrequency ,
    electricitycost: req.body.electricitycost ,
    electricityfrequency: req.body.electricityfrequency ,
    watercost: req.body.watercost ,
    waterfrequency: req.body.waterfrequency ,
    toiletcost: req.body.toiletcost ,
    toiletfrequency: req.body.toiletfrequency ,
    medicalcost: req.body.medicalcost ,
    medicalfrequency: req.body.medicalfrequency ,
    membername: req.body.membername ,
    memberrelationship: req.body.memberrelationship ,
    medicalconcern: req.body.medicalconcern ,
    membertreatmentstatus: req.body.membertreatmentstatus ,
    nhif: req.body.nhif ,
    nhifnumber: req.body.nhifnumber ,
    substanceabuse: req.body.substanceabuse ,
    memberabused: req.body.memberabused ,
    substancetype: req.body.substancetype ,
    lenghtofabuse: req.body.lenghtofabuse ,
    parentalaction: req.body.briefsummary ,
    briefsummary:req.body.briefsummary ,
    communitybehaviour: req.body.communitybehaviour ,
    physicalabuse: req.body.physicalabuse ,
    sexualabuse: req.body.sexualabuse ,
    negligenceabuse: req.body.negligenceabuse ,
    emotionalabuse: req.body.emotionalabuse ,
    otherabuse: req.body.otherabuse ,
    none: req.body.none ,
    otherexplanation: req.body.otherexplanation ,
    childabuse: req.body.childabuse ,
    affectedmember: req.body.affectedmember ,
    relationship: req.body.relationship ,
    abusehistory: req.body.abusehistory ,
    srfassist: req.body.srfassist ,
    beneficiaryname: req.body.beneficiaryname ,
    yearofentry: req.body.yearofentry ,
    membershipstatus: req.body.membershipstatus ,
    caregiversconsent: req.body.caregiversconsent ,
    noconsent: req.body.noconsent ,
    caregiversname: req.body.caregiversname ,
    consentdate: req.body.consentdate,
    otherorganisation: req.body.otherorganisation,
    additionalcomments: req.body.additionalcomments,
    socialworkersummary: req.body.socialworkersummary,
    familyburden: req.body.familyburden,
    additonalskills: req.body.additonalskills,
    vulerabilityscale: req.body.vulerabilityscale,
    necessaryrecommendations: req.body.necessaryrecommendations,
    },
  };
  db_connect
    .collection("registrations")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a registration
registrationRoutes.route("/registration/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("registrations").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = registrationRoutes;
