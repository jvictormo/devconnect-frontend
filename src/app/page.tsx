"use client"

import { FaGithub } from "react-icons/fa";
import styles from "./landingpage.module.css";
import { useState } from "react";
import SignupModal from "@/components/SignupModal/SignupModal";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  function onSignupClose() {
    setIsSignupOpen(false)
  }
  return (
    <>
      {/* Signup modal */}
      <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
      <div className={styles["landingpage-container"]}>
        {/* Logo */}
        <div className={styles["landingpage-logo-container"]}>
          <img src="devconnect-logo.png" alt="devconnect-logo" />
          <h1>DevConnect</h1>
        </div>
        {/* Main content */}
        <main className={styles["landingpage-main-content"]}>
          <div className={styles["landingpage-main-quote"]}>
            <h1>Connect, Share, Grow</h1>
            <p>Minimalist social network for developers
              to showcase subjects, publish articles
              and build real techincal connections.</p>
            {/* Account creation button*/}
            <button onClick={() => setIsSignupOpen(true)}>Join us for free</button>
          </div>
          <div className={styles["landingpage-features-cards-container"]}>
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
        {/* Login forms */}
        <form className={styles["landingpage-login-forms"]}>
          <button><FaGithub /> Login with Github</button>
          <div>
            <hr />
            <label>OR</label>
            <hr />
          </div>
          <input placeholder="Email or username" className="input-require" />
          <input placeholder="Password" />
          <button>Login</button>
          {/* Forget password Link */}
          <a>Forget Password ?</a>
          {/* Account creation quote and link */}
          <p>Dont't have an account ? <a onClick={() => setIsSignupOpen(true)}>Sign-up</a></p>
        </form>
      </div>
    </>
  );
}
