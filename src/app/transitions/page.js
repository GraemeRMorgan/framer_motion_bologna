import React from "react";
import Link from "next/link";
import styles from './gooey.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";
import MotionActionX from "@/components/MotionActionX";

const Gooey = () => {
    const code = `
<motion.div
    className={styles.cube}
    animate={{

        x: 200
    }}
/>

<motion.div
    className={styles.cube}
    animate={{

        y: -200
    }}
/>

<motion.div
    className={styles.cube}
    animate={{

        rotate: 15
    }}
/>`.trim();


    return (

        <div className="pageMain">
            <h1 className={styles.fancyFont}>Transitions</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1>Simple Animations</h1>
            <p>By default, the animations have a springy simulation, but you can change these by passing <strong>transition props.</strong></p>
            <CodeBright code={code} />

            <div className={styles.flexContainer}>
                <h2>Transform</h2>
                <MotionActionX amount={200} rotate={15} />

            </div>



        </div>

    )

}
export default Gooey;

