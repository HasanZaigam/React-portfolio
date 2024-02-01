import React from 'react'
import { getImageUrl } from '../../utils';
import  styles from "./Hero.module.css";

export const Hero = () => {
  return (
    
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi.I'm Hasan</h1>
            <p className={styles.description}>I am a second-year B.Tech student at GGSIPU and a skilled frontend developer with hands-on experience in React and Node.js. 
               If you are looking to connect with me or collaborate on projects, feel free to reach out. 
               I am enthusiastic about web development and bring a strong foundation in both design and coding to the table. </p>
            <a href="mailto:hasan.13519011722@ipu.ac.in" className={styles.contactbtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/hassan.png")} className= {styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        
    </section>
  )
}
