import React from "react";
import Link from "next/link";
import styles from './keyframes.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import CodeBright from "@/components/CodeBright";
import KeyFrameMotion from "@/components/KeyFrameMotion";

const Keyframes = () => {
    const code = `
<motion.div
    className={styles.cube}
    animate={{
      x: [0, 200, 200,200,0],
      rotate: [0,180,180,90,0],
      borderRadius: ["6%", "50%", "6%", "6%", "6%"],
      scale: [1,0.5,0.5,0.5,1]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.5, 1]

    }}
  />
`.trim();


    return (

        <div className="pageMain">
            <h1 className={styles.fancyFont}>Keyframes</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1>Keyframe Animation</h1>
            <p>You can easily setup a keyframe animation by passing values in an array.</p>
            <CodeBright code={code} />

            <div className={styles.flexContainer}>
                <KeyFrameMotion />

            </div>



        </div>

    )

}
export default Keyframes;

