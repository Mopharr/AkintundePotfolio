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
    gsap.to(boxLine.current, { opacity: 1, duration: 3, delay: 2.5 });
    gsap.to(LogoImgg.current, { duration: 3, opacity: 1, delay: 4 });
    gsap.to(LogoMove.current, { duration: 3, x: "0%", delay: 6 });
    gsap.to(cover.current, { duration: 1.5, x: "100%", delay: 9 });
    gsap.to(cover1.current, { duration: 1.5, x: "100%", delay: 10 });
    gsap.to(cover2.current, { duration: 1.5, x: "100%", delay: 11 });
    gsap.to(cover3.current, { duration: 1.5, x: "100%", delay: 12 });
    gsap.to(Logo.current, { y: "-100%", duration: 1.5, delay: 13 });
  }, []);

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
            src="https://res.cloudinary.com/retyner-technologies/image/upload/v1661639549/akintunde/Cri_j69iw2.png"
            alt="logo"
            className={styles.logoImg}
            ref={LogoMove}
          />
        </div>

        <div className={styles.aniText}>
          <div className={styles.span1}>
            <div className={styles.cover} ref={cover}></div>
            <img
              src="https://res.cloudinary.com/retyner-technologies/image/upload/v1661956428/akintunde/C_lewpse.png"
              alt=""
            />
          </div>
          <div className={styles.span1}>
            <div className={styles.cover} ref={cover1}></div>
            <img
              src="https://res.cloudinary.com/retyner-technologies/image/upload/v1661956445/akintunde/R_dfw5nm.png"
              alt=""
            />
          </div>
          <div className={styles.span2}>
            <div className={styles.cover} ref={cover2}></div>
            <img
              src="https://res.cloudinary.com/retyner-technologies/image/upload/v1661956428/akintunde/I_bx8erz.png"
              alt=""
            />
          </div>
          <div className={styles.span1}>
            <div className={styles.cover} ref={cover3}></div>
            <img
              src="https://res.cloudinary.com/retyner-technologies/image/upload/v1661956428/akintunde/X_jg8j1s.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
