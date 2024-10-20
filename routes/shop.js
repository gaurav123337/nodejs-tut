const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/path");
// const adminData = require("./admin");

const productController = require("../controllers/products");
const router = express.Router();

// router.get("/", (req, res, next) => {
// 	const products = adminData.products;
// 	// console.log("shop---", products);
// 	// res.sendFile(path.join(rootDir, "views", "shop.html"));

// 	res.render("shop", { pageTitle: "Shop", path: "/", prods: products });
// });

router.get("/", productController.getProducts);

router.use("/users", (req, res, next) => {
	console.log("In users route");
	res.send("<h1>Hello from users route!</h1>");
});

module.exports = router;
