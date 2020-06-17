var express = require("express");
var router = express.Router();
const getGeocode = require("../utils/getGeocode");
const getForecast = require("../utils/getForecast");

/* GET home page. */
router.get("/", async function (req, res, next) {
	try {
		console.log(req.query);
		const { city } = req.query;

		if (!city) {
			return res.render("index", { title: "Super Awesome Weather App" });
		}
		const location = await getGeocode(city);
		console.log("day la hanoi", location);
		const forecast = await getForecast(location.geometry.coordinates);
		console.log(forecast.current.weather);
		return res.render("index", {
			title: `Thuong's Weather App`,
			forecast: forecast.current,
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
