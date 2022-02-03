import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, year, summary, genres, id }) {
	return (
		<div>
			<img src={coverImage} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<span>{year}</span>
			<p>{summary}</p>
			<ul>
				{genres
					? genres.map((genre, index) => <li key={index}>{genre}</li>)
					: null}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
