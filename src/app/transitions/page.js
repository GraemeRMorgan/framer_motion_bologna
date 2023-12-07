"use client";
import React from "react";
import Link from "next/link";
import styles from './gooey.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import { motion } from "framer-motion";
import Toggle from "@/components/Toggle";
// import CodeBright from "@/components/CodeBright";

const Gooey = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [rotated, setRotated] = React.useState(false);


    return (
        <div className="pageMain">
            <h1 className={styles.fancyFont}>Transitions</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <h1>Simple Animations</h1>
            <p>By default, the animations have a springy simulation, but you can change these by passin <strong>transition prop.</strong></p>

            <div className={styles.flexContainer}>
                {/* <CodeBright code={code} />  */}
                <h2>Transform</h2>
                <div>
                    <motion.div
                        className={styles.cube}
                        animate={{
                            x: isEnabled ? 100 : 0
                        }} 
                        />
                </div>
                <button className={styles.buttonVar1} onClick={() => setIsEnabled(!isEnabled)}>Transform</button>
                <div className="line" />

                <h2>Rotation</h2>
                <motion.div
                    className={styles.cube}
                    animate={{
                        rotate: rotated ? 25 : 0
                    }}
                />
                <button className={styles.buttonVar1} onClick={() => setRotated(!rotated)}>Rotate</button>

                
             
                
            </div>



        </div>
    )

}
export default Gooey;

