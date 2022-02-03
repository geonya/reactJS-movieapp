import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details/json?movie_id=${id}`
			)
		).json();
		setMovie(json.data.movie);
		console.log(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<img src={movie.background_image} alt=""></img>
					<h1>{movie.title_long}</h1>
					<span>{movie.rating}</span>
					<span>{movie.year}</span>
					<p>{movie.summary}</p>
					<ul>
						{movie.genres.map((genre, index) => (
							<li key={index}>{genre}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Detail;
