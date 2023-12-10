import React from 'react';
import Image from 'next/image';
import Callout from '../components/Callout/Callout';
import styles from './page.module.css'
import './globals.css'
import Link from 'next/link';
import CodeBright from '@/components/CodeBright';
import Footer from "../components/Footer/Footer";
import SectionCard from '@/components/SectionCard';

import ThreeBreaks from '@/components/ThreeBreaks';
import { Code } from 'react-feather';

function Home() {
  const hello = () => {
    return "World"
  }
  return (
    <div>
      <main className="pageMain">
        <Callout message={"This site is an overview of the basics of using Framer Motion. This will go over: the basics, layout animations, and shared layout animations."} />
        <div className={styles.gridContainer}>
          <Link href="./transitions" className={`${styles.sectionCard} ${styles.shadowLight}`}>Transitions</Link>
          <Link href="./toggleSwitch" className={`${styles.sectionCard} ${styles.shadowLight}`}>Toggle Switch</Link>
          <Link href='./keyframes' className={`${styles.sectionCard} ${styles.shadowLight}`}>Keyframes</Link>
          <Link href='./gestures' className={`${styles.sectionCard} ${styles.shadowLight}`}>Gestures</Link>
          <Link href='./layoutAnimation' className={`${styles.sectionCard} ${styles.shadowLight}`}>Layout</Link>
          {/* <Link href='./layoutDemo' className={`${styles.sectionCard} ${styles.shadowLight}`}>Layout Demo</Link> */}
          <Link href='./sharedLayout' className={`${styles.sectionCard} ${styles.shadowLight}`}>Shared Layout</Link>
        </div>
        <ThreeBreaks />
        <ThreeBreaks />
        <ThreeBreaks />
        <ThreeBreaks />
        <ThreeBreaks />







      </main >
    </div>
  )
}

export default Home;
