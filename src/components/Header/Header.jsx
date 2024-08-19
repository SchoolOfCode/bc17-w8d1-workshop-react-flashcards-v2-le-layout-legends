import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="src\assets\react.svg" alt="React Logo" />
            <h1>React Flashcards</h1>
            <p>🧠 Expand Your React Knowledge. One Flashcard at a Time! 🐌</p>
        </header>
    );
};
export default Header;
