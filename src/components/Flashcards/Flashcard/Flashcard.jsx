export default function Flashcard({title, description }) {
	return (
		<article className="flashacard">
	
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	);
}