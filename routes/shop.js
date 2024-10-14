const express = require("express");

const router = express.Router();

router.use("/users", (req, res, next) => {
	console.log("In users route");
	res.send("<h1>Hello from users route!</h1>");
});

module.exports = router;
