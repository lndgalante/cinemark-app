const baseURL = "https://api.cinemark.pro";

const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const normalize = (string) => {
	return string
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};

const getPremiereInfo = async (movieId, cinemaId) => {
	console.log("\n ~ getPremiereInfo ~ cinemaId:", cinemaId);
	console.log("\n ~ getPremiereInfo ~ movieId:", movieId);
	const res = await fetch(`${baseURL}/movie/${movieId}/${cinemaId}`);
	const data = await res.json();

	return data;
};

export { sleep, normalize, getPremiereInfo, baseURL };
