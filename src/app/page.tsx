export default function Home() {
  return (
    <div>
      <h1>DevConnect</h1>
      <main>
        <h3>Connect, Share, Grow</h3>
        <p>Minimalist social network for developers
          to showcase subjects, publish articles
          and build real techincal connections.</p>
        <button>Join us for free</button>
        <div>
          <h6>Markedown-powered posts</h6>
          <p>Write and format your posts with ease vig markdown</p>
        </div>
        <div>
          <h6>Follow devs & curate your feed</h6>
          <p>Dicover and follow like-minded developers</p>
        </div>
        <div>
          <h6>Public REST API/GRPQQL</h6>
          <p>Utilize our API to access and share data</p>
        </div>
      </main>
      <form>
        <button>Login with Github</button>
        <button>Login</button>
        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">Forget Password ?</a>
        <p>Dont't have an account ? <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">Sign-up</a></p>
      </form>
    </div>
  );
}
