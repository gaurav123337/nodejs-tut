const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

// app.engine(
// 	"hbs",
// 	expressHbs({
// 		layoutsDir: "views/layouts/",
// 		defaultLayout: "main-layout",
// 		extname: "hbs",
// 	})
// );
// app.set('view engine', 'hbs');

app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminRoutes);
// app.use("/shop", shopRoutes);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use("/", (req, res, next) => {
// 	res.send("<h1>Hello from Express!</h1>");
// });

app.use((req, res, next) => {
	res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
