"use client";
import React from "react";
import Link from "next/link";
import styles from './gooey.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import { motion } from "framer-motion";
import Toggle from "@/components/Toggle";

const Gooey = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);


    return (
        <div className="pageMain">
            <h1 className={styles.fancyFont}>Gooey Animation</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <ThreeBreaks />
            <div className={styles.flexContainer}>
                <h1>Animation on the Y Axis</h1>
                <div>
                    <motion.div
                        className={styles.circle}
                        animate={{
                            y: isEnabled ? -100 : 0
                        }} 
                        />
                </div>
                <br />
                <button className={styles.buttonVar1} onClick={() => setIsEnabled(!isEnabled)}>Toggle</button>
             
                
            </div>



        </div>
    )

}
export default Gooey;

