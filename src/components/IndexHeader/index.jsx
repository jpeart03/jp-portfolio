import "./styles.scss";

const IndexHeader = () => {
  return (
    <header className="ih">
      <img className="ih-logo" src="/assets/logo.svg" alt="J P logo"></img>
      <h1>Jim Peart</h1>
      <p>Web Developer</p>
      <div className="ih-socials">
        <a
          href="https://github.com/jpeart03"
          target="_blank"
          rel="noreferrer"
          title="Jim's Github Link"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/james-peart"
          target="_blank"
          rel="noreferrer"
          title="Jim's Linkedin Link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default IndexHeader;
