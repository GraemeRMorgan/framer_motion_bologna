import React from "react";
import Link from "next/link";
import styles from './gestures.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";
import HoverMotion from "@/components/HoverMotion";

const Gestures = () => {
    const code = `
<motion.div
    className={styles.cube}
    initial = {{
      opacity: 0.8
    }}
    whileHover={{
      scale: 1.1,
      opacity: 1
    }}
    
  />
`.trim();


    return (

        <div className="pageMain">
            <h1 className={styles.fancyFont}>Gestures</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1>Gesture Animation</h1>
            <p>You can easily setup a keyframe animation by passing values in an array.</p>
            <CodeBright code={code} />

            <div className={styles.flexContainer}>
                <HoverMotion />

            </div>



        </div>

    )

}
export default Gestures;

