"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './MotionActionX.module.css';
import ThreeBreaks from '../ThreeBreaks';

function MotionActionX({amount, rotate}) {
    const [isX, setX] = React.useState(false);
    const [isY, setY] = React.useState(false);
    const [isRotate, setRotate] = React.useState(false);


    return (
        <div>
            <motion.div
                className={styles.cube}
                animate={{

                    x: isX ? amount : 0
                }}
            />
            <br />
            <button className={styles.buttonVar1} onClick={() => setX(!isX)}>Transform X</button>
            <ThreeBreaks />
            <motion.div
                className={styles.cube}
                animate={{

                    y: isY ? -amount : 0
                }}
            />
            <br />
            <button className={styles.buttonVar1} onClick={() => setY(!isY)}>Transform Y</button>
            <ThreeBreaks />
            <motion.div
                className={styles.cube}
                animate={{

                    rotate: isRotate ? rotate : 0
                }}
            />
            <br />
            <button className={styles.buttonVar1} onClick={() => setRotate(!isRotate)}>Rotate Z</button>
        </div>);
}

export default MotionActionX;
