"use client";
import React from "react";
import Link from "next/link";
import styles from './toggleSwitch.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import { motion } from "framer-motion";
import Toggle from "@/components/Toggle";

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);


    return (
        <div className="pageMain">
            <h1 className={styles.fancyFont}>Toggle Switch</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <ThreeBreaks />
            <div className={styles.flexContainer}>
                <Toggle value={isEnabled} onChange={setIsEnabled} />
             
                
            </div>



        </div>
    )

}
export default ToggleSwitch;