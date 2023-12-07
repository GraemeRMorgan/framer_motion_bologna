import React from "react";
import Link from "next/link";
import styles from './layoutAnimation.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";
import LayoutMotion from "@/components/LayoutMotion";

const LayoutAnimation = () => {
    const code = ``.trim();


    return (

        <div className="pageMain">
            <h1 className={styles.fancyFont}>Layout Animation</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1>Layout Animation</h1>
            <p>Layout animation are likely the strongest tool of Framer Motion. </p>
            <CodeBright code={code} />

            <div className={styles.flexContainer}>
                <LayoutMotion />

            </div>



        </div>

    )

}
export default LayoutAnimation;

