import React from 'react';
import Image from 'next/image'
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

  return (
    <main className="pageMain">
      <div className={styles.gridContainer}>
      <Link href="./newPage" className={`${styles.sectionCard} ${styles.shadowLight}`}>New Page</Link>
      <Link href="./gooey" className={`${styles.sectionCard} ${styles.shadowLight}`}>Gooey Animation</Link>
      <Link href="./toggleSwitch" className={`${styles.sectionCard} ${styles.shadowLight}`}>Toggle Switch</Link>
      </div>
      <ThreeBreaks />
      <ThreeBreaks />
      <ThreeBreaks />
      <ThreeBreaks />
      <ThreeBreaks />
      
  
   
      



    </main >
  )
}

export default Home;
