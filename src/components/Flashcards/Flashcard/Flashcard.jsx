import styles from "./Flashcard.module.css";
export default function Flashcard({ title, question, answer }) {
    return (
        <article className={styles.flashcards}>
            <p className="cross">❌</p>
            <h3>{title}</h3>
            <p>{question}</p>
        </article>
    );
}
