const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("shop", shopRoutes);

// app.use("/", (req, res, next) => {
// 	res.send("<h1>Hello from Express!</h1>");
// });

app.use((req, res, next) => {
	res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});