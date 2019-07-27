// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "public")));

// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!
// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!// IMPORTANT!!!!

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// console.log(__dirname);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
