const axios = require("axios");

const getGeocode = async (address) => {
	try {
		const token = process.env.MAPBOX_KEY;
		console.log(token, "tokennnnnnnn");
		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`;
		const res = await axios.get(url);
		const data = res.data.features;
		if (data.length === 0) {
			throw new Error("No results");
		}
		console.log("no o day", data[0]);
		return data[0];
	} catch (err) {
		throw err;
		console.log(err);
	}
};
module.exports = getGeocode;
