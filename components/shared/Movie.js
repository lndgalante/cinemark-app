import ProgressiveImage from "react-progressive-image";
import { Heading, Pill, Paragraph, Strong, Text } from "evergreen-ui";

import Tile from "./Tile";
import Emojis from "./Emojis";
import Emoji from "./Emoji";
import Poster from "./Poster";
import Overlay from "./Overlay";

// utils
import cinemas from "../../utils/cinemas";

const getStyle = (src) => {
	return {
		width: "200px",
		height: "300px",
		backgroundImage: `url(${src})`,
		transition: "filter 500ms ease",
	};
};

const Movie = ({ movie, handleSelectMovie }) => {
	const inCinemas = cinemas
		.filter(({ cinemaId }) => movie.inCinemas.includes(cinemaId))
		.map(({ label }) => label.replace("Cinemark ", ""));

	return (
		<Tile className="tile" onClick={() => handleSelectMovie(movie)}>
			<ProgressiveImage
				src={movie.poster}
				placeholder={
					movie.poster.includes("w300")
						? movie.poster.replace("w300", "w200")
						: movie.poster
				}
			>
				{(src, loading) =>
					loading ? (
						<div style={getStyle(src)} />
					) : (
						<Poster src={src} alt={movie.name} />
					)
				}
			</ProgressiveImage>

			<Emojis withPremiere={movie.isPremiere}>
				{movie.isPremiere && <Emoji>✨</Emoji>}
				<Emoji>{movie.emoji}</Emoji>
			</Emojis>

			<Overlay className="overlay">
				<main>
					<Heading color="white" marginBottom={6}>
						{movie.name}
					</Heading>

					<Pill marginBottom={8} marginRight={4}>
						{movie.minAge}
					</Pill>

					{movie.votes ? (
						<Pill marginBottom={8} marginRight={4}>
							{movie.votes}
						</Pill>
					) : null}

					{movie.isPremiere ? <Pill marginBottom={8}>Estreno</Pill> : null}

					<Paragraph size={300} marginBottom={2} marginTop={6}>
						<Strong color="white">Género</Strong>
						<Text color="white"> {movie.category}</Text>
					</Paragraph>

					<Paragraph size={300} marginBottom={2}>
						<Strong color="white">Duración</Strong>
						<Text color="white"> {movie.duration}</Text>
					</Paragraph>

					{movie.cast.directors.length !== 0 ? (
						<Paragraph size={300} marginBottom={2}>
							<Strong color="white">
								Director{movie.cast.directors.length > 1 ? "es " : " "}
							</Strong>
							<Text color="white">{movie.cast.directors.join(", ")}</Text>
						</Paragraph>
					) : null}

					{movie.cast.actors.length !== 0 ? (
						<Paragraph size={300} marginBottom={2}>
							<Strong color="white">
								Actor{movie.cast.actors.length > 1 ? "es " : " "}{" "}
							</Strong>
							<Text color="white">{movie.cast.actors.join(", ")}</Text>
						</Paragraph>
					) : null}
				</main>

				<footer style={{ overflowY: "scroll", maxHeight: "64px" }}>
					{inCinemas.map((cinema) => (
						<Pill key={cinema} marginBottom={2} marginRight={4} fontSize={10}>
							{cinema}
						</Pill>
					))}
				</footer>
			</Overlay>
		</Tile>
	);
};

export default Movie;
