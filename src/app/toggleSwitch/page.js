import React from "react";
import Link from "next/link";
import styles from './toggleSwitch.module.css';
import "../globals.css";
import ThreeBreaks from "@/components/ThreeBreaks";
import Toggle from "@/components/Toggle";
import CodeBright from "@/components/CodeBright";

const ToggleSwitch = () => {
    const code =`
    <button
    type="button"
    role="switch"
    aria-checked={isEnabled}
    className={styles.wrapper}
    onClick={() => setIsEnabled(!isEnabled)}
    >
    <motion.span
      className={styles.ball}
      initial={false}
      transition={{
        type: 'spring',
        stiffness: 600,
        damping: 50,
      }}
      animate={{
        x: isEnabled ? '100%' : '0%',
      }}
    />
</button>`.trim();

    return (
        <div className="pageMain">
            <h1 className={styles.fancyFont}>Toggle Switch</h1>
            <Link href="/" className="linkBack">🏡 Home</Link>
            <div className="line" />
            <p>This is an example of making a simle toggle switch using Framer Motion.</p>
            <CodeBright code={code} />
            <ThreeBreaks />
            <div className={styles.flexContainer}>
                {/* <Toggle value={isEnabled} onChange={setIsEnabled} /> */}
                <Toggle  />

             
                
            </div>



        </div>
    )

}
export default ToggleSwitch;