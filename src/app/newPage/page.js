import React from "react";
import Link from "next/link";
import styles from './newPage.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";

const NewPage = () => {
    const translateCode = `
    .element {
        transition: 
        transform 0.3s ease-in-out, 
        opacity 300ms,
        border-radius 50%;
    }`.trim();

    return(
        <div className="pageMain">
            <h1>New Page</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1 className={styles.fancyFont}>Fancy Font</h1>
            <h1 className={styles.plainFont}>Square Font</h1>
            <p>This is a plain old paragraph and we can see how the local font is rendering.</p>
            <CodeBright code={translateCode} />
            <ThreeBreaks />
            <ThreeBreaks />
            <ThreeBreaks />
            <ThreeBreaks />
            <ThreeBreaks />
            <ThreeBreaks />
        </div>
    )
    
}
export default NewPage;

