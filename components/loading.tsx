import styles from "../styles/loading.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const Logo: any = useRef();

  useEffect(() => {
    gsap.to(Logo.current, { y: "-100%" }, 15);
  }, [gsap]);

  return (
    <div className={styles.container} ref={Logo}>
      <div className={styles.box}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
        <div className={styles.dot4}></div>

        <div className={styles.loading}>
          <img src="/Cri.png" alt="logo" className={styles.logoImg} />{" "}
          <span>C</span> <span>R</span> <span>I</span> <span>X </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
