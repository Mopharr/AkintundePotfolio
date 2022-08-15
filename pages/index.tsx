import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaTwitter, FaBehance, FaTimes } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { SetStateAction, useState } from "react";
import Loading from "../components/loading";
const Home: NextPage = () => {
  const [slide, setSlide] = useState("1");
  const [open, setOpen] = useState(false);

  const click = (e: any) => {
    setSlide(e.target.id);
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Akintunde Caulcrick</title>
        <meta name="description" content="I am a product Designer" />
        <meta
          name="viewport"
          content="width= devies-width, initial-scale = 1.0"
        />
        <meta name="theme-color" content="#000" />

        <link rel="icon" href="/Favicon.png" />
      </Head>
      {/* <Loading  /> */}
      <main className={styles.main}>
        <nav className={styles.top}>
          <Link href="/">
            <a>
              <img src="/crix.png" alt="logo" />
            </a>
          </Link>
          <div className={`${open ? styles.overAct : styles.over}`}>
            <div className={styles.navLink}>
              <ul>
                <li>About</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Blog</li>
                <li>Resume</li>
                <div className={styles.navBtn}>
                  <button className={styles.nBtn}>Get In Touch</button>
                  <button className={styles.nbtn}></button>
                </div>
              </ul>
            </div>
          </div>

          <div className={styles.ham}>
            {open ? (
              <FaTimes onClick={toggleOpen} />
            ) : (
              <GiHamburgerMenu onClick={toggleOpen} />
            )}
          </div>
        </nav>
        <header className={styles.header}>
          <div className={styles.headerDiv}>
            <div className={styles.text}>
              <h1>Akintunde Caulcrick</h1>
              <p>Product Designer</p>
            </div>
            <div className={styles.imgg}>
              <img src="/jiji.png" alt="header" className={styles.img} />
            </div>
            <div className={styles.imgg22}>
              <img src="/mobile.png" alt="mobileImg" className={styles.img22} />
            </div>
          </div>

          <section className={styles.link}>
            <div className={styles.linnkk}>
              <FaBehance className={styles.icon} />
              <FaLinkedinIn className={styles.icon} />
              <SiMedium className={styles.icon} />
              <FaTwitter className={styles.icon} />
            </div>
            <div className={styles.straight}></div>
          </section>
        </header>
        <section className={styles.about}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <h2>About Me</h2>
          <p>
            I am Akintunde Caulcrick, an experienced Product and UI/UX Designer
            based in Lagos, Nigeria. I take a subtle approach to providing
            user-centered solutions based on the goals of the product in
            question. I am also a team player, a collaborator, and a person with
            a keen interest and passion for designs. I have worked on a series
            of products on Fintech, Edutech, and in the Crypto industry. Some
            are still in the development stage, and others are in production
            with impressive reviews 🙂. When I&apos;m not working you will find
            me playing video games. I am a big lover of music, that&apos;s why
            my headset is always on to immerse myself in the zone and get the
            creative vibe going.
          </p>
          <div className={styles.dot3}></div>
          <div className={styles.dot4}></div>
        </section>
        <section className={styles.skill}>
          <h2>Skills</h2>
          <div className={styles.sk}>
            <div className={styles.skCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <img src="/wire.png" alt="wireframe" />
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <p>Wireframing</p>
            </div>
            <div className={styles.skCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <img src="/prototype.png" alt="prototype" />
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <p>Prototyping</p>
            </div>
            <div className={styles.skCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <img src="/responsive.png" alt="UI" />
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <p>UI Design</p>
            </div>
            <div className={styles.skCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <img src="/design.png" alt="UX" />
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <p>UX Design</p>
            </div>
          </div>

          <div className={styles.skill2}>
            <div className={styles.tolLa}>
              <div className={styles.tools}>
                <h2>Tools</h2>
                <ul>
                  <li>
                    <div className={styles.dot}></div> Figma
                  </li>
                  <li>
                    <div className={styles.dot}></div> Adope XD
                  </li>
                  <li>
                    <div className={styles.dot}></div> Adope Status
                  </li>
                  <li>
                    <div className={styles.dot}></div> Whimsical
                  </li>
                  <li>
                    <div className={styles.dot}></div> Protopie
                  </li>
                  <li>
                    <div className={styles.dot}></div> VS Code
                  </li>
                </ul>
              </div>
              <div className={styles.langMag}>
                <div className={styles.language}>
                  <h2>Language</h2>
                  <ul>
                    <li>
                      <div className={styles.dot}></div> HTML
                    </li>
                    <li>
                      <div className={styles.dot}></div> CSS
                    </li>
                  </ul>
                </div>
                <div className={styles.management}>
                  <h2>Management</h2>
                  <ul>
                    <li>
                      <div className={styles.dot}></div> Trello
                    </li>
                    <li>
                      <div className={styles.dot}></div> Jira
                    </li>
                    <li>
                      <div className={styles.dot}></div> Notion
                    </li>
                    <li>
                      <div className={styles.dot}></div> Slack
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.mjmj}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
            </div>
          </div>
        </section>
        <section className={styles.work}>
          <div className={styles.experience}>
            <div className={styles.new}>
              <h2>Where I’ve worked</h2>
              <div className={styles.place}>
                <div className={styles.progress}>
                  <div
                    className={`${
                      slide === "2"
                        ? styles.proMove
                        : slide === "3"
                        ? styles.proMove2
                        : slide === "4"
                        ? styles.proMove3
                        : styles.proActive
                    }`}
                  ></div>
                </div>

                <ul
                  className={`${
                    slide === "2"
                      ? styles.j1
                      : slide === "3"
                      ? styles.j2
                      : slide === "4"
                      ? styles.j3
                      : styles.placeList
                  }`}
                >
                  <li
                    id="1"
                    onClick={click}
                    className={`${
                      slide === "1"
                        ? ` ${styles.aactive} ${styles.tro}`
                        : `${styles.workLi} ${styles.tro2}`
                    }`}
                  >
                    01 Trove Finance, Lagos Nigeria
                  </li>
                  <li
                    id="2"
                    onClick={click}
                    className={`${
                      slide === "2"
                        ? `${styles.aactive} ${styles.nip}`
                        : `${styles.workLi} ${styles.nip2}`
                    }`}
                  >
                    02 Nippyeats Inc.
                  </li>
                  <li
                    id="3"
                    onClick={click}
                    className={`${
                      slide === "3"
                        ? `${styles.aactive} ${styles.nnh}`
                        : `${styles.workLi} ${styles.njh}`
                    }`}
                  >
                    03 Atechcoins
                  </li>
                  <li
                    id="4"
                    onClick={click}
                    className={`${
                      slide === "4"
                        ? `${styles.aactive} ${styles.nnh}`
                        : `${styles.workLi} ${styles.njh}`
                    }`}
                  >
                    04 UfitSub
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.placeDesc}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              {slide === "2" ? (
                <div>
                  <h3>Nippyeats Inc, Nassarawa - Product Designer</h3>

                  <p>Jun 2021 - Present</p>
                  <div className={styles.ccont}>
                    <ul>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slide === "3" ? (
                <div>
                  <h3>Atechcoins, Alaba Rago - Product Designer</h3>

                  <p>Jun 2021 - Present</p>
                  <div className={styles.ccont}>
                    <ul>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slide === "4" ? (
                <div>
                  <h3>UfitSub, HK - Product Designer</h3>

                  <p>Jun 2021 - Present</p>
                  <div className={styles.ccont}>
                    <ul>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h3>Trove Finance, Lagos Nigeria - Product Designer</h3>

                  <p>Jun 2021 - Present</p>
                  <div className={styles.ccont}>
                    <ul>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                      <li>
                        <div className={styles.ddot}></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Est cursus enim ultricies nisl arcu pellentesque et. Sed
                        non cursus magna in tellus.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className={styles.project}>
          <h2>Projects</h2>
          <div>
            <div className={styles.proCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <img src="/tor.png" alt="project" />
              <div className={styles.ttn}>
                <h3>Trove Finance, Lagos Nigeria</h3>
                <ul>
                  <li className={styles.ns}>Figma</li>
                  <li>Photoshot</li>
                  <li>Illustrator</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum eget venenatis senectus integer. Scelerisque
                  vulputate lectus nunc et egestas in vitae condimentum ipsum.
                  Quam nisi, in pellentesque at ut rhoncus in. Suspendisse non,
                  nisi, dictumst nulla egestas.
                </p>
                <div className={styles.relBtn}>
                  <button className={styles.relBtnN}>View Project</button>
                  <button className={styles.nbn}></button>
                </div>
              </div>
            </div>
            <div className={styles.proCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <img src="/tea.png" alt="project" />
              <div className={styles.ttn}>
                <h3>Trove Finance, Lagos Nigeria</h3>
                <ul>
                  <li className={styles.ns}>Figma</li>
                  <li>Photoshot</li>
                  <li>Illustrator</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum eget venenatis senectus integer. Scelerisque
                  vulputate lectus nunc et egestas in vitae condimentum ipsum.
                  Quam nisi, in pellentesque at ut rhoncus in. Suspendisse non,
                  nisi, dictumst nulla egestas.
                </p>
                <div className={styles.relBtn}>
                  <button className={styles.relBtnN}>View Project</button>
                  <button className={styles.nbn}></button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.proCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <img src="/tor.png" alt="project" />
              <div className={styles.ttn}>
                <h3>Trove Finance, Lagos Nigeria</h3>
                <ul>
                  <li className={styles.ns}>Figma</li>
                  <li>Photoshot</li>
                  <li>Illustrator</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum eget venenatis senectus integer. Scelerisque
                  vulputate lectus nunc et egestas in vitae condimentum ipsum.
                  Quam nisi, in pellentesque at ut rhoncus in. Suspendisse non,
                  nisi, dictumst nulla egestas.
                </p>
                <div className={styles.relBtn}>
                  <button className={styles.relBtnN}>View Project</button>
                  <button className={styles.nbn}></button>
                </div>
              </div>
            </div>
            <div className={styles.proCon}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <img src="/tea.png" alt="project" />
              <div className={styles.ttn}>
                <h3>Trove Finance, Lagos Nigeria</h3>
                <ul>
                  <li className={styles.ns}>Figma</li>
                  <li>Photoshot</li>
                  <li>Illustrator</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum eget venenatis senectus integer. Scelerisque
                  vulputate lectus nunc et egestas in vitae condimentum ipsum.
                  Quam nisi, in pellentesque at ut rhoncus in. Suspendisse non,
                  nisi, dictumst nulla egestas.
                </p>
                <div className={styles.relBtn}>
                  <button className={styles.relBtnN}>View Project</button>
                  <button className={styles.nbn}></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.blog}>
          <h2>Blog Posts</h2>
          <div className={styles.proCon}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
            <div className={styles.dot4}></div>
            <img src="/tor.png" alt="project" />
            <div className={styles.ttn}>
              <h3>Trove Finance, Lagos Nigeria</h3>
              <ul>
                <li className={styles.ns}>Figma</li>
                <li>Photoshot</li>
                <li>Illustrator</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum eget venenatis senectus integer. Scelerisque
                vulputate lectus nunc et egestas in vitae condimentum ipsum.
                Quam nisi, in pellentesque at ut rhoncus in. Suspendisse non,
                nisi, dictumst nulla egestas.
              </p>
              <div className={styles.relBtn}>
                <button className={styles.relBtnN}>Read</button>
                <button className={styles.nbn}></button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>Let’s Create Something Together</h2>
          <p>
            I am based in Lagos but can either work remotely or travel to your
            location. Feel free to contact me for any project request,
            hackathon, or a basketball game. My inbox is always open. I’d try my
            best to answer your mail.
          </p>
          <div className={styles.contactBtn}>
            <button className={styles.ccBtn}>Say Hello</button>
            <button className={styles.nnbtn}></button>
          </div>
        </section>

        <footer className={styles.footer}>
          <section className={styles.link}>
            <FaBehance className={styles.icon} />
            <FaLinkedinIn className={styles.icon} />
            <SiMedium className={styles.icon} />
            <FaTwitter className={styles.icon} />
          </section>
          <p>Designed by Akintunde Caulcrick</p>
          <p>&#169; 2022 Crix. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
