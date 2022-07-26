import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";
import { SiMedium } from 'react-icons/si'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akintunde Caulcrick</title>
        <meta name="description" content="I am a product Designer" />
        <link rel="icon" href="/" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.top}>
          <a href="/">
            <img src="/crix.png" alt="logo" />
          </a>
          <div className={styles.navLink}>
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Project</li>
              <li>Blog</li>
              <li>Resume</li>
              <li className={styles.active}>Get In Touch</li>
            </ul>
          </div>
        </nav>
        <header className={styles.header}>
          <div className={styles.text}>
            {/* <h1>𝔸𝕜𝕚𝕟𝕥𝕦𝕟𝕕𝕖 ℂ𝕒𝕦𝕝ℂ𝕣𝕚𝕔𝕜</h1> */}
            <h1>Akintunde CaulCrick</h1>
            <p>Product Designer</p>
          </div>
          <div className={styles.imgg}>
            <img src="/akin.png" alt="header" className={styles.img} />
          </div>
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
            with impressive reviews 🙂. When I’m not working you will find me
            playing video games. I am a big lover of music, that's why my
            headset is always on to immerse myself in the zone and get the
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
                    <div className={styles.dot}></div> Whimsical{" "}
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
                      {" "}
                      <div className={styles.dot}></div> HTML
                    </li>
                    <li>
                      {" "}
                      <div className={styles.dot}></div> CSS
                    </li>
                  </ul>
                </div>
                <div className={styles.management}>
                  <h2>Management</h2>
                  <ul>
                    <li>
                      {" "}
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
          <h2>Where I’ve worked</h2>

          <div className={styles.experience}>
            <div className={styles.place}>
              <ul>
                <li className={styles.aactive}>
                  01 Trove Finance, Lagos Nigeria
                </li>
                <li>02 Nippyeats Inc.</li>
                <li>03 Atechcoins</li>
                <li>04 UfitSub</li>
              </ul>
            </div>
            <div className={styles.placeDesc}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <h3>
                Trove Finance, Lagos Nigeria{" "}
                <ul>
                  <li>Product Designer</li>{" "}
                </ul>
              </h3>

              <p>Jun 2021 - Present</p>
              <div className={styles.ccont}>
                <ul>
                  <li>
                    <div className={styles.ddot}></div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    cursus enim ultricies nisl arcu pellentesque et. Sed non
                    cursus magna in tellus.{" "}
                  </li>
                  <li>
                    <div className={styles.ddot}></div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    cursus enim ultricies nisl arcu pellentesque et. Sed non
                    cursus magna in tellus.{" "}
                  </li>
                  <li>
                    <div className={styles.ddot}></div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                    cursus enim ultricies nisl arcu pellentesque et. Sed non
                    cursus magna in tellus.{" "}
                  </li>
                </ul>
              </div>
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
                <button>View Project</button>
              </div>
            </div>
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
                <button>View Project</button>
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
                <button>View Project</button>
              </div>
            </div>
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
                <button>View Project</button>
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
              <button>Read</button>
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
          <button>Say Hello</button>
        </section>
        <section className={styles.link}>
          <FaBehance className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
          <SiMedium className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </section>
        <footer className={styles.footer}>
          <p>Designed by Akintunde Caulcrick</p>
          <p>&#169; 2022 Crix. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
