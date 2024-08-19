import React from "react";
import styles from "./FlashcardsContainer.module.css";
import Flashcard from "../Flashcard/Flashcard";

let questions = [
    {
        title: "😕",
        question: "What is React?",
        answer: "A library for building user interfaces"
    },
    {   
        title: "😢",
        question: "What is JSX?",
        answer: "A syntax extension for JavaScript"
    },
    {
        title: "😡",
        question: "What is Babel?",
        answer: "A JavaScript compiler"
    }
];

// export default function FlashcardsContainer() {
//     return <main>FlashcardsContainer</main>;
// }


export default function FlashcardsContainer() {
	return (
		<main className={styles.flashcardsContainer}>

			<div className={styles.flashcards}>
				{questions.map(({ title, question, answer }) => {
					return <Flashcard title={title} question={question} answer={answer}/>;
				})}
			</div>
		</main>
	);
}
