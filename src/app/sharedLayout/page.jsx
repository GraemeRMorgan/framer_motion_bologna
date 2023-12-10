import React from "react";
import Link from "next/link";
import styles from './sharedLayout.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";
import LayoutMotion from "@/components/LayoutMotion";

const SharedLayout = () => {
  const code = 
  ``.trim();


    return (

        <div className="pageMain">
            <h1 className={styles.fancyFont}>Shared Layout</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <p>Shared layout allows you to share an animated element between elements. </p>
            <CodeBright code={code} />

            <div className={styles.flexContainer}>
                <LayoutMotion />

            </div>


        </div>

    )

}
export default SharedLayout;

