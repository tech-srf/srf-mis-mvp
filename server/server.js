const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path")
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

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

// get driver connection
const dbo = require("./db/conn");

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
