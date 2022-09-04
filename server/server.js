const express = require("express");
// const bodyParser = require('body-parser');
// const logger = require('morgan');
const app = express();
const cors = require("cors");
const path = require("path")

// get driver connection
const dbo = require("./db/conn");

require("dotenv").config({ path: "./config.env" });

// /** Seting up server to accept cross-origin browser requests */
// app.use(function(req, res, next) { //allow cross origin requests
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

// app.use(bodyParser.json());
// app.use(logger('dev'));

app.use(cors());
app.use(express.json());
app.use(require("./routes/signup"));
app.use(require("./routes/casemanagement"));
app.use(require("./routes/class8"));
app.use(require("./routes/clinicsession"));
app.use(require("./routes/counseling"));
app.use(require("./routes/schoolsession"));
app.use(require("./routes/primaryrecord"));
app.use(require("./routes/secondaryrecord"));
app.use(require("./routes/lifeskillssession"));
app.use(require("./routes/registration"));

// app.use('/api', require('./routes/upload'));

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;



app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
