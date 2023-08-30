// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   (async () => {
//     const response = await fetch("https://fakestoreapi.com/products/");
//     const body = await response.text();
//     res.send([JSON.parse(body)]);
//   })();
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact");
// });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log("listening on http://localhost:%d", port);
// });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Define a sample route
app.get("/", (req, res) => {
  res.send("Hello, Azure App Service!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
