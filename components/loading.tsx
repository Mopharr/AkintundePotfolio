 import styles from '../styles/loading.module.css'
 import {gsap} from "gsap"
 import {useRef, useEffect} from 'react'

const Loading = () => {

    const Logo: any = useRef()

    useEffect(() => {
    //  gsap.to(Logo.current, {y: "100%"}, 1.5)
    }, [])
    


  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
        <div className={styles.dot4}></div>

        <div className={styles.loading}>
          <img src="/Cri.png" alt="logo" className={styles.logoImg} />

        </div>
      </div>
    </div>
  );
}

export default Loading