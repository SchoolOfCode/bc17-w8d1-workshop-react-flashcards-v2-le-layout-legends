export default function Flashcard({ image, alt, title, description }) {
	return (
		<article className="tile">
			<img src={image} alt={alt} className="tile-image" />
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	);
}