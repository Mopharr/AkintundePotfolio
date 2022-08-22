import styles from "../styles/loading.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const Logo: any = useRef();
  const LogoMove: any = useRef();
  const LogoImgg: any = useRef();
  const boxLine: any = useRef();
  const cover: any = useRef();
  const cover1: any = useRef();
  const cover2: any = useRef();
  const cover3: any = useRef();

  useEffect(() => {
    gsap.to(boxLine.current, { opacity: 1, duration: 3 , delay: 2.5});
    gsap.to(LogoImgg.current, { duration: 3, opacity: 1, delay: 4 });
    gsap.to(LogoMove.current, { duration: 3, x: "0%", delay: 6 });
    gsap.to(cover.current, { duration: 1.5, x: "100%", delay: 8});
    gsap.to(cover1.current, { duration: 1.5, x: "100%", delay: 9 });
    gsap.to(cover2.current, { duration: 1.5, x: "100%" , delay: 10});
    gsap.to(cover3.current, { duration: 1.5, x: "100%", delay: 11 });
    gsap.to(Logo.current, { y: "-100%", delay: 12 });
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

        <div className={styles.aniText}>
          <div className={styles.span1}>
            <div className={styles.cover} ref={cover}></div>
            <span>C</span>
          </div>
          <div className={styles.span1}>
            <div className={styles.cover} ref={cover1}></div>
            <span>R</span>
          </div>
          <div className= {styles.span2}>
            <div className={styles.cover} ref={cover2}></div>
            <span>I</span>
          </div>
          <div className= {styles.span1}>
            <div className={styles.cover} ref={cover3}></div>
            <span>X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
