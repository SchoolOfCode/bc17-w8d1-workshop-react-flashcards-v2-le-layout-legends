export default function Flashcard({ title, question, answer }) {
    return (
        <article className="flashcard">
            <p className="cross">❌</p>
            <h3>{title}</h3>
            <p>{question}</p>
        </article>
    );
}
