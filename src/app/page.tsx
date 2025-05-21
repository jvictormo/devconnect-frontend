import { FaGithub } from "react-icons/fa";
import styles from "./landingpage.module.css";

export default function Home() {
  return (
    <div className={styles["landingpage-container"]}>
      <div className={styles["landingpage-logo-container"]}>
        <img src="devconnect-logo.png" />
        <h1>DevConnect</h1>
      </div>
      <main className={styles["landingpage-main-content"]}>
        <div className={styles["landingpage-main-quote"]}>
          <h1>Connect, Share, Grow</h1>
          <p>Minimalist social network for developers
            to showcase subjects, publish articles
            and build real techincal connections.</p>
          <button>Join us for free</button>
        </div>
        <div className={styles["landingpage-features-modal-container"]}>
          <div>
            <span>
              <img src="language-markdown.svg" />
              <h6>Markedown-powered posts</h6>
            </span>
            <label>Write and format your posts with ease vig markdown</label>
          </div>
          <div>
            <span>
              <img src="account-multiple.svg" />
              <h6>Follow devs & curate your feed</h6>
            </span>
            <label>Dicover and follow like-minded developers</label>
          </div>
          <div>
            <span>
              <img src="cloud.svg" />
              <h6>Public REST API/GRPQQL</h6>
            </span>
            <label>Utilize our API to access and share data</label  >
          </div>
        </div>
      </main>
      <form className={styles["landingpage-password-forms"]}>
        <button><FaGithub /> Login with Github</button>
        <div>
          <hr />
          <label>OR</label>
          <hr />
        </div>
        <input placeholder="Email or username" className="input-require" />
        <input placeholder="Password" />
        <button>Login</button>
        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">Forget Password ?</a>
        <p>Dont't have an account ? <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">Sign-up</a></p>
      </form>
    </div>
  );
}
