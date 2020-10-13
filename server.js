const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use(express.static("client"));
app.set('client', path.join(__dirname, 'client'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/index.html"));
  });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}`);
  });

  