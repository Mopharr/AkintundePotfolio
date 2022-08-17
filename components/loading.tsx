import styles from "../styles/loading.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const Logo: any = useRef();
  const LogoMove: any = useRef()
  const LogoImgg: any = useRef();
  const boxLine: any = useRef();
  const cover: any = useRef()

  useEffect(() => {
    gsap.to(boxLine.current, { opacity: 1, duration: 3 }, 2.5);
    gsap.to(LogoImgg.current, { duration: 3, opacity: 1 }, 4);
    gsap.to(LogoMove.current, { duration: 3, x: "0%" }, 6);
    gsap.to(cover.current, { duration: 3, x: "50%" }, 8);
    gsap.to(Logo.current, { y: "-100%" }, 10.8);
  }, [gsap]);

  return (
    <div className={styles.container} ref={Logo}>
      <div className={styles.box} ref={boxLine}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
        <div className={styles.dot4}></div>
      </div>
      <div className={styles.loading}>
        <div className={styles.enter} ref={LogoImgg}>
          <img
            src="/Cri.png"
            alt="logo"
            className={styles.logoImg}
            ref={LogoMove}
          />
        </div>
        <div className={styles.aniText} >
          <div className={styles.cover} ref={cover}></div>
          <span>C</span> <span>R</span> <span>I</span> <span>X </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
