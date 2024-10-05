import { Fragment } from "react";
import { connect } from "react-redux";

import withEnv from "env-hoc";
import fetch from "node-fetch";
import { orderByDistance } from "geolib";

// containers
import Modal from "../containers/Modal";
import Movies from "../containers/Movies";

// components
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

// ducks
import { toggleVisibility } from "../store/ducks/modal";
import { setCinemas, setCinema } from "../store/ducks/select";
import {
	setPremieres,
	setDefaultPremiere,
	setDefaultPremiereShows,
} from "../store/ducks/movies";

// utils
import { baseURL } from "../utils";
import cinemas from "../utils/cinemas";

const Premieres = () => (
	<Fragment>
		<Meta />
		<Navbar />
		<Movies />
		<Modal />
	</Fragment>
);

Premieres.getInitialProps = async ({ query, store, env }) => {
	const { id, cinema } = query;
	const ipAddress = env.ipAddress;

	if (id && cinema) {
		try {
			const urls = [
				`http://ip-api.com/json/${ipAddress}`,
				`${baseURL}/movies`,
				`${baseURL}/movie?movieId=${id}&cinemaId=${cinema}`,
			];
			const [ip, premieres, premiere] = await Promise.all(
				urls.map((url) => fetch(url).then((res) => res.json())),
			);

			const { lat, lon } = ip;
			const parsedCinemas = cinemas.map(({ name, ...restProps }) => ({
				value: name,
				label: name,
				...restProps,
			}));
			const cinemasOrderedByDistance = orderByDistance(
				{ lat, lon },
				parsedCinemas,
			).map(({ key }) => parsedCinemas[key]);
			const selectedCinema = cinemas.find(
				({ cinemaId }) => String(cinemaId) === cinema,
			);
			const selectedPremiere = premieres.find(({ movieId }) => movieId === id);

			store.dispatch(setCinemas(cinemasOrderedByDistance));
			store.dispatch(setCinema(selectedCinema));
			store.dispatch(setPremieres(premieres));
			store.dispatch(setDefaultPremiere(selectedPremiere));
			store.dispatch(setDefaultPremiereShows(premiere.shows));
			store.dispatch(toggleVisibility());
		} catch (error) {
			const urls = [
				"${baseURL}/movies",
				`${baseURL}/movie?movieId=${id}&cinemaId=${cinema}`,
			];
			const [premieres, premiere] = await Promise.all(
				urls.map((url) => fetch(url).then((res) => res.json())),
			);
			const selectedCinema = cinemas.find(
				({ cinemaId }) => String(cinemaId) === cinema,
			);
			const selectedPremiere = premieres.find(({ movieId }) => movieId === id);

			store.dispatch(setCinemas(cinemas));
			store.dispatch(setCinema(selectedCinema));
			store.dispatch(setPremieres(premieres));
			store.dispatch(setDefaultPremiere(selectedPremiere));
			store.dispatch(setDefaultPremiereShows(premiere.shows));
			store.dispatch(toggleVisibility());
		}

		return;
	}

	try {
		const urls = [`http://ip-api.com/json/${ipAddress}`, `${baseURL}/movies`];
		const [ip, premieres] = await Promise.all(
			urls.map((url) => fetch(url).then((res) => res.json())),
		);
		console.log(
			"\n ~ file: index.js ~ line 81 ~ Premieres.getInitialProps= ~ premieres",
			premieres,
		);

		const { lat, lon } = ip;
		const parsedCinemas = cinemas.map(({ name, ...restProps }) => ({
			value: name,
			label: name,
			...restProps,
		}));
		const cinemasOrderedByDistance = orderByDistance(
			{ lat, lon },
			parsedCinemas,
		).map(({ key }) => parsedCinemas[key]);

		store.dispatch(setCinemas(cinemasOrderedByDistance));
		store.dispatch(setPremieres(premieres));
	} catch (error) {
		const premieresRes = await fetch(`${baseURL}/movies`);
		const premieres = await premieresRes.json();

		store.dispatch(setCinemas(cinemas));
		store.dispatch(setPremieres(premieres));
	}
};

export default connect()(withEnv(Premieres));
